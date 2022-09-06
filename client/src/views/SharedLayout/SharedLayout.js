import Sidebar from "../../components/sidebar"
import Header from "../../components/header"
import { Outlet } from "react-router-dom"
import { useState } from "react"


import './SharedLayout.css'

const SharedLayout = ({outlet}) => {
    const [sidebarVisible,setSidebarVisible] = useState(false)

    return <div className="shared-layout">
        <Header setSidebarVisible={setSidebarVisible} sidebarVisible={sidebarVisible}/>
        <div className="shared-layout-content">
            <Sidebar visible={sidebarVisible} setVisible={setSidebarVisible}/>
            <div className="outlet">
                <Outlet/>
            </div>
        </div>
    </div>
}

export default SharedLayout