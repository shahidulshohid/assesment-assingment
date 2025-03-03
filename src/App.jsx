
import "./App.css";

function App() {
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


  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}

export default App;
