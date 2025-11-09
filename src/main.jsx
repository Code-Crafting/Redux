import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
// import { store } from "./store/todoStore.js"; //todo store
import { store } from "./store/habitStore.js"; //habit store

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
