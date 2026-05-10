import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import App from './component/layout/App.jsx';
import Main from './component/pages/Main.jsx';
import Error from './component/pages/Error.jsx';
import Catalog from './component/pages/Catalog.jsx';
import AboutUs from './component/pages/AboutUs.jsx';
import ContactUs from './component/pages/ContactUs.jsx';
import Blog from './component/pages/Blog.jsx';
import Cart from './component/pages/Cart.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {path: "/", Component: Main},
            {path: "/cart", Component: Cart},
            {path: "/catalog", Component: Catalog},
            {path: "/about-us", Component: AboutUs},
            {path: "/contact-us", Component: ContactUs},
            {path: "/blog", Component: Blog},
            {path: "*", Component: Error},
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)