const redux = require("redux");
const createTheFuckingStore = redux.createStore;

// Action types, reason for this is to avoid spelling actions

const BUY_CAKE = "BUY_CAKE";

// Actions

const buyACake = {
  type: BUY_CAKE,
  info: "First redux action",
};

// Action creaters

function buyCake() {
  return buyACake;
}

// The initial state that will be the 1st arg of the reducer
const storeIniState = {
  numOfCakes: 10,
};

// Reducers definition: input is previous state and an action, returns the new state based on the action
// Reducers should not mutate state, they should create a new state

const buyCakeReducer = (iniState = storeIniState, actionBuyCake) => {
  switch (actionBuyCake.type) {
    case BUY_CAKE:
      return {
        ...iniState, // making a copy of all data inside the iniState -> safer
        numOfCakes: iniState.numOfCakes - 1,
      };
    default:
      return iniState;
  }
};

// Creating the store

const store = createTheFuckingStore(buyCakeReducer);

// store app 2 - Get the state app
console.log("Initial state:", store.getState());

// store app 4 - Add a listener and store app 5 - Unsubscribe
const unsubscribe = store.subscribe(() =>
  console.log("Update state", store.getState())
);

// store app 3 - Update the app state with action creator
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
