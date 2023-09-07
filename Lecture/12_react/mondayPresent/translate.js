import { translate } from '@vitalets/google-translate-api';

const { text } = await translate('Привет мир');

console.log(text);