export function fakePromise() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 0)
  })
}
