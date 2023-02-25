const person = {
  // name: ['Bob', 'Smith'],
  name: {
    first: 'Bob',
    last: 'Smith',
  },
  age: 32,
  gender: 'male',
  intrests: ['music', 'skiing'],
  bio: function () {
    console.log(
      this.name['first'] +
        ' ' +
        this.name.last +
        ' is ' +
        this.age +
        ' years old. He likes ' +
        this.intrests[0] +
        ' and ' +
        this.intrests[1] +
        '.'
    );
  },
  greeting: function () {
    console.log("Hi! I'm " + this.name[0] + '.');
  },
};

console.log(person.name);
console.log(person['age']);
console.log(person.intrests[1]);
person.bio();
person.greeting();

person['eyes'] = 'hazel';
person.farewell = function () {
  console.log('Bye everybody!');
};

console.log(person.eyes);
person.farewell();

class Car {
  constructor(name, type, vendor) {
    this.name = name;
    this.type = type;
    this.vendor = vendor;
  }
}

const car = new Car('올란도', 'MPV', '쉐보레');
console.log(car.valueOf());
console.log(Object.getPrototypeOf(car));
console.log(car.prototype)