import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Flex from '../../designLayouts/Flex'

const Header = () => {
    const [showMenu, setShowMenu] = useState(true)
    const [sidenav, setSidenav] = useState(false)
    const [category, setCategory] = useState(false)
    const [brand, setBrand] = useState(false)
    const location = useLocation()

    useEffect(() => {
        let ResponsiveMenu = () => {
            if (window.innerWidth < 667 ) {
                setShowMenu(false)
            } else {
                setShowMenu(true)
            }
        }
        ResponsiveMenu()
        window.addEventListener("resize", ResponsiveMenu)
    },[])
    return (
        <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
            <nav className="h-full px-4 max-w-container mx-auto relative">

            </nav>
        </div>
    )
}

export default Header
