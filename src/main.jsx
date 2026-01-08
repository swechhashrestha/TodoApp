import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { TodoProvider } from "./contextApi/TodoProvider.jsx";
import { Bounce, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <TodoProvider>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </TodoProvider>
    </BrowserRouter>
  </>
);
