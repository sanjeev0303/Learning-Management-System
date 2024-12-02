"use client"

import { supabaseClient } from '@/lib/utils'
import { onOffline } from '@/redux/slices/online-member-slice'
import { AppDispatch } from '@/redux/store'
import { useClerk } from '@clerk/nextjs'
import React from 'react'
import { useDispatch } from 'react-redux'
import DropDown from '../drop-down'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { Logout, Settings } from '@/icons'
import { Button } from '@/components/ui/button'

type UserAvatarProps = {
    image: string
    groupid: string
    userid?: string
}

const UserAvatar = ({ image, groupid, userid }: UserAvatarProps) => {

    const { signOut } = useClerk()

    const untrackPresence = async () => {
        await supabaseClient.channel("tracking").untrack()
    }

    const dispatch: AppDispatch = useDispatch()

    // console.log("user-widget: ", userid);

    const onLogout = async () => {
        untrackPresence()
        dispatch(onOffline({ members: [{ id : userid! }]}))
        signOut({ redirectUrl: "/" })
    }

  return (
    <DropDown
    title="Account"
    trigger={
      <Avatar className="cursor-pointer">
        <AvatarImage src={image} alt="user" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    }
  >
    <Link href={`/group/${groupid}/settings`} className="flex gap-x-2 px-2">
      <Settings /> Settings
    </Link>
    <Button
      onClick={onLogout}
      variant="ghost"
      className="flex gap-x-3 px-2 justify-start w-full"
    >
      <Logout />
      Logout
    </Button>
  </DropDown>
  )
}

export default UserAvatar
