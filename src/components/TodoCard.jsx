import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { useState } from "react";
import ActionTypes from "../redux/actionTypes";
import { removeTodo, updateTodo } from "../redux/actions/todoActions";
import axios from "axios";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  //store'dan todo'yu kaldır
  const handleDelete = () => {
    // API'a silme isteği at
    axios
      .delete(`/todos/${todo.id}`)
      .then(() => dispatch(removeTodo(todo.id)))
      .catch(() => alert("Silme İşleminde bir sorun oluştu!"));

    // store'dan sil > arayüzü günceller
  };
  //storedaki todonun isDoene değerini tersine çevir.
  const handleStatus = () => {
    //isDone değerini tersine çevir.
    const updated = { ...todo, isDone: !todo.isDone };

    axios
      .put(`/todos/${todo.id}`, updated)
      .then(() => dispatch(updateTodo(updated)));

    // store'daki eski todo'yu güncel todo ile değiştir.
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
