/**
 * !Reducer
 * store'un nasıl değişeceğine karar verir.
 * normal bir fonksiyondur
 * 2 parametre alır.
 * > state: store'da tutulan verilerin son durumu
 * > action: verilerin nasıl değişeceğini belirten obje.
 * 
 ! önemli: reducer fonksiyonundan return deilen veri store'un son hali olur.
 */

// state'de tutacağımız verilerin ilk değeri

const initialState = {
  todos: [],
  category: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return "ADD BOŞ";
    case "REMOVE_TODO":
      return "REMOVE BOŞ";
    default:
      return state;
  }
};

// reducer'ı store'a tanıtmak içib exoprt et
export default todoReducer;
