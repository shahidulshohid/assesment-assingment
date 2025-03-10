// example one

import { useEffect, useRef, useState } from "react";

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

// example five 
console.log(foo)
const foo = "hello"
console.log(foo)

// example six 
app.get('/data', async(req, res) => {
  const result = fetch('https://api.example.com/data')
    res.send((await result).json())
})

// example seven 
app.use((req, res, nex) => {
  console.log("Request, Received")
})

// example eight 
useEffect(() => {
  console.log("Effect runs")
}, [user])

// example nine 
function sum(...numbers, extra){
  return numbers.reduce((acc, num) => acc + sum, 0) + extra
}

// example ten 
const [user, setUser] = useState({name:'Alice', age:25})
function updateAge(){
  setUser({age:30})
}

// example eleven 
function MyComponent(){
  const inputRef = useRef()
  useEffect(()=> {
    inputRef.current.focus()
  }, [])
  return <input/>
}

// example twelve 
<div onclick="console.log('Div Clicked')">
  <button onclick="console.log('Button Clicked')">Click Me</button>
</div>

//example thirteen 
console.log(1 + '2' + 3)

//example fourteen 
function fetchData(){
  let data
  fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(json => data = json)
  return data
}
//example fifteen 
function multiply(x, y=2){
  return x * y
}
console.log(multiply(5))
console.log(multiply(5, undefined))
console.log(multiply(5, null))

// example sixteen 
const a = [1, 2, 3]
const b = a 
b.push(4)
console.log(a)

//example seventeen 
let x = 1 
let y = 2 
x = x + y++
console.log(x, y)

// example eighteen 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// example nineteen 
let x = [1, 2, 3]
let y = [...x]
y[0] = 4 
console.log(x[0], y[0])

// example twenty 
const numbers = [1, 2, 3]
numbers[10] = 10 
console.log(numbers.length)

// example twenty one 
let numbers = [1, 2, 3]
numbers = numbers.map(num => num * 2)
console.log(numbers)

// example twenty two 
const x = 10 
function foo(){
  console.log(x)
  const x = 20 
}
foo()

// example twenty three 
db.collection.find({name: 'Alice'}).limit('5')

// example twenty four 
h1{
  font-size:24px;
  font-size:30px;
}