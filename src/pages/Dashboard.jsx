import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { MainLayout } from '../components/MainLayout'

function Dashboard() {
  return (
  <div className="flex h-screen bg-gray-100">
< Sidebar />
< MainLayout />
</div>
  )
}

export default Dashboard
