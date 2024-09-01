import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/actions/todoActions";

const Modal = ({ todo, close }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // inputtaki ismi alma
    const newText = e.target[1].value;
    // eski todo'nun bütün verilerini alıp inputtan aldığımız veri ile güncelleme
    const updated = { ...todo, text: newText };
    // store'u güncelle
    dispatch(updateTodo(updated));
    //Modal kapat
    close();
  };
  return (
    <div className="modal d-block text-dark bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todo'yu Düzenle</h5>
            <button
              onClick={() => close()}
              type="button"
              className="btn-close"
            ></button>
          </div>
          <div className="modal-body">
            <label> Yeni Başlık </label>
            <input
              type="text"
              defaultValue={todo.text}
              className="form-control shadow mt-2"
            />
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">
              Kaydet
            </button>
            <button
              onClick={() => close()}
              type="button"
              className="btn btn-secondary"
            >
              Vazgeç
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
