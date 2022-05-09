import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo } from "../Redux/Action";
import axios from "axios";

export const Todo = () => {
  const [todo, setTodo] = useState("");
  const data = useSelector((store) => store.todo);

 
  
  const handleTodo = () => {
    const info = {
      title: todolist,
      status: false
    }
    
       axios.post("http://localhost:8080/todo", info).then(()=>  getData())
    // console.log(data);
  
  };

  const dispatch = useDispatch();
  const getData = () => {
    axios.get("http://localhost:8080/todo").then((res) => { 
      
      dispatch(
  addTodo(res.data)
  );
    })
  }


  useEffect(() => {
    getData()
  }, [])
  


  const toggleFn = (e) => {
    
    if (e.status === false) {
      e.status = true

      console.log(e)
  }
  }
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={handleTodo}>Add Todo</button>

      {data.map((e) => {
            return <>
                <Link  to={`/todo/${e.id}`}>
                <h3 >{e.title} {e.status.toString()} </h3>
                
                </Link>
              <button onClick={() => { toggleFn(e) }}>Toggle</button>
             
            
            </>
        })}
    </>
  );
};