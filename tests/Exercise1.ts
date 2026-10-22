
let testEnv = "staging"; // use let instead of var, to avoid var
let retries = 3;
const maxRetries = 5;
let attemptMessage = ""; //use let instead of var and define outside of if condition, to avoid access issue

if (retries < maxRetries) {
  attemptMessage = `Retry ${retries} of ${maxRetries}`; // use let instead of var, to avoid var  usage
}
console.log(attemptMessage);

// we can not change value of immutable variables
//maxRetries = 10; 

let userCount: string = "12"; //is decalred as number and try to assign the string. Change to string from number

//_________________________________

//Rewrite whole with type anotations

//_________________________________

let testEnvironment: string = "staging"; // use let instead of var, to avoid var
let retriesSecond: number = 3;
const maxRetriesSecond: number = 5;
let attemptMessage2: string = ""; // define outside of let, to avoid access issue

if (retriesSecond < maxRetriesSecond) {
  attemptMessage2 = `Retry ${retriesSecond} of ${maxRetriesSecond}`; // use let instead of var, to avoid var
}
console.log(attemptMessage2);


let userCountSecond: string = "12"; 
