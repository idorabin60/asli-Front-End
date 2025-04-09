"use client"

import { useState, useEffect } from "react"
import { Home, Layers, MessageSquare, Info, Menu } from 'lucide-react'
import { Link, useLocation } from "react-router-dom"

export default function Sidebar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Function to check if device is mobile
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 768)
  }

  useEffect(() => {
    // Check initially
    checkIsMobile()
    
    // Set initial sidebar state based on device type
    setIsOpen(!isMobile)
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile)
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  // Update sidebar state when mobile status changes
  useEffect(() => {
    setIsOpen(!isMobile)
  }, [isMobile])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Hamburger toggle button */}
      {!isMobile && (
        <button 
          onClick={toggleSidebar}
          className="fixed right-4 top-4 z-50 p-2 bg-[#232936] text-white rounded-md shadow-md hover:bg-[#2c3444]"
          aria-label="Toggle sidebar"
        >
          <Menu size={24} />
        </button>
      )}
      
      <nav className={`fixed right-0 top-0 h-screen bg-[#232936] text-white shadow-lg transition-all duration-300 
        ${isOpen ? "w-16 md:w-64" : "w-0 overflow-hidden"}`}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="logo relative flex justify-center items-center p-12 border-b border-gray-700">
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