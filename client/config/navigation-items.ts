import {
  BarChart2,
  BookOpen,
  GraduationCap,
  type LucideIcon,
  Send,
  Settings,
  User,
} from "lucide-react";

export type NonCollapsibleNavigationType = {
  title: string;
  isActive: boolean;
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive: boolean;
  }[];
};

export type CollapsibleNavigationType = {
  label: string;
  title: string;
  icon: LucideIcon;
  isActive: boolean;
  items: {
    title: string;
    url: string;
  }[];
};

export const dashboardNavigationItems: NonCollapsibleNavigationType = {
  title: "Dashboard",
  isActive: true,
  items: [
    {
      title: "My Courses",
      url: "/dashboard/my-courses",
      icon: BookOpen,
      isActive: true,
    },
    {
      title: "Enrolled Courses",
      url: "/dashboard/enrolled-courses",
      icon: GraduationCap,
      isActive: true,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: BarChart2,
      isActive: true,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: User,
      isActive: true,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
      isActive: true,
    },
  ],
};

export const secondaryNavigationItems = [
  {
    title: "Feedback",
    url: "/feedback",
    icon: Send,
  },
];
