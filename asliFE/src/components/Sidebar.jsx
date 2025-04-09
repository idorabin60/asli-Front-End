"use client"

import { useState } from "react"
import { Home, Layers, MessageSquare, Info, Menu } from 'lucide-react'
import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react"

export default function Sidebar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    console.log("Sidebar Mounted")
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Mobile menu button - visible when sidebar is closed */}
      {!isOpen && (
        <button 
          onClick={toggleSidebar}
          className="fixed right-4 top-4 z-50 rounded-md bg-[#232936] p-2 text-white md:hidden"
        >
          <Menu size={24} />
        </button>
      )}
      
      <nav className={`fixed right-0 top-0 h-screen bg-[#232936] text-white shadow-lg transition-all duration-300 
        ${isOpen ? "w-16 md:w-64" : "w-0 -right-2 md:-right-4 overflow-hidden"}`}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div 
            className="logo relative flex justify-center items-center p-12 border-b border-gray-700 cursor-pointer"
            onClick={toggleSidebar}
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-50 h-40 absolute object-contain transition-all duration-300 hover:filter hover:drop-shadow-[0_0_0.5em_#646cffaa]"
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex-1 py-4 space-y-2">
            <NavItem to="/" icon={<Home size={20} />} text="בית" isActive={location.pathname === "/"} />
            {/* <NavItem
              to="/projects"
              icon={<Layers size={20} />}
              text="תמיכה"
              isActive={location.pathname === "/projects"}
            /> */}
            {/* <NavItem to="/about" icon={<Info size={20} />} text="עלינו" isActive={location.pathname === "/about"} />
            <NavItem
              to="/contact"
              icon={<MessageSquare size={20} />}
              text="אנשי קשר"
              isActive={location.pathname === "/contact"}
            /> */}
          </ul>
        </div>
      </nav>
    </>
  )
}

function NavItem({ to, icon, text, isActive }) {
  return (
    <li>
      <Link
        to={to}
        className={`
          flex items-center gap-3 px-4 py-3 mx-2 rounded-lg
          transition-colors duration-200
          ${isActive ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/5 hover:text-white"}
        `}
      >
        <span className="min-w-[24px]">{icon}</span>
        <span className="hidden md:block font-medium">{text}</span>
      </Link>
    </li>
  )
}