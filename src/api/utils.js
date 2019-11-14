function waitFor(miliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, miliseconds);
  });
}

setTimeout(function() {
  console.log('READY');
  setTimeout(() => {
    console.log('AGAIN');
  }, 2000);
}, 2000);

waitFor(2000)
  .then(() => {
    console.log('READY');
    return waitFor(2000);
  })
  .then(() => {
    console.log('AGAIN');
  });

async function doSomething() {
  await waitFor(2000);
  console.log('READY');
  await waitFor(2000);
  console.log('AGAIN');
}

setInterval(() => {
  console.log('hier bin ich');
}, 2000);
