import React, { useState } from "react";

import TodoInput from "./Components/TodoInput";
import "./index.css"

const App = () => {
  const [todo, setTodo] = useState([{
    id:1,
    title:" Office Task 1",
    description:"This is the description of my first task",
    Status:"Not Completed"
    
  },
  {
    id:2,
    title:"Office Task 2",
    description:"This is the description of my second task",
    Status:"Completed"
    
  },
  {
    id:3,
    title:"Office Task 3",
    description:"This is the description of my third task",
    Status:"Not Completed"
    
  },
  ]);
  

  return (
    <>
   <TodoInput  setTodo={setTodo} todo={todo}/>
   </>
  );
};

export default App;
