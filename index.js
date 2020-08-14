function wakeDog(dogName, dogBreed){
  let a = console.log(`Wake ${dogName} the ${dogBreed}`);
  return a;
}
function leashDog(){
  let b = console.log(`Leash ${dogName} the ${dogBreed}`);
  return b;
}
function walkToPark(){
  let c = console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return c;
}
function throwFrisbee(){
  let d = console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return d;
}
function walkHomeDog(){
  let e = console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return e;
}
function unleashDog(){
  let f = console.log(`Unleash ${dogName} the ${dogBreed}`);
  return f;
}
let routine = [walkDog(x,y), leashDog(x,y), walkDog(x,y), throwDog(x,y), walkHomeDog(x,y), unleashDog(x,y)];
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