import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
          <Toaster />
        </HelmetProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>
);
