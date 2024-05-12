import React, { useState } from "react";
import Table from "./Table";

const TodoInput = ({ setTodo, todo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [edit, setEdit] = useState(0);
  const [status, setStatus] = useState("Not Completed");
  const [filter, setFilter] = useState("All");

  //adding the content in the object format
  const addTodo = (newTitle, newDescription) => {
    let data = {
      id: todo.length + 1,
      title: newTitle,
      description: newDescription,
      Status: status,
    };
    setTodo([...todo, data]);
    // console.log("added");
  };
  //console.log(todo);

  //to edit the content
  const editTodo = (id) => {
    const editTitle = todo.find((i) => i.id === id);
    const editDescription = todo.find((i) => i.id === id);
    setTitle(editTitle.title);
    setDescription(editDescription.description);
    setEdit(id);
  };

  // to add the content into the card
  const handlesubmit = (e) => {
    //to update the content in the same card
    if (edit) {
      const editTitle = todo.find((i) => i.id === edit);
      const editDescription = todo.find((i) => i.id === edit);
      const updatedTodos = todo.map((t) =>
        t.id === editTitle.id || t.id === editDescription.id
          ? (t = { id: t.id, title, description })
          : { id: t.id, title: t.title, description: t.description }
      );
      setTodo(updatedTodos);
      setEdit(0);
      setTitle("");
      setDescription("");
      return;
    }
    e.preventDefault();
    addTodo(title, description, status);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <div className="container">
        <h2 className="text-center" style={{ color: "rgb(19,173,137)" }}>
          My Todo
        </h2>
        {/* input */}
        <div className="input row mt-5">
          <div className="col-md-4 px-5 ">
            <input
              id="title"
              type="text"
              value={title}
              placeholder="Todo Name"
              className="px-5 m-1 py-1 "
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4 px-5 ">
            <input
              id="description"
              type="text"
              value={description}
              placeholder="Todo Description"
              className="px-5 m-1 py-1"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4 px-5 ">
            {" "}
            <button
              type="submit"
              onClick={handlesubmit}
              className="px-5 m-1 py-1"
            >
              {edit ? "Update Todo" : "Add Todo"}
            </button>
          </div>
        </div>
        {/* my-todos & status filter */}
        <div className="row todos">
          <h2 className="title col mt-5">My Todos</h2>

          <div className="filter col mt-5">
            <h4>Status filter&nbsp;:&nbsp;</h4>
            <select
              value={filter}
              style={{
                backgroundColor:
                  filter === "All" || filter === "Not Completed"
                    ? "rgb(250,128,129)"
                    : "rgb(22,173,142)",
                margin: "7px",
                border: "none",
              }}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Not Completed">Not Completed</option>
            </select>
          </div>
        </div>
      </div>
      {/* card */}
      <div className="container table">
        <div className="row row-cols-1 row-cols-md-3 mt-4">
          {todo.map((element, index) => {
            return (
              (filter === "All" || filter === element.Status) && (
                <Table
                  element={element}
                  index={index}
                  status={status}
                  setStatus={setStatus}
                  editTodo={editTodo}
                  setTodo={setTodo}
                  todo={todo}
                  key={element.id}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
