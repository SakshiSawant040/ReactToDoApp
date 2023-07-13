import AddTask from "./Components/AddTask";
import "./App.css"
import logo from "./images/icon.png"
// import AddTask from "./Components/AddTask";

function App() {
  return (
    <div className="App">

      <div className="todoApp">
        <h1 className="heading">To-Do List <img src={logo} alt="logo" /></h1>
         <AddTask />
      </div>
      
    </div>
  );
}

export default App;
