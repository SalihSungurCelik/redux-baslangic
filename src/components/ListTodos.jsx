import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodos = () => {
  // useSelector store'daki bütün reducer'lara abone olmaya yani
  // reducer'larda tutulan verilere erişmeye yarar
  //store çok büyük olabileceğinden sadece genel ihtiyacımız olan
  // reducer'lara abone oluruz.
  // bunun için => store.reducerIsmi yazmamız gerekiyor
  const store = useSelector((store) => store.todoReducer);
  // console.log(abonelik);
  return (
    <div>
      {store.todos.map((todo) => (
        <TodoCard todo={todo} key={todo.i} />
      ))}
    </div>
  );
};

export default ListTodos;
