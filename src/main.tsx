import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router.tsx";
import Modal from "react-modal";
import { Toaster } from 'sonner'
Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="font-poppins">
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </div>
    </Provider>
  </React.StrictMode>
);

