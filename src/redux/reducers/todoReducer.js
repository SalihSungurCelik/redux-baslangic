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

import { ActionTypes } from "../actionTypes";

// state'de tutacağımız verilerin ilk değeri

const initialState = {
  todos: [],
  category: [],
};

const { ADD_TODO, REMOVE_TODO, UPDATE_TODO } = ActionTypes;

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const tempTodos = state.todos.concat(action.payload);
      return { ...state, todos: tempTodos };
    case REMOVE_TODO:
      //payload ile id'si gelen todoyu diziden çıkarma
      const filtered = state.todos.filter((todo) => todo.id !== action.payload);
      // store'daki verilerin yeni değerini belirleme
      return { ...state, todos: filtered };
    case UPDATE_TODO:
      const newTodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { ...state, todos: newTodos };
    default:
      return state;
  }
};

// reducer'ı store'a tanıtmak içib exoprt et
export default todoReducer;

// DONE_TODO İÇİN
// //1) splice yöntemi
// //  a) state'deki todolarn kopyasını oluşturun
// const copyTodos = [...state.todos];

// // b) güncellenecek elemanın dizide sırasını bul
// const index = copyTodos.findIndex(
//   (todo) => todo.id === action.payload.id
// );
// // c) splice ile diziyi güncelle
// copyTodos.splice(index, 1, action.payload);
