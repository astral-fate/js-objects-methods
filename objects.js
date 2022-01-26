'strict mode'

//we created an object here, with number of proprites 

const qustion1 = {
    dinner: 'fatty',
    lunch: 'light',
    breakfast: 'late',
};

const jonas = {

    friends: ['micheal', 'sarah', 'suzan'],
    job: 'teacher',
    location: 'eurrope',
}



//we used js Dom event; prompt, so a pop up message will show itself on the screen to the user, asking them to enter a meal :>

const pops = prompt('enter a meal of the day: dinner, lunch or breakfast')


//if statment, using the name of the object, acomined by [] not . the value of the prompt, that the user will pass to the code


if (qustion1[pops]) {
console.log(qustion1[pops]);
}
//is the user's enters is not valid 
else {
    console.log('enter valid meal');
}

console.log(`jonas has three friends; ${jonas.friends[0]}`);

