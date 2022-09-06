import './header.css'
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

const Header = ({sidebarVisible,setSidebarVisible}) => {
    return <header className="header">
        <img src="logo192.png" width="90" height="90"/>
        <div className="sidebar-toggle-icon" onClick={e=>setSidebarVisible(!sidebarVisible)}>{sidebarVisible ? <FaToggleOn/> : <FaToggleOff/>}</div>
    </header>
}

export default Header