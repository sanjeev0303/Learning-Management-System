"use client";

import { useNavigation } from "@/hooks/navigation";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GROUPLE_CONSTANTS } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

type MenuProps = {
  orientation: "mobile" | "desktop";
};

const Menu = ({ orientation }: MenuProps) => {
  const { section, onSetSection } = useNavigation();

  switch (orientation) {
    case "desktop":
      return (
        <Card className="bg-themeGray border-themeGray bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-2xl bg-opacity-60 p-1 lg:flex hidden rounded-xl">
          <CardContent className="p-0 flex gap-2">
            {GROUPLE_CONSTANTS.landingPageMenu.map((menuItem) => (
              <Link
                href={menuItem.path}
                {...(menuItem.section && {
                  onClick: () => onSetSection(menuItem.path),
                })}
                className={cn(
                  "rounded-xl flex gap-2 py-2 px-4 items-center",
                  section == menuItem.path
                    ? "bg-[#09090B] border-[#27272A]"
                    : ""
                )}
                key={menuItem.id}
              >
                {section == menuItem.path && menuItem.icon}
                {menuItem.label}
              </Link>
            ))}
          </CardContent>
        </Card>
      );

      break;

    case "mobile":
      return (
        <div className="flex flex-col mt-10">
          {GROUPLE_CONSTANTS.landingPageMenu.map((menuItem) => (
            <Link
              href={menuItem.path}
              {...(menuItem.section && {
                onClick: () => onSetSection(menuItem.path),
              })}
              className={cn(
                "rounded-xl flex gap-2 py-2 px-4 items-center",
                section == menuItem.path ? "bg-themeGray border-[#27272A]" : ""
              )}
              key={menuItem.id}
            >
              {menuItem.icon}
              {menuItem.label}
            </Link>
          ))}
        </div>
      );

      break;

    default:
      return <></>;
  }
};

export default Menu;
