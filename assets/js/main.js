const INCREMENT = "INCREMENT";
const SOMA = "SOMA";

const increment = () => {
  return { type: INCREMENT };
}

const soma = (payload) => {
  return { type: SOMA, payload };
}

let initialState = 0;
const reducer = (state = initialState, action) => {
  if(action.type === INCREMENT) {
    return state + 1;
  }
  if(action.type === SOMA) {
    return state + action.payload;
  }
  return state;
};

const store = Redux.createStore(reducer);
const contador = document.querySelector("#contador");

const render = () => {
  const state = store.getState();
  contador.innerText = state; 
}

const unsubscribe = store.subscribe(render);
//unsubscribe();

const button = document.querySelector("#button");
button.addEventListener("click", () => store.dispatch(increment()));