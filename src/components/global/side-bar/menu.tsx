"use client";

import React from "react";
import { IChannels } from ".";
import { usePathname } from "next/navigation";
import { useChannelInfo } from "@/hooks/channels";
import { SIDEBAR_SETTINGS_MENU } from "@/constants/menus";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  channels: IChannels[];
  optimisticChannel:
    | {
        id: string;
        name: string;
        icon: string;
        createdAt: Date;
        groupId: string | null;
      }
    | undefined;
  loading: boolean;
  groupid: string;
  groupUserId: string;
  userId: string;
};

const SideBarMenu = ({
  channels,
  groupUserId,
  groupid,
  loading,
  optimisticChannel,
  userId,
}: Props) => {
  const pathname = usePathname();
  const currentPage = pathname.split("/").pop();

  const {
    channel: current,
    onEditChannel,
    inputRef,
    variables,
    isPending,
    edit,
    triggerRef,
    onSetIcon,
    icon,
    onChannelDelete,
    deleteVariables,
  } = useChannelInfo();
  if (pathname.includes("settings")) {
    return <div className="flex flex-col">
         {SIDEBAR_SETTINGS_MENU.map((item) =>
          item.integration ? (
            userId === groupUserId && (
              <Link
                className={cn(
                  "flex gap-x-2 items-center font-semibold rounded-xl text-themeTextGray hover:bg-themeGray p-2",
                  currentPage === "settings"
                    ? !item.path && "text-white"
                    : currentPage === item.path && "text-white",
                )}
                href={`/group/${groupid}/settings/${item.path}`}
                key={item.id}
              >
                {item.icon}
                {item.label}
              </Link>
            )
          ) : (
            <Link
              className={cn(
                "flex gap-x-2 items-center font-semibold rounded-xl text-themeTextGray hover:bg-themeGray p-2",
                currentPage === "settings"
                  ? !item.path && "text-white"
                  : currentPage === item.path && "text-white",
              )}
              href={`/group/${groupid}/settings/${item.path}`}
              key={item.id}
            >
              {item.icon}
              {item.label}
            </Link>
          ),
        )}
    </div>;
  }
};

export default SideBarMenu;
