import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function CounterComponent() {
    const count=useSelector((state)=>state.count)
    const dispatch=useDispatch();
    const increment = () => {
        dispatch({ type: "INCREMENT" });
      };
      const decrement=()=>{
        dispatch({type:"DECREMENT"});
      };
   
  return (
    <div style={style.container}>
        <h2 style={style.count}>Count:{count}</h2>
      
      

<button onClick={increment}>+</button>
<button onClick={decrement}>-</button>


    </div>
  )
 
}
const style= {
    container: { textAlign: "center", padding: "20px" },
    count: { fontSize: "2rem", marginBottom: "10px" },
    buttons: { display: "flex", justifyContent: "center", gap: "10px" },
    button: { fontSize: "1.5rem", padding: "10px 20px", cursor: "pointer" },
  };
export default CounterComponent