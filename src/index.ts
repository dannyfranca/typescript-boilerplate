// start coding

/**
 * Just a Hello TypeScript function with typedoc and environment variable, used in cypress test too
 * @returns {string}
 */
function helloWorld() {
  const message = process.env.HELLO_WORLD
  console.log(message)
  return message
}

export default helloWorld
