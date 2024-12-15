"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export const getInvolved: { title: string; href: string }[] = [
  {
    title: "Giving",
    href: "/getInvolved/giving"
  },
  {
    title: "Volunteering",
    href: "/getInvolved/volunteering"
  },
  {
    title: "Advocate",
    href: "/getInvolved/advocate"
  },
  {
    title: "Internship",
    href: "/getInvolved/internship"
  },
]

export const Publications: { title: string; href: string }[] = [
  {
    title: "News & Stories of transformation",
    href: "/publications/news&stories"
  },
  {
    title: "Research",
    href: "/publications/research"
  },
  {
    title: "Announcements",
    href: "/publications/announcements"
  },
]

export function NavigationMenuDemo() {
  return (
    <div>
       <div className="hidden md:block bg-[rgb(67,152,205)] py-1">
          <NavigationMenu className="my-5 px-2 flex justify-center items-center">
            <NavigationMenuList className="flex md:gap-8 lg:gap-28">
              <NavigationMenuItem>
                <Link href="/" className="hover:text-blue-800" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/interventions" className="hover:text-blue-800" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Intervention
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Publications</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {Publications.map((component) => (
                      <ListItem className="hover:text-blue-800"
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Get Involved</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {getInvolved.map((component) => (
                      <ListItem className="hover:text-blue-800"
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/where-we-work" className="hover:text-blue-800" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Where we work
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
       </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
