import { onAuthenticatedUser } from "@/actions/auth"
import {
  onGetAllGroupMembers,
  onGetGroupChannels,
  onGetGroupInfo,
  onGetGroupSubscriptions,
  onGetUserGroups,
} from "@/actions/groups"
import SideBar from "@/components/global/side-bar"
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"
import { redirect } from "next/navigation"
import Navbar from "../_components/navbar"

type Props = {
    children: React.ReactNode
    params: {
      groupid: string
    }
  }

  const GroupLayout = async ({ children, params }: Props) => {
    // Destructure groupid at the start of the component
    const { groupid } = params
    const query = new QueryClient()
    const user = await onAuthenticatedUser()

    if (!user.id) redirect("/sign-in")

    //group info
    await query.prefetchQuery({
      queryKey: ["group-info"],
      queryFn: () => onGetGroupInfo(groupid),
    })

    //user groups
    await query.prefetchQuery({
      queryKey: ["user-groups"],
      queryFn: () => onGetUserGroups(user.id as string),
    })

    //channels
    await query.prefetchQuery({
      queryKey: ["group-channels"],
      queryFn: () => onGetGroupChannels(groupid),
    })

    //group subscriptions
    await query.prefetchQuery({
      queryKey: ["group-subscriptions"],
      queryFn: () => onGetGroupSubscriptions(groupid),
    })

    //member-chats
    await query.prefetchQuery({
      queryKey: ["member-chats"],
      queryFn: () => onGetAllGroupMembers(groupid),
    })

    return (
      <HydrationBoundary state={dehydrate(query)}>
        <div className="flex h-screen md:pt-5">
          <SideBar groupid={groupid} userid={user.id} />
          <div className="md:ml-[300px] flex flex-col flex-1 bg-[#101011] md:rounded-tl-xl overflow-y-auto border-l-[1px] border-t-[1px] border-[#28282D]">
            <Navbar groupid={groupid} userid={user.id} />
            {children}
          </div>
        </div>
      </HydrationBoundary>
    )
  }
export default GroupLayout
