function createInstructor (firstName, lastName){
    return{ firstName, lastName}
}

let favoriteNumber= 42

let instructor = {
    firstName : "Colt",
    [favoriteNumber] : "That's mu favorite!"
}

let instructor = {
    firstName : "Colt",
    sayHi(){return "Hi!"},
    sayBye(){return this.firstName + " says bye!"}
}

function createAnimals (species, verb, noise){
    return {
        species, 
        verb, 
        noise
    }
}