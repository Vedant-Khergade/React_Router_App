import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/Home/About/About';
import Contact from './Components/Contact/Contact';
import GitHub, { gitInfo } from './Components/GitHub/GitHub';
import Users from './Components/Users/Users';
import { RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path="/" element={<App></App>}>

      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='contact' element={<Contact />} />

      <Route

        loader={gitInfo}//This is only for optimization purpose .By using loader and useLoaderData() hook ,we ensure the fetching of through api from source during hovering on the link before clicking on it and because of this fectching start earlier before clicking ,and data can accessed very fast.
        path='github'
        element={<GitHub />}>

      </Route>
      <Route path='/users/:id' element={<Users />} />

    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
