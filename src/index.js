import ReactDOM from 'react-dom/client';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './views/home/home';
import About from './views/about/about';
import Contact from './views/contact/contact';
const router= createBrowserRouter([
    {
         path: '/',
        element:< Home/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/contact',
        element:<Contact />
    },
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
     <RouterProvider router={ router}/>
    </>
);

