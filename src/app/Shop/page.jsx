'use client'
import React from 'react'
import Background from '../../components/LivingComponents/Background/background'
import SideNavbar from '../../components/Sidemenu/index'
import Header from '../../components/Header';

export default function Shop() {
  return (
    <>
      <Header sticky={true} />
      <SideNavbar/>
      <Background/>
    </>
  )
}
