import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from "./navbar.module.css";
import { TextConstants } from "@/constants/text-constants";
import { SvgConstants } from "@/constants/svg-constants";
import { Button } from "../../ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className={`fixed top-0 z-50 w-full h-20 bg-blue-400 bg-opacity-15 backdrop-filter backdrop-blur-3xl p-2 border-blue-300 border-b flex justify-between items-center md:px-10 px-3`}>
      <Image className="z-10 md:w-[250px] w-[180px]" src={SvgConstants.logo} alt={TextConstants.en.registration} />
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
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
            </Link>
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
