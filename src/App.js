import "./App.css";
// import Axios from "axios";
import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { Form } from "./pages/Form";
// import Task from "./components/Task";
// import { Text } from "./components/Text";
// import User from "./components/User";

// function App() {
//   const users = [
//     { name: "Ana", age: 22 },
//     { name: "Dan", age: 23 },
//     { name: "Red", age: 24 },
//   ];
//   return (
//     <div className="App">
//       {users.map((user, key) => {
//         return <User name={user.name} age={user.age} />;
//       })}
//     </div>
//   );
// }

// function App() {
//   const [todoList, setTodoList] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const handleChange = (e) => {
//     setNewTask(e.target.value);
//   };

//   const addTask = () => {
//     const task = {
//       id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
//       taskName: newTask,
//       completed: false,
//     };
//     setTodoList([...todoList, task]);
//   };

//   const deleteTask = (id) => {
//     setTodoList(todoList.filter((task) => task.id !== id));
//   };

//   const completeTask = (id) => {
//     setTodoList(
//       todoList.map((task) => {
//         if (task.id === id) {
//           return { ...task, completed: true };
//         } else {
//           return task;
//         }
//       })
//     );
//   };

//   return (
//     <div className="App">
//       <div className="addTask">
//         <input onChange={handleChange} />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <div className="list">
//         {todoList.map((task) => {
//           return (
//             <Task
//               taskName={task.taskName}
//               id={task.id}
//               completed={task.completed}
//               deleteTask={deleteTask}
//               completeTask={completeTask}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [etrue, setEtrue] = useState(false);
//   const change = () => {
//     setEtrue((prev) => !prev);
//   };
//   return (
//     <div>
//       <button onClick={change}>change</button>
//       {etrue && <Text />}
//     </div>
//   );
// }

// function App() {
//   // fetch("https://catfact.ninja/fact")
//   //   .then((res) => res.json())
//   //   .then((data) => {
//   //     console.log(data);
//   //   });
//   const [catFact, setCatFact] = useState("");

//   const fetchCatFact = () => {
//     Axios.get("https://catfact.ninja/fact").then((res) => {
//       setCatFact(res.data.fact);
//     });
//   };

//   useEffect(() => {
//     fetchCatFact();
//   }, []);

//   return (
//     <div className="App">
//       <button onClick={fetchCatFact}>Generate Cat Facts</button>
//       <p>{catFact}</p>
//     </div>
//   );
// }
// function App() {
//   const [name, setName] = useState("");
//   const [predictedAge, setPredictedAge] = useState(null);
//   const fetchData = () => {
//     Axios.get(`https://api.agify.io/?name=${name}`).then((res) =>
//       setPredictedAge(res.data)
//     );
//   };

//   return (
//     <div className="App">
//       <input
//         placeholder="Ex. Pedro..."
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button onClick={fetchData}>Predict Age</button>
//       <h1>Name: {predictedAge?.name}</h1>
//       <h1>Count: {predictedAge?.count}</h1>
//       <h1>Predicted Age: {predictedAge?.age}</h1>
//     </div>
//   );
// }

export const AppContext = createContext();

function App() {
  // const client = new QueryClient({
  //   defaultOptions: {
  //     // CRUD - create read update delete
  //     // query = get = make request for data R
  //     // mutation = api request where you change data = update, delete, add C*UD
  //     queries: {
  //       refetchOnWindowFocus: false,
  //     },
  //   },
  // });
  const [username, setUsername] = useState("Rush");

  // return (
  //   <div className="App">
  //     <AppContext.Provider value={{ username, setUsername }}>
  //       <QueryClientProvider client={client}>
  //         <Router>
  //           <Navbar />
  //           <Routes>
  //             <Route path="/" element={<Home />} />
  //             <Route path="/about" element={<About />} />
  //             <Route path="/contact" element={<Contact />} />
  //             <Route path="*" element={<h1>You are not in a page</h1>} />
  //           </Routes>
  //         </Router>
  //       </QueryClientProvider>
  //     </AppContext.Provider>
  //   </div>
  // );

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/form" element={<Form />} />
            <Route path="*" element={<h1>You are not in a page</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
