import { onAuthenticatedUser } from "@/actions/auth";
import { onGetChannelInfo } from "@/actions/channel";
import { onGetGroupInfo } from "@/actions/groups";
import { currentUser } from "@clerk/nextjs/server";
import { QueryClient } from "@tanstack/react-query";
import React from "react";

type GroupChannelProps = {
  params: { channelid: string; groupid: string };
};

const GroupChannelPage = async ({ params }: GroupChannelProps) => {
  const client = new QueryClient();
  const user = await currentUser();
  const authUser = await onAuthenticatedUser();

  await client.prefetchQuery({
    queryKey: ["channel-info"],
    queryFn: async () => {
      const data = await onGetChannelInfo(params.channelid);
      return data ?? null; // Ensure a value is returned
    },
  });

  await client.prefetchQuery({
    queryKey: ["about-group-info"],
    queryFn: async () => {
      const data = await onGetGroupInfo(params.groupid);
      return data ?? null; // Ensure a value is returned
    },
  });

  return <div>GroupChannelPage</div>;
};

export default GroupChannelPage;
