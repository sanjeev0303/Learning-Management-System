"use client"

import { useChatWindow } from "@/hooks/groups"
import { ChatBubble } from "../chat-bubble"
import { useAppSelector } from "@/redux/store"

type ChatWindowProps = {
  recieverid: string
  userid: string
}

export const ChatWindow = ({ recieverid, userid }: ChatWindowProps) => {
  const { messageWindowRef } = useChatWindow(recieverid)
  const { chat } = useAppSelector((state) => state.chatReducer)

  return (
    <div
      className="flex-1 flex py-5 flex-col gap-y-3 h-0 overflow-auto"
      ref={messageWindowRef}
    >
      {chat.map((c) => (
        <ChatBubble key={c.id} {...c} userid={userid} />
      ))}
    </div>
  )
}
