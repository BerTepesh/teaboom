export default function getAttributeValue ($element, attribute, defaultValue = '') {
	let rawValue = $element.attr(attribute);		
	let value = rawValue || defaultValue;
	
	if (typeof defaultValue === 'number' && typeof value !== 'number') {
			value = parseFloat(value);
	} else if (typeof defaultValue === 'boolean' && typeof rawValue === 'string') {
			value = value === '' || value === 'true' ? true : false;
	}

	return value;
}