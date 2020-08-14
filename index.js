function wakeDog(dogName, dogBreed){
  let a = `Wake ${dogName} the ${dogBreed}`;
  return a;
}
function leashDog(dogName, dogBreed){
  let b = `Leash ${dogName} the ${dogBreed}`;
  return b;
}
function walkToPark(dogName, dogBreed){
  let c = `Walk to the park with ${dogName} the ${dogBreed}`;
  return c;
}
function throwFrisbee(dogName, dogBreed){
  let d = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  return d;
}
function walkHome(dogName, dogBreed){
  let e = `Walk home with ${dogName} the ${dogBreed}`;
  return e;
}
function unleashDog(dogName, dogBreed){
  let f = `Unleash ${dogName} the ${dogBreed}`;
  return f;
}

function exerciseDog(dogName, dogBreed){
  let routine = [walkDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
  for(let i=0; i<routine.length; i++){
    routine[i];
    
    x=dogName;
    y=dogName;
   let z = console.log(routine[i]);
   let res=[];
   res.push(z);
  }
  return res;
}