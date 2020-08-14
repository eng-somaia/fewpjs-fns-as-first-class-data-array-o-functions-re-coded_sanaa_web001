function wakeDog(dogName, dogBreed){
  let a = console.log(`Wake ${dogName} the ${dogBreed}`);
  return a;
}
function leashDog(dogName, dogBreed){
  let b = console.log(`Leash ${dogName} the ${dogBreed}`);
  return b;
}
function walkToPark(dogName, dogBreed){
  let c = console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return c;
}
function throwFrisbee(dogName, dogBreed){
  let d = console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return d;
}
function walkHome(dogName, dogBreed){
  let e = console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return e;
}
function unleashDog(dogName, dogBreed){
  let f = console.log(`Unleash ${dogName} the ${dogBreed}`);
  return f;
}
let routine = [walkDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
function exerciseDog(dogName, dogBreed){
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