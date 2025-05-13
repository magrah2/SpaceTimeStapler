import React from 'react'
import ReactDOM from 'react-dom/client'
import {AdminPage, ButtonsPageA, ButtonsPageB, ChatPage} from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminPage/>,
  },
  {
    path: "/shipA",
    element: <ButtonsPageA/>,
  },
  {
    path: "/shipB",
    element: <ButtonsPageB/>,
  },
  {
    path: "/chat",
    element: <ChatPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
