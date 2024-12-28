import { useState } from "react";
import "./App.css";

function App() {
  const [task, settask] = useState([]);
  const [newtask, setnewtask] = useState([]);

  const AddTask = () => {
    const tasks = {
      id: task.length === 0 ? 1 : task[task.length - 1].id + 1,
      name: newtask,
      completed:false,
    };
    const List = [...task, tasks]; // adds newtask at the end of task

    settask(List); // also works... settask([...task, newtask]);
  };

  const handleTaskChange = (e) => {
    setnewtask(e.target.value);
  };

  const deleteTask = (id) => {
    settask(task.filter((task) => task.id !== id));
  };

  const completed=(id)=>{

    settask(
      task.map((tasks)=>{
        if(tasks.id===id){
          return {...tasks,completed:!tasks.completed}
        }else{
          return tasks;
        }
      })
    )

  }

  const users = [
    { name: "Raj", age: 30 },
    { name: "Rohit", age: 35 },
    { name: "Jay", age: 40 },
  ];

  return (
    <>
      <div className="App">
        {users.map((user, key) => {
          if (user.name === "Rohit") {
            return <User key={key} name={user.name} age={user.age} />;
          }
          return null;
        })}

        <div>
          <input type="text" onChange={handleTaskChange} />
          <button onClick={AddTask}>Add Task</button>
        </div>



        <div className="tasks">
  {task.map((tasks) => (
    <div
      key={tasks.id}
      style={{ backgroundColor: tasks.completed ? "green" : "white" }}
    >
      <div className="task-content">
        <p>{tasks.name}</p>
      </div>
      <div className="task-buttons">
        <button onClick={() => completed(tasks.id)}>
          {tasks.completed ? "Undo" : "Complete"}
        </button>
        <button
          className="delete"
          onClick={() => {
            deleteTask(tasks.id);
          }}
        >
          Delete Task
        </button>
      </div>
    </div>
  ))}
</div>

      </div>
    </>
  );
}

const User = (props) => {
  return (
    <div className="user">
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </div>
  );
};

export default App;
