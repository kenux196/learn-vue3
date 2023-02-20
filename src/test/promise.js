// js promise

let promise = new Promise(function (resolve, reject) {
  // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.

  // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 '완료'가 됩니다.
  setTimeout(() => resolve('완료'), 1000);
});

// executor는 new Promise에 의해 자동으로 그리고 즉각적으로 호출됩니다.
// executor는 인자로 resolve와 reject 함수를 받습니다.
// 이 함수들은 자바스크립트 엔진이 미리 정의한 함수이므로 개발자가 따로 만들 필요가 없습니다.
// 다만, resolve나 reject 중 하나는 반드시 호출해야 합니다.

// let promiseError = new Promise(function (resolve, reject) {
//   // 1초 뒤에 에러와 함께 실행이 종료되었다는 신호를 보냅니다.
//   setTimeout(() => reject(new Error('에러 발생!')), 1000);
// });

promise.then(
  (result) => console.log(result),
  (error) => console.log(error)
);

function delay(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(1), ms));
}

delay(3000).then(() => console.log('Run after 3sec'));

new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000))
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => console.log(result));

async function f() {
  console.log('async~~~');
  return 1;
}
f().then(console.log);

async function f2() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve('complete'), 1000);
  });
  let result = await promise;
  console.log(result);
}
f2();
