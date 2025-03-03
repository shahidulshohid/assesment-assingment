// example one

import { useEffect, useState } from "react";

console.log("Start");
setTimeout(() => {
  console.log("Timeout");
}, 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// example two
const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  return <h1>{count}</h1>;
};
export default Counter;

// example three
function User(name) {
  this.name = name;
}
User.prototype.sayHello = () => {
  console.log(`Hello ${this.name}`);
};
const user1 = new User("Alice");
user1.sayHello();

// example four 
function counter(){
  let count = 0
return ()=> console.log(count++)
}
const count1 = counter()
count1()
count1()
const count2 = counter()
count2()
count2()

// five 
