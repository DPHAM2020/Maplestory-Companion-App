import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HexaTracker from "./pages/HexaTracker.tsx";
import PitchDiary from "./pages/PitchDiary.tsx";

const router = createBrowserRouter([{ path: "/", element: <PitchDiary /> }]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
