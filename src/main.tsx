import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.scss'
import "./assets/fonts/AvertaDemoPECuttedDemo-Regular.otf";
import "./assets/fonts/AvertaDemoPE-ExtraBold.otf"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './views/notFound/NotFound.tsx';
import SearchVillas from './views/search-villas/SearchVillas.tsx';
import Home from './views/home/Home.tsx';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/search-villas/:area",
    element: <SearchVillas />,
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)