import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/store";

// NOTE contexts
import { PaymentContextProvider } from './contexts/PaymentContext'

ReactDOM.render(

  <PaymentContextProvider>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </PaymentContextProvider>,
  document.getElementById("root")
);
