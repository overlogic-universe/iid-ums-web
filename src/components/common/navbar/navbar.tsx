import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from "./navbar.module.css";
import { TextConstants } from "@/constants/text-constants";
import { SvgConstants } from "@/constants/svg-constants";
import { Button } from "../../ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className={`sticky top-0 z-50 w-full h-20 bg-blue-400 bg-opacity-15 backdrop-filter backdrop-blur-3xl p-2 border-blue-300 border-b flex justify-between items-center md:px-10 px-3`}>
      <Image className="z-10" src={SvgConstants.logo} alt={TextConstants.en.registration} height={70} />
      <div className="lg:hidden" onClick={updateMenu}>
        <div className={`${styles["burger-menu"]} ${isMenuClicked ? styles.clicked : styles.unclicked}`}>
          <div className={`${styles["burger-bar"]} ${isMenuClicked ? styles.clicked : styles.unclicked}`}></div>
          <div className={`${styles["burger-bar"]} ${isMenuClicked ? styles.clicked : styles.unclicked}`}></div>
          <div className={`${styles["burger-bar"]} ${isMenuClicked ? styles.clicked : styles.unclicked}`}></div>
        </div>
      </div>
      <ul className={`${styles["nav-box"]} min-h-screen lg:hidden top-0 fw-semibold text-center gap-7 ${isMenuClicked ? styles.visible : styles.hidden}`}>
        <li>
          <Link className="text-decoration-none" href="/">
            <div className={navigationMenuTriggerStyle()}>Home</div>
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none" href="#event-registration">
            <div className={navigationMenuTriggerStyle()}>Event Registration</div>
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none" href="#event-details">
            <div className={navigationMenuTriggerStyle()}>Event Details</div>
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none" href="#event-recap">
            <div className={navigationMenuTriggerStyle()}>Event Recap</div>
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none" href="#about-us">
            <div className={navigationMenuTriggerStyle()}>About Us</div>
          </Link>
        </li>
        <Link className="flex justify-center py-4" href="/registration" passHref>
          <Button className="hover:translate-y-[-4px] rounded-2xl w-40 h-12 text-base bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 transition-all duration-300 blue-shadow">{TextConstants.en.registration}</Button>
        </Link>
      </ul>
      <NavigationMenu className="hidden lg:block z-20">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="rounded-3xl">Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild href="/">
                    <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="/">
                      <div className="mb-2 mt-4 text-lg font-medium">IID/UMS</div>
                      <p className="text-sm leading-tight text-muted-foreground">"The Creative Synergy of Young Investors Encourage Innovation for Human Life and Well-being - International Innovation Day 2024 - UMS",</p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {components.map((component, index) => (
                  <ListItem key={index} href={component.href} title={component.title}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#event-registration" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Event Registration</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#event-details" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Event Details</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#event-recap" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Event Recap</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#about-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Link className="hidden lg:block" href="/registration" passHref>
        <Button className="rounded-2xl w-40 h-12 text-base bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 transition-all duration-300 blue-shadow">{TextConstants.en.registration}</Button>
      </Link>
    </nav>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
