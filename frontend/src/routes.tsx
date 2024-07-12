import { createBrowserRouter } from "react-router-dom";
import BlogsPage from "./pages/blogs";
import CreatePage from "./pages/create";
import EditPage from "./pages/edit";

export const router = createBrowserRouter([
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
    }
])