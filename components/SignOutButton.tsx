'use client'

import { signOut } from '@/lib/actions/auth.action'
import React from 'react'
import { Button } from './ui/button'

const SignOutButton = () => {
    const handleLogout = async () => {
        await signOut()
    }
  return (
    <Button onClick={handleLogout} className='btn-primary'>Sign Out</Button>
  )
}

export default SignOutButton