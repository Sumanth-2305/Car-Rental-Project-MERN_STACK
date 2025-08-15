import React, { useEffect } from 'react'
import NavbarOwner from '../../components/owner/NavbarOwner'
import Sidebar from '../../components/owner/Sidebar'
import { Outlet,Navigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'


const Layout = () => {
  const {isOwner} = useAppContext();

  useEffect(() => {
    if (!isOwner) {
      Navigate('/');
    }
  },[isOwner])
  return (
    <div className='flex flex-col'>
        <NavbarOwner/>
        <div className='flex'>
            <Sidebar/>
            <Outlet/>
        </div>
      
    </div>
  )
}

export default Layout
