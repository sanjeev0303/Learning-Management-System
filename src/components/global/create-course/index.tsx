import React from 'react'

type CourseCreateProps = {
    groupid: string
}

const CourseCreate = ({ groupid }: CourseCreateProps) => {

    const {
        
    } = useCreateCourse(groupid)

  return (
    <div>CourseCreate</div>
  )
}

export default CourseCreate
