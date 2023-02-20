let a = 'string';
a = 'hello';
console.log(a);

// const b = 'String';
// b = 'hello';
// console.log(b);

let sum = (a, b) => a + b;
console.log(sum(1, 3));

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   '동의하십니까?',
//   () => console.log('동의하셧습니다.'),
//   () => console.log('취소하셧습니다.')
// );

// 객체
let user = new Object();
console.log(typeof user);
let user2 = {};
console.log(typeof user2);

let customer = {
  name: 'costomer1',
  address: '대구',
};
console.log(customer);
customer.address = 'seoul';
console.log(customer);
customer.isAdmin = false;
console.log(customer);
delete customer.isAdmin;
console.log(customer);

function makeUser(name, age) {
  return {
    name,
    age,
  };
}

let userA = makeUser('kenux', 33);
console.log(userA);
console.log(typeof userA.age);

let userB = {
  0: 'test',
};
console.log(userB[0] === userB['0']);

console.log('name' in userA);
let key = 'name';
console.log(key in userA);

for (key in userA) {
  console.log(key + ':' + userA[key]);
}
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
const emptyObj = {};
console.log(isEmpty(emptyObj));
console.log(isEmpty(userA));

let message = 'hello';
let phrase = message;
message = message + '!';
console.log(message);
console.log(phrase);

const member = {
  name: 'kenux',
  age: 10,
  greeting() {
    console.log('Hello! ' + this.name);
  },
};

member.greeting();

// 심볼형 : '심볼(symbol)'은 유일한 식별자(unique identifier)를 만들고 싶을 때 사용합니다.
let id = Symbol('id');
console.log(id);
let id2 = Symbol('id');
console.log(id2);
console.log(id2.description);
console.log(id == id2);

member[id] = 1;
console.log(member);
console.log(Object.keys(member)); // symbol은 제외된다.

// Symbol은 원시형 데이터로, 유일무이한 식별자를 만드는 데 사용됩니다.
// Symbol()을 호출하면 심볼을 만들 수 있습니다. 설명(이름)은 선택적으로 추가할 수 있습니다.
// 심볼은 이름이 같더라도 값이 항상 다릅니다.
// 이름이 같을 때 값도 같길 원한다면 전역 레지스트리를 사용해야 합니다.
// Symbol.for(key)는 key라는 이름을 가진 전역 심볼을 반환합니다.
// key라는 이름을 가진 전역 심볼이 없으면 새로운 전역 심볼을 만들어줍니다.
// key가 같다면 Symbol.for는 어디서 호출하든 상관없이 항상 같은 심볼을 반환해 줍니다.
