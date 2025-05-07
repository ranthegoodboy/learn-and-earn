"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useCurrentUser from "@/hooks/auth/user-current-user";
import { Logout } from "../auth/logout";

export function UserAvatar() {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src={user?.image ?? undefined}
            alt={user?.name ?? "User"}
          />
          <AvatarFallback>
            {user?.name ? (
              user.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()
            ) : (
              <span>U</span>
            )}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Logout>Logout</Logout>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
