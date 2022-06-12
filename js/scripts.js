function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

let testContact = new Contact('Ada', 'Lovelace', '503-555-1111');

console.log(testContact);

console.log(testContact.lastName);

Contact.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName;
};

console.log(testContact.fullName());
