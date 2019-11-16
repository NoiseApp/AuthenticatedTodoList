import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";

//thunk por si hubiera que hacer alguna llamada asincrona

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
// In order not to allow it in production by default,
// the enhancer will have effect only when process.env.NODE_ENV === 'development'

export default createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(ReduxThunk))
);
