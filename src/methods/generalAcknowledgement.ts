import messageFormatter from "./messageFormatter"
import messageClassifier from "./common/messageClassifier"



const generateGenericHL7Reply = (message) => {
	const MSH = message['MSH'][0] || null

	if (!MSH) {
		return null
	}

	const sendingApplication = MSH['3'] || ''
	const sendingFacility = MSH['4'] || ''
	const receivingApplication = MSH['5'] || ''
	const receivingFacility = MSH['6'] || ''
	const messageControlId = MSH['10'] || ''

	MSH[3] = receivingApplication
	MSH[4] = receivingFacility
	MSH[5] = sendingApplication
	MSH[6] = sendingFacility
	MSH[9] = 'ACK'

	const messageHeader = Object.values(MSH).map((field) => {
		
		if (field instanceof Object) { // To accomodate components & subcomponents
			return Object.values(field).join('')
		}
		else if (field instanceof Array) { // To accomodate repititions
			return field.join('')
		}
		else {
			return field
		}
	}).join('|').substring(1)

	const messageHeaderSegment = `MSH${messageHeader}`

	const messageAcknowledgementSegment = `MSA|AA|${messageControlId}`
	
	return `\u000b${messageHeaderSegment}\r${messageAcknowledgementSegment}\r\u001c\r`
}

const generalAcknowledgement = (message: {[key: string]: any} | string): string => {

	const { protocol } = messageClassifier(message)

	if (typeof(message) === 'string') {
		message = messageFormatter(message)
	}
	
	if (protocol === 'HL7') {
		return generateGenericHL7Reply(message)
	}

	else if (protocol === 'ASTM') {
		return '\u000b\u0006\r\u001c\r'
	}

	else {
		return '\u000b\u0006\r\u001c\r'
	}
}

export default generalAcknowledgement