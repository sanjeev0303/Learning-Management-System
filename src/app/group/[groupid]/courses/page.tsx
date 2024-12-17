import { onGetGroupCourses } from '@/actions/course'
import CourseCreate from '@/components/global/create-course'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'

type CoursePageProps = {
    params: {
        groupid: string
    }
}

const CoursePage = async ({ params }: CoursePageProps) => {

    const client = new QueryClient()

    await client.prefetchQuery({
        queryKey: ["group-course"],
        queryFn: () => onGetGroupCourses(params.groupid)
    })

  return (
   <HydrationBoundary state={dehydrate(client)}>
    <div className='container grid lg:grid-cols-2 2xl:grid-cols-3 py-10 gap-5'>
        <CourseCreate groupid={params.groupid} />
        {/* <CourseList groupid={params.groupid} /> */}
    </div>
   </HydrationBoundary>
  )
}

export default CoursePage
