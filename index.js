


/*

I first made the project the way we were supposed to. I tried using buttons after and came up with this!

window.onload = () => {
    document.getElementById("excuse").innerHTML = excuseGenerator()
}



 let excuseGenerator = () => {

    let who = ['The dog','My grandma','His turtle','My bird',];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];


    let randomWho = Math.floor(Math.random()* who.length);
    let randomAction = Math.floor(Math.random()* action.length);
    let randomWhat = Math.floor(Math.random()* what.length);
    let randomWhen = Math.floor(Math.random()* when.length);
    return who[randomWho] + ' ' + action[randomAction] + ' ' + what[randomWhat] + ' ' + when[randomWhen] + ' '
}
*/



 const randomWhoFunc = () => {
    
    let who = ['The dog','My grandma','His turtle','My bird',];
    let randomWho = Math.floor(Math.random()* who.length);

    return who[randomWho]

}

const whoResult = () => {
    document.getElementById("who").innerHTML = randomWhoFunc();
}



const randomActionFunc = () => {
    
    let action = ['Ate','Peed','Crushed','Broke'];
    let randomAction = Math.floor(Math.random()* action.length);
    return action[randomAction]

}



const actionResult = () => {
    document.getElementById("action").innerHTML = randomActionFunc();
}


const randomWhatFunc = () => {
    let what = ['My Homework', 'The Keys', 'The Car'];
    let randomWhat = Math.floor(Math.random()* what.length);
    return what[randomWhat]
}

const whatResult = () => {
document.getElementById("what").innerHTML = randomWhatFunc()
}



const randomWhenFunc = () => {
    let when = ['Before The Class','Right On Time','When I Finished','During My Lunch','While I Was Praying'];
    let randomWhen = Math.floor(Math.random()* when.length);
    return when[randomWhen]
}

const whenResult = () => {
document.getElementById("when").innerHTML = randomWhenFunc()
}



