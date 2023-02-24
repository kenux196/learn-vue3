export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  changeName(name) {
    this.name = name;
  }

  toDisplaay() {
    // console.log(JSON.stringify(this));
    console.log(this);
  }
}

const user1 = new User('kenux', 10);
console.log(user1);
user1.changeName('kenux196');
user1.toDisplaay();
