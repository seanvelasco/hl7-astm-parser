import { segmentNamesDictionary, elementGroup } from "../constants/hl7"
import messageClassifier from "./common/messageClassifier"
import messageFormatter from "./messageFormatter"

const messageParser = (message: {[key: string]: any} | string) => {

	const { protocol } = messageClassifier(message)

	if (typeof(message) === 'string') {
		message = messageFormatter(message)
	}

	if (protocol === 'HL7') {
		// console.log('HL7 message')
	}

	if (protocol === 'ASTM') {
		return null
	}

	if (message == null || message == undefined) {
		return null
	}

	return Object.entries(message).map((segmentName) => {

		const key = segmentName[0] // unique segment names ('MSH', 'OBR', 'OBX', ...)
		const entries = segmentName[1] // segment objects [{1: '...', 2: '...', ...}, {1: '...', 2: '...', ...}, ...] under the unique segment name
	
		const name = segmentNamesDictionary[key] // Yields 'Message Header' for 'MSH', 'Observation/Result' for 'OBR', etc.
	
		const items = entries.map((entry: any) => {

			return Object.values(entry).reduce((accummulator: {[key: string]: any}, field: any, fieldIndex) => {
				let fieldName = elementGroup[key][fieldIndex][0]
				if (!fieldName) {
					fieldName = fieldIndex + 1
				}
				if (field instanceof Object) {
					const component: any = Object.values(field).reduce((accummulator: any, subField, componentIndex) => {
						let componentName = elementGroup[key][fieldIndex][1][componentIndex]
						if (!componentName) {
							componentName = componentIndex + 1
						}
						return { ...accummulator, [componentName]: subField }
					}, {})

					if (component.length != 0) {
						return { ...accummulator, [fieldName]: component }
					}
				}
				if (field.length != 0) { // Filters out empty fields
					return { ...accummulator, [fieldName]: field }
				}
				return accummulator
			}, {})
			
		})

		return { [name]: items }
	})

}

export default messageParser