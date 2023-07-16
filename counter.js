export function setupCounter(element) {
  // let counter = 0
  // const setCounter = (count) => {
  //   counter = count
  //   element.innerHTML = `count is ${counter}`
  // }
  // element.addEventListener('click', () => setCounter(counter + 1))
  // setCounter(0)
  // process.env = { ...process.env, ...loadEnv(mode, process.cwd())};
  const id = `${__id__}`;
  element.innerHTML =  `id is ${id}`
  console.log(id);
}
