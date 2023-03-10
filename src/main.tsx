import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import ProductProvider from "./context/ProductContext";
import "./index.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/store" element={<Store />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        primaryColor: "blue",
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </MantineProvider>
  </React.StrictMode>
);
