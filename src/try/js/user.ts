class UserTs {
  name: String;
  age: Number;

  constructor(name: String, age: Number) {
    this.name = name;
    this.age = age;
  }

  toDisplay() {
    console.log(this);
  }

  changeName(name: String) {
    this.name = name;
  }
}

const user3 = new UserTs('kenux', 10);
user3.toDisplay();
user3.changeName('kenux123');
user3.toDisplay();
