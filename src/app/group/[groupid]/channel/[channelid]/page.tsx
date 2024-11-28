import { onAuthenticatedUser } from "@/actions/auth";
import { onGetChannelInfo } from "@/actions/channel";
import { onGetGroupChannels, onGetGroupInfo } from "@/actions/groups";
import { currentUser } from "@clerk/nextjs/server";
import { QueryClient } from "@tanstack/react-query";
import React from "react";

type GroupChannelProps = {
  params: { channelid: string; groupid: string };
};

// WIP: complete grouple channel page

const GroupChannelPage = async ({ params }: GroupChannelProps) => {
  const client = new QueryClient();
  const user = await currentUser();
  const authUser = await onAuthenticatedUser();

  await client.prefetchQuery({
    queryKey: ["channel-info"],
    queryFn: () => onGetChannelInfo(params.channelid),
  });

  await client.prefetchQuery({
    queryKey: ["about-group-info"],
    queryFn: () => onGetGroupInfo(params.groupid),
  });

  return <div>GroupChannelPage</div>;
};

export default GroupChannelPage;
