import { RouteObject } from "react-router-dom";
import Home from "../view/home";

const router: RouteObject[]=[
    {
        path:'./home',
        element:<Home/>
    },

]

export default router