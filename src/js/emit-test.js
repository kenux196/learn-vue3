function runSomeAction(afterRunner) {
  console.log('into runSomeAction');
  setTimeout(() => {
    console.log('Action is Done');
    afterRunner();
  }, 1000);
}

export { runSomeAction };
