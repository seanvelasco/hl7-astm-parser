const messageClassifier = (message: {[key: string]: any} | string): {[key: string]: any} => {

    const fieldLimiter = '|'
    let encodingCharacters
    let protocol

    if (typeof(message) === 'object') {

        if (message['MSH'] || message['H']) {
            if (message['MSH']) {
                encodingCharacters = message['MSH'][0][2]
                return { protocol: 'HL7', fieldLimiter, encodingCharacters }
            }
            if (message['H']) {
                encodingCharacters = message['H'][0][2]
                return { protocol: 'ASTM', fieldLimiter, encodingCharacters }
            }
        }

        // Messages can still be classified in the absense of a message header

        else {

            // Check every segment name (MSH or H, OBX or R, etc) in a message if they correspond to their correct lengths

            if (Object.keys(message).every(key => { key.length === 3 && key.length > 0 })) {
                encodingCharacters = '$~\\&'
                return { protocol: 'HL7', fieldLimiter, encodingCharacters }
            }
            else if (Object.keys(message).every(key => { key.length === 1 && key.length > 0 })) {
                encodingCharacters = '\\^&'
                return { protocol: 'ASTM', fieldLimiter, encodingCharacters }
            }
            else {
                throw new Error('Invalid message')
            }
        }
    }

    try {
        encodingCharacters = message
            .match(/(?<=H\|).*?(?=\|)/g)
            .shift()
            .replace(/(.)\1+/g, ([match]) => match)
        if (encodingCharacters === '') throw Error
    }
    catch (error) {
        console.warn('Unable to locate message header segment')
    }

    const segments = message
        .replace(/\u000b/g, '').replace(/\r\u001c\r/g, '')
        .replace(/\u00[0-1][A-D|a-d]/g, '')
        .split(/\\r\\n|\r\n|\\n\\r|\r\n|\\r|\r|\\n|\n/)
        .map(segment => segment.replace(/\\/g, ''))

    const segmentNames = segments.map(segment => {
        const [segmentName] = segment.split(fieldLimiter)
        
        if (segmentName.length === 3 || segmentName.length === 1) {
            return segmentName
        }

    }).filter(segmentName => segmentName)

    if (segmentNames.every(segment => segment.length === 3) && segmentNames.length > 0) {
        protocol = 'HL7'
    }
    else if (segmentNames.every(segment => segment.length === 1) && segmentNames.length > 0) {
        protocol = 'ASTM'
    }
    else throw new Error('Invalid message')

    if (encodingCharacters.length !== 4 && encodingCharacters.length !== 3) {
        if (protocol === 'HL7') {
            console.warn('Invalid encoding characters for HL7 message')
            encodingCharacters = '$~\\&'
        }
        if (protocol === 'ASTM') {
            console.warn('Invalid encoding characters for ASTM message')
            encodingCharacters = '\\^&'
        }
    }

    if (protocol === 'ASTM') {
        encodingCharacters = fieldLimiter + encodingCharacters
	}

    return { protocol, fieldLimiter, encodingCharacters }    
}

export default messageClassifier