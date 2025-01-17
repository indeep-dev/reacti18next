// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./utils/i18n.ts";
import { NextUIProvider } from "@nextui-org/react";

createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <App />
  </NextUIProvider>
);
