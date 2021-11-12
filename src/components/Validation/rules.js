const emailRegex = new RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
);
const phoneRegex = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);

export const rules = {
  text: [
    [val => !!val.trim(), 'The text field cannot be empty'],
    [val => val.length < 100, 'Exceeded the character limit of the text field'],
  ],
  email: [
    [val => !!val.trim(), 'The text field cannot be empty'],
    [val => emailRegex.test(val), 'The entered email is incorrect'],
  ],
  phone: [
    [val => !!val.trim(), 'The text field cannot be empty'],
    [val => phoneRegex.test(val), 'The entered number is incorrect'],
  ],
  message: [
    [val => !!val.trim(), 'The text field cannot be empty'],
    [val => val.length < 500, 'Exceeded the character limit of the text field'],
  ],
};
