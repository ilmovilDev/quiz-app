import { Navigate, Route, Routes } from "react-router-dom"
import { Home, ShowView } from "../pages"

export const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showview/:category" element={<ShowView />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
