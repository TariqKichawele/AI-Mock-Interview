import { getCurrentUser } from '@/lib/actions/auth.action'
import Agent from '@/components/Agent'
import React from 'react'

const Interview = async () => {
    const user = await getCurrentUser();
  return (
    <>
        <h3>Interview generation</h3>

        <Agent
            userName={user?.name!}
            userId={user?.id}
            profileImage={user?.profileURL}
            type="generate"
        />
    </>
  )
}

export default Interview