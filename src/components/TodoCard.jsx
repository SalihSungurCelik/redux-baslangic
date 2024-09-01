import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { useState } from "react";
import ActionTypes from "../redux/actionTypes";
import { removeTodo, updateTodo } from "../redux/actions/todoActions";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  //store'dan todo'yu kaldır
  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };
  //storedaki todonun isDoene değerini tersine çevir.
  const handleStatus = () => {
    //isDone değerini tersine çevir.
    const updated = { ...todo, isDone: !todo.isDone };

    // store'daki eski todo'yu güncel todo ile değiştir.
    dispatch(updateTodo(updated));
  };

  return (
    <div className="border shadow shadow-lg p-4 my-5">
      <h5> {todo.text} </h5>
      <h6> {todo.isDone ? "Tamamlandı" : "Devam Ediyor"} </h6>
      <p> {todo.createdAt} </p>
      <button onClick={() => setIsOpen(true)} className="btn btn-primary">
        Düzenle
      </button>
      <button onClick={() => handleStatus()} className="btn btn-success mx-3">
        {todo.isDone ? "Geri Al" : "Tamamla"}
      </button>
      <button onClick={() => handleDelete()} className="btn btn-danger">
        Sil
      </button>
      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default TodoCard;
