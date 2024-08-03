"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { TextConstants } from "@/constants/text-constants";

import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const SettingsDrawerDialog: NextPage<Props> = ({}) => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  React.useEffect(() => {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  const ctrlShiftKey = (e: KeyboardEvent, keyCode: string): boolean => {
    return e.ctrlKey && e.shiftKey && e.key === keyCode;
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        ctrlShiftKey(e, "I") ||
        ctrlShiftKey(e, "J") ||
        ctrlShiftKey(e, "C") ||
        (e.ctrlKey && e.key === "U")
      ) {
        setOpen(true);
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="hidden" variant="outline"></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>UMS UUID 2024</DialogTitle>
            <DialogDescription>
                <Link href={"https://www.instagram.com/overlogic.id/"} target="_blank">
              <p>{TextConstants.en.copyright}</p>
                </Link>
            </DialogDescription>
          </DialogHeader>
          <div></div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="hidden">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>UMS IID 2024</DrawerTitle>
          <DrawerDescription>
          {TextConstants.en.copyright}
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default SettingsDrawerDialog;
