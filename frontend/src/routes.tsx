import { createBrowserRouter } from "react-router-dom";
import BlogsPage from "./pages/blogs";
import CreatePage from "./pages/create";
import EditPage from "./pages/edit";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import PrivateRoute from "./components/PrivateRoute";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute/>,
        children: [
            {
                path: '/',
                element: <BlogsPage/>
            },
            {
                path: '/create',
                element: <CreatePage/>
            },
            {
                path: '/edit/:id',
                element: <EditPage/>
            },
        ]
    }, 
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/register',
        element: <RegisterPage/>
    }
])