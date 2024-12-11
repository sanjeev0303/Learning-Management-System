import { useGroupAbout, useGroupInfo } from '@/hooks/groups'
import React from 'react'

type AboutGroupProps = {
    userid: string
    groupid: string
}

const AboutGroup = ({userid, groupid}: AboutGroupProps) => {

    const { group } = useGroupInfo()

    const {} = useGroupAbout()

  return (
    <div>AboutGroup</div>
  )
}

export default AboutGroup
