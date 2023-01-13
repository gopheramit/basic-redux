import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import { actions } from './store/index';
function App() {
  const counter =useSelector((state)=>state.counter);
  const dispatch=useDispatch()
 
  // const increment=()=>{
  //   dispatch({type:"INC"})
  // }

  // const decrement=()=>{
  //   dispatch({type:"DEC"})
  // }

  // const addBy=()=>{
  //   dispatch({type:"ADD",payload:10})

  const increment=()=>{
    dispatch(actions.increment())
  }

  const decrement=()=>{
    dispatch(actions.decrement())
  }

  const addBy=()=>{
    dispatch(actions.addBy(10))
  }
  return (
    <div>
     <h1>counter App</h1>
     <h2>{counter}</h2>
     <button onClick={increment}>increment</button>
     <button onClick={decrement}>decrement</button>
     <button onClick={addBy}>Add by 10</button>
    </div>
  );
}

export default App;
