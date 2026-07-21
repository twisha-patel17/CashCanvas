import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

import { ThemeProvider } from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(

    <ThemeProvider>

        <BrowserRouter>

            <App />

            <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
          }}
        />

        </BrowserRouter>

    </ThemeProvider>

);