// state'de tutacağımız verilerin ilk değeri

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return "ADD BOŞ";
    case "REMOVE_USER":
      return "REMOVE BOŞ";
    default:
      return state;
  }
};

// reducer'ı store'a tanıtmak için export et
export default userReducer;
