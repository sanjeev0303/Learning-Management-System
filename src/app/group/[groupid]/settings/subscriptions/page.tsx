import { GroupSubscriptionForm } from '@/components/forms/subscription'
import React from 'react'
import { Subscriptions } from './_components/subscriptions'

type SubscriptionProps = {
    params: { groupid: string }
}

const SubscriptionPage = ({ params }: SubscriptionProps) => {
  return (
    <div className='p-10 flex flex-col gap-y-10'>
        <h2 className='font-bold text-3xl'> Group Subscriptions</h2>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-5'>
            <GroupSubscriptionForm groupid={params.groupid} />
            <Subscriptions groupid={params.groupid} />
        </div>
    </div>
  )
}

export default SubscriptionPage
