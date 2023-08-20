export function fakePromise(ms = 0) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms)
  })
}
