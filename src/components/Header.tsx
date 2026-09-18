import type { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const activeStyles: CSSProperties = {
        backgroundColor: "#DCFCE7",
        fontWeight: "bold"
    }

    return (
        <div className="header font-serif">
            <nav>
                <NavLink to="/"> Rove & co. </NavLink>

                <NavLink to="/products" style={({ isActive }) => isActive ? activeStyles : undefined}> Products </NavLink>

                <div className="ml-auto p-4 text-2xl">
                    <NavLink to="/login" style={({ isActive }) => isActive ? activeStyles : undefined}> Wishlist </NavLink>

                    <NavLink to="/admin" style={({ isActive }) => isActive ? activeStyles : undefined}> Cart </NavLink>

                    <NavLink to="/profile" style={({ isActive }) => isActive ? activeStyles : undefined}> Profile </NavLink>
                </div>
            </nav>
        </div>
    )
}