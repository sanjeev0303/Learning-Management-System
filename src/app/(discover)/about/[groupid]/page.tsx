import { onGetGroupInfo } from '@/actions/groups'
import { QueryClient } from '@tanstack/react-query'
import React from 'react'

type Props = {
    params: {
        groupid: string,
    }
}

const page = async ({ params }: Props) => {

    const query = new QueryClient()

    await query.prefetchQuery({
        queryKey: ["about-group-info"],
        queryFn: () => onGetGroupInfo(params.groupid)
    })

    await query.prefetchQuery({
        queryKey: ["active-subscription"],
        queryFn:  () => onGetActiveSubscription(params.groupid)
    })

  return (
    <div>page</div>
  )
}

export default page
