
import './App.css'
import Counter from './counter';
import Team from './team';
import Users from './users';

function App() {
  function handleClick(){
    alert('button Clicked');
  }
  const handleClick2 = () => {
    alert('button Clicked 2');
  }
  const addToFive = (num)=>{
    alert(num + 5);
  }



  return (
    <>
      
      <h3>React Core Concepts 2</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <button onclick="handleClick()">Clic me</button> */}
      <button onClick={handleClick}>Clic me</button>
      <button onClick={handleClick2}>Clic me2</button>
      <button onClick={()=>{alert('button Clicked 3')}}>Clic me3</button>
      {/* <button onClick={addToFive(3)}>Clic me4</button> */}
      <button onClick={()=> addToFive(3)}>Clic me4</button>
    </>
  )
}

export default App


