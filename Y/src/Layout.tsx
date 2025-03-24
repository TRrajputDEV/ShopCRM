import { Outlet } from 'react-router-dom'
// import Landing from './Pages/Landing'
function Layout() {
    return (
        <>
            {/* <Landing/> */}
            <Outlet />
        </>
    )
}

export default Layout