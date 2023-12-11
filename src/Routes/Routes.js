import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SuccessPage from "../SharedPages/SuccessPage/Successpage";
import LoadingElement from "../Components/LoadingElement";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/success",
                element: <SuccessPage></SuccessPage>
            },
            {
                path: "/loader",
                element: <LoadingElement></LoadingElement>
            }
        ]
    }
])