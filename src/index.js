import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store";
const { store, persistor } = configureStore();

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
