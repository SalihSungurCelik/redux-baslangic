import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../redux/actions/todoActions";

const AddForm = () => {
  // dispatch kurulum
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // todo objesi oluştur
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      isDone: false,
      createdAt: new Date().toLocaleDateString(),
    };

    //Oluşturulan todo'yu store'a ekle
    dispatch(addTodo(newTodo));
    e.target[0].value = "";
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-1 my-5">
      <input
        placeholder="örn: typscript projesi yap"
        className="form-control"
        type="text"
      />
      <button className="btn btn-warning">Ekle</button>
    </form>
  );
};

export default AddForm;
