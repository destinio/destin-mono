import { id } from '@destinio/id'

/**
 * hello
 * It says hello
 * No params
 * No nothing. Ever. Again...
 */
function hello() {
  console.log('Hello from destin world!')
  console.log(id())
}

/**
 * helloWithName - logs a welcome message with your name.
 * @param name string
 */
function helloWithName(name: string) {
  console.log(`Hello, ${name}. Welcome to destin world.`)
}

export { hello, helloWithName }
