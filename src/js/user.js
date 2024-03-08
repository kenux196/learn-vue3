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
