"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Breadcrumbs = () => {
  const pathname = usePathname();

  const pathSegments = pathname
    .split("/")
    .filter(
      (segment) => segment && segment !== "(protected)" && segment !== "(admin)"
    );

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const isLast = index === pathSegments.length - 1;
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

    // Check if the segment looks like an ID (long alphanumeric string)
    const isIdLike = /^[a-zA-Z0-9]{20,}$/.test(segment);

    let formattedSegment = segment;
    if (isIdLike) {
      // If it looks like an ID, replace with "Details"
      formattedSegment = "Details";
    } else {
      // Otherwise, format normally
      formattedSegment = segment
        .replace(/\[.*?\]/g, "Details") // Still handle any [id] patterns
        .replace(/-/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }

    return (
      <React.Fragment key={segment}>
        <BreadcrumbItem>
          {isLast ? (
            <BreadcrumbPage>{formattedSegment}</BreadcrumbPage>
          ) : (
            <Link href={href}>{formattedSegment}</Link>
          )}
        </BreadcrumbItem>
        {!isLast && <BreadcrumbSeparator />}
      </React.Fragment>
    );
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href={`/dashboard`}>Dashboard</Link>
        </BreadcrumbItem>
        {breadcrumbItems.length > 0 && <BreadcrumbSeparator />}
        {breadcrumbItems}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
