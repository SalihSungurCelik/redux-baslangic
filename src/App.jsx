import { useEffect } from "react";
import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3040/";

const App = () => {
  // verileri al ve store'a aktar
  useEffect(() => {
    axios.get("/todos").then((res) => "");
  }, []);
  return (
    <div className="vh-100 bg-dark text-white">
      <div className="container p-5">
        <h2 className="text-center">
          REDUX <span className="text-warning">CRUD</span>
        </h2>
        <AddForm />
        <ListTodos />
      </div>
    </div>
  );
};

export default App;
