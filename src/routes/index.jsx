import { Navigate, useRoutes } from "react-router-dom";
import View404 from "../views/Others/404";
import View500 from "../views/Others/500";
import DefaultLayout from "../containers/DefaultLayout";

export const GetRoutes = () => {
    let routes = useRoutes([
        {
            path: "/500",
            element: <View500 />
        },
        {
            path: "/404",
            element: <View404 />
        },
        {
            path: "/index",
            element: <DefaultLayout />
        },
        {
            path: "/",
            element: <Navigate to="/index" />
        }
    ])
    return routes;
}

