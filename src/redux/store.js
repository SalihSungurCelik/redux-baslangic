// Store oluşturma
/**
 * 1. redux kütüphanesinden "createStore" methodu import edilir
 * 2. store içerisinde tutulan veriler kategorize edilir ve reducer'lar oluşturulur.
 * 3. oluşturulan reducer'lar combineReducers methodu ile birleştirilir.
 * 4. store'a oluşturulan yeni reducer tanıtılır
 * 5. oluşturulan store projeye tanıtılır.
 */

import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer"

//birden fazla reducer varsa birleştirilir.
const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

// store oluştur ve reducer'ları tanıt
const store = createStore(rootReducer);

export default store;
