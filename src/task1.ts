
const hello = (a: string): Function => {

	return (b: string, c: string): string => {
	
		return a + " " + b + " " + c
	}

}

const world = hello("hello")

const helloWorld = world("world", ":)")

console.log(helloWorld)