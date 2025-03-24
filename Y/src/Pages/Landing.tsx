import { NavLink } from "react-router-dom";

export default function Landing() {

    return (
        <>
            <h1>This is Landing Page.</h1>

            <NavLink
                to="CustomerManagement"
            >
                Home
            </NavLink>
        </>
    )
}