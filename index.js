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
console.log(wakeDog);
console.log(leashDog);
console.log(walkToPark);
console.log(throwFrisbee);
console.log(walkHome);
console.log(unleashDog);


 var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
 
function exerciseDog(dogName, dogBreed){
 // for(let i=0; i<routine.length; i++){
   // routine[i](dogName, dogBreed);
  let z = routine.forEach(routine[i](dogName, dogBreed));
    
   let res=[];
   res.push(z);
  
  return res;
}