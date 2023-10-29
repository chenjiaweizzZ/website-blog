import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import("@/views/home"))
const About = React.lazy(() => import("@/views/about"))

const routes = [
    {
        path: "/",
        element: <Navigate to="/home"/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    }
]

export default routes