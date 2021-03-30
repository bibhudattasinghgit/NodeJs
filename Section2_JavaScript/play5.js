const hobbies = ['playing','dancing','cooking'];
hobbies.push('programming');
for(let hobby of hobbies){
    console.log(hobby);
}

console.log(hobbies.map(hobbey=>'My Hobbey : '+hobbey));

const coppiedArray = [...hobbies];// use as spresd operator
console.log('coppiedArray : '+coppiedArray);

//used as rest operator
const varArg = (...args) =>{
    return args;
}
console.log('varArg : '+varArg(1,2,3,4,5,6,7,8,9,0));
