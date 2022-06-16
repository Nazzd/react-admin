import { Navigate, useRoutes } from "react-router-dom";
import View404 from "../views/Others/404";
import View500 from "../views/Others/500";
import About from "../views/About/About";
import Index from "../views/Index/Index";
import Source from "../views/System/Source/Source";
import User from "../views/System/User/User";
import Role from "../views/System/Role/Role";

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
            element: <Index />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/",
            element: <Navigate to="/index" />
        },
        {
            path: "/system/role",
            element: <Role />
        },
        {
            path: "/system/source",
            element: <Source />
        },
        {
            path: "/system/user",
            element: <User />
        }
    ])
    return routes;
}

