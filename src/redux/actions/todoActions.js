import ActionTypes from "../actionTypes";
// Aksiyonlar kod içerisinde sürekli tekrar ettiği için aksiyonları ayrı bir actions dosyasında oluşturacağız.

// Objenin payload değeri dinamik olacağı için bir obje tanımlamak yerine bir obje oluşturan fonksiyon tanımladık.
// payload'ı parametre olarak alır, oluşturulan aksiyona ekler

export const addTodo = (payload) => ({
  type: ActionTypes.ADD_TODO,
  payload,
});

export const updateTodo = (payload) => ({
  type: ActionTypes.UPDATE_TODO,
  payload,
});

export const removeTodo = (payload) => ({
  type: ActionTypes.REMOVE_TODO,
  payload,
});

export const setTodos = (payload) => ({
  type: ActionTypes.SET_TODOS,
  payload,
});
