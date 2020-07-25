// Define variables
let z = 'string'
let x:boolean = true
let y:number = 40
let superhero:string = 'batman';

let isSuperHero:string = `${superhero} is the best super hero ${x}`

let a:any
let b
b = 3
b = true

let helo = (s:number):Function => {
	console.log('hello world')
	return function (f:number):number {
		return s * f
	}
}

// custom type
type Person = {
	name: string
	years: number
}

interface User {
	readonly id: string
	username: string
	email: string
	password: string
	avatara?: string
}

function greatting(user:Person): string {
	return `${user.name} has ${user.years} years old`
}

const edgar:Person = {
	name: 'rafa',
	years: 40
}

let personarr:Person[] = [edgar]

const arr:any[] = [1,2,'Hello']

arr.push(4)
arr.push(true)

console.log(arr);

personarr.push(edgar)
personarr.push({name: 'rafa', years:43})

console.log(personarr);


console.log(greatting(edgar));
const res:number = helo(3)(5)

console.log(res);


console.log(typeof isSuperHero)

type Orientation = {
	portrait?: boolean
	vertical?: boolean
}

interface PictureKeys {
	id?: string
	title?: string
	orientation?: Orientation
}

//Classes
class Picture implements PictureKeys{
	 #id: string
	 #title: string
	 #orientation: Orientation

	constructor(init:PictureKeys){
		this.#id = init.id
		this.#title = init.title
		this.#orientation = init.orientation
	}
	
	get title(): string {
		return this.#title
	}

	get orientation():Orientation {
		return this.#orientation
	}

	set title(title: string) {
		this.#title = title
	}
	
	set orientation(orientation: Orientation){
		this.#orientation = orientation
	}

	toString(): string{
		return `[id:${this.#id}, title: ${this.#title}, orientation: ${this.#orientation}]`
	}
}


const picture:Picture = new Picture({id: '123', title: "album", orientation: {portrait: true} })

const stringParam = picture.toString() as string
console.log(stringParam);

