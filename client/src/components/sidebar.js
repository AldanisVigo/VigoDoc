import './sidebar.css'
// import { useState } from 'react'
import { FaArrowLeft, FaFolder, FaFile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const links = [
    {
        route : '/',
        name : 'Docs',
        icon : <FaFolder/>
    },
    {
        route : '/documents/new',
        name : 'New Doc',
        icon : <FaFile/>
    }
]

const Sidebar = ({visible,setVisible}) => {
    const { selected_menu_item, setSelectedMenuItem } = useAppContext()

    const navigateToMenuItem = (link) => {
        setVisible(!visible)
        setSelectedMenuItem(link.route)
    }

    return <aside className={visible ? 'sidebar sidebar-visible' : 'sidebar sidebar-hidden'}>
        <FaArrowLeft className="sidebar-close-icon" style={{float: 'right', margin: 10}} onClick={e=>setVisible(false)}/>
        {/* {selectedMenuItem} */}
        <div className="sidebar-links">
            {links && links.map((link,index)=><Link key={index} onClick={e=>navigateToMenuItem(link)} to={link.route} className={selected_menu_item === link.route ? 'sidebar-link sidebar-link-selected' : 'sidebar-link'}>{link.icon}&nbsp;&nbsp;{link.name}</Link>)}
        </div>
    </aside>
}

export default Sidebar