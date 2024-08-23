import { Builder } from 'builder-pattern';

class User {
  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.age = '';
    this.address = '';
  }

  updateName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  displayName() {
    console.log(`My name is ${this.lastName} ${this.firstName}`);
  }

  static create(firstName, lastName, age, address) {
    return Builder(User).firstName(firstName).lastName(lastName).age(age).address(address).build();
  }
}

export default User;
