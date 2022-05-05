import messageClassifier from "./common/messageClassifier";

const messageFormatter = (message: string): {[key: string]: object} => {

	let { protocol, fieldLimiter, encodingCharacters } = messageClassifier(message)

	let fieldSeparator, componentSeparator, repetitionSeparator, escapeCharacter, subcomponentSeparator

	if (protocol === 'HL7') {
		fieldSeparator = fieldLimiter;
		[componentSeparator, repetitionSeparator, escapeCharacter, subcomponentSeparator] = encodingCharacters
	}
	
	if (protocol === 'ASTM') {
		[fieldSeparator, repetitionSeparator, componentSeparator, escapeCharacter] = encodingCharacters
	}

	// Design decision to replace start and end blocks with a return carriage
	// Replacing "\u000b" & "\u001c" with "\r" or simply "" have the same effect for valid messages
	// However, using "\r" will correctly parse messages with multiple MSH segments with no separation

	// Example: MSH|^~\\&|2|3|LIS|PC|20130606091\u000bMSH|^~\\&|2|3|LIS|PC|20130606091800
	// The above will treat the second MSH segment as a field in the first MSH segment when "" is used as replacement
	// Whereas replacing with "\r" will correctly treat second MSH segment as its own segment

	const segments = message
		.replace(/\u000b/g, '\r').replace(/\r\u001c\r/g, '\r') // Remove start block & end block
		.replace(/\u00[0-1][A-D|a-d]/g, '\r') // Remove start block & end block
		.split(/\\r\\n|\r\n|\\n\\r|\r\n|\\r|\r|\\n|\n/) // Split message into segments at newlines or carriage returns
		.map(segment => segment.replace(/\\/g, '')) // Filter out unnecessary escape characters as a result of multiple stringifying
	
	const unsortedSegmentGroup: any[] = segments.map(segment => { // Map through each segment & split into fields
		const [segmentName, ...segments] = segment.split('|')
		// Filter out illegal segments
		// A valid segment must contain three-character segment name (eg. 'MSH', 'OBR', 'OBX', etc.) for HL7 and one-character segment name for ASTM
		if (segmentName.match(/^[A-Z]{3}$/) || segmentName.match(/^[A-Z]{1}$/)) { 

			if (protocol === 'ASTM') {
				segments.unshift(segmentName)
			}

			return [segmentName, segments]
		}
		else {
			return null
		}

	}).filter(segment => segment) // Remove null elements as a result of the above filter

 	// Design decision to allow for parsing even in the absence of a message header
 	if (unsortedSegmentGroup[0][0] == 'MSH') { 
		// Add '|' at index 1, in between 'MSH' element and the encoding characters (e.g. '^~\&') for HL7 standard conformance
		// Rationale: '|' or the delimiter is the first field in the MSH segment...
		// ...which is lost when '|' itself was is to form the substrings in the previous step
		unsortedSegmentGroup[0][1].unshift(fieldSeparator)
	}
	
	const sortedSegmentGroup = unsortedSegmentGroup.reduce((accumulator, [segmentName, segments]) => {

		accumulator[segmentName] = accumulator[segmentName] || []

		accumulator[segmentName].push(segments.reduce((accumulator, segment, index) => {

			// Convert segment (fields) into sub-fields
			const component = segment.split(componentSeparator) // Split field into components
			const repeatedField = segment.split(repetitionSeparator) // Split field into repetitions
			/////////// COMPONENT & SUB-COMPONENT ////////////
			
			if (component.length > 1) {
				// If sub-fields exist, convert each sub-field into an object
				accumulator[index + 1] = component.reduce((accumulator, component, componentIndex) => {
					accumulator[componentIndex + 1] = component

					const subComponent = component.split(subcomponentSeparator)

					if (subComponent.length > 1) {
					// 	// If sub-sub-fields exist, convert each sub-sub-field into an object
				 		accumulator[componentIndex + 1] = subComponent.reduce((accumulator, subComponent, subComponentIndex) => {
				 		accumulator[subComponentIndex + 1] = subComponent
				 		return accumulator
				 		}, {})
					}

					return accumulator
				}, {})
			}
			/////////// FIELD REPEATER ///////////
			
			else if (repeatedField.length > 1) {
				// If fields are repeated, convert each field into an object
				// accumulator[index + 1] = repeatedField.reduce((accumulator, repeatedField, repeatedFieldIndex) => {
				// 	accumulator[repeatedFieldIndex + 1] = repeatedField
				// 	return accumulator
				// }, {})

				// If fields are repeated, convert each field into an array
				accumulator[index + 1] = repeatedField
			}
			else {
				// If no repeating field exists, leave as a string
				accumulator[index + 1] = segment
			}
			return accumulator

		}, {}))

		return accumulator

	}, {})

	// Ammend affected fields as a result of the above transformations
	
	if (sortedSegmentGroup['MSH']) {
		sortedSegmentGroup['MSH'].map(segment => {
			segment[1] = fieldLimiter
			segment[2] = encodingCharacters
		})
	}

	if (sortedSegmentGroup['H']) {
		sortedSegmentGroup['H'].map(segment => {
			segment[2] = encodingCharacters
		})
	}

	return sortedSegmentGroup
}

export default messageFormatter