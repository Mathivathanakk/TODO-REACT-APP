import React, { useState } from "react";

const Table = ({
  element,
  index,
  status,
  setStatus,
  editTodo,
  setTodo,
  todo,
}) => {
  const handleFilter = (index, e) => {
    const newdata = [...todo];
    newdata[index].Status = e.target.value;
    setTodo(newdata);
  };
  {
    /* to delete the card*/
  }
  const deleteTodo = (id) => {
    setTodo(todo.filter((ele) => ele.id !== id));
  };
  return (
    <div className="col mt-2 p-3">
      <div className="card" key={element.id}>
        <div className="card-body ">
          <div className="card-title">Name : {element.title}</div>
          <div className="card-subTitle">
            Description : {element.description}
          </div>
          <div>
            Status :&nbsp;
            <select
              value={element.Status}
              style={{
                backgroundColor:
                  element.Status === "Completed"
                    ? "rgb(22,173,142)"
                    : "rgb(250,128,129)",
                border: "none",
                margin: "5px",
                color: "white",
                padding: "5px",
              }}
              onChange={() => handleFilter(index, event)}
            >
              <option value="Completed">Completed</option>
              <option value="Not Completed">Not Completed</option>
            </select>
          </div>
          <br />
          <br />
          <div className="button">
            <button
              className="btn px-4 py-1 m-1"
              style={{ backgroundColor: "rgb(22,173,142)", color: "white" }}
              onClick={() => editTodo(element.id)}
            >
              Edit
            </button>
            <button
              className="btn px-4 py-1 m-1"
              style={{ backgroundColor: "rgb(208,94,31)", color: "white" }}
              onClick={() => deleteTodo(element.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
