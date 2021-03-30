const person ={
    name: 'Mr.Bibhudatta Singh',
    age: 30,
    greet(){
        console.log('Hello User '+this.name);
    }
}

const {name,age} = person;
console.log(name,age);



const hobbies = ['Playing','Dancing','Programming'];
const [hobbey1,hobbey2] = hobbies;
console.log(hobbey1,hobbey2);