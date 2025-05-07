"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useCurrentUser from "@/hooks/auth/user-current-user";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { Logout } from "../auth/logout";

export function UserStatus() {
  const user = useCurrentUser();

  console.log(user);

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage
              src={user.image ? user.image.trim().replace(/`/g, "") : undefined}
              alt={user.name ?? "User"}
            />
            <AvatarFallback className="text-black">
              {user.name
                ? user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                : "U"}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link href="/account">Account</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/subscription">Subscription</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Logout>Logout</Logout>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex gap-2">
      <Link href="/login">
        <Button variant="ghost" className="flex items-center gap-2">
          <LogIn size={18} />
          <span>Log In</span>
        </Button>
      </Link>
      <Link href="/register">
        <Button variant="secondary">Sign Up</Button>
      </Link>
    </div>
  );
}
