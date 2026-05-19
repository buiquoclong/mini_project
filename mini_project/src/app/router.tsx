import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AppLayout from "../layouts/AppLayout";

import Home from "../pages/Home";
import TodoPage from "../pages/TodoPage";

export const router = createBrowserRouter([
  // 🟢 HOME (KHÔNG sidebar)
  {
    element: <RootLayout />,
    children: [{ path: "/", element: <Home /> }],
  },

  // 🔵 APP AREA (CÓ sidebar)
  {
    element: <AppLayout />,
    children: [{ path: "todo", element: <TodoPage /> }],
  },
]);
