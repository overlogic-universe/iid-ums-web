"use client";

import { Button } from "@/components/ui/button";
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
import {
    getCookie,
  setCookies,
} from "@/lib/action/cookies/cookie-action";
import Link from "next/link";
import { useEffect } from "react";

const CookiesConcent = () => {
  const fetchCookies = async () => {
    var delayInMilliseconds = 0;
    const cookies = await getCookie("cookie");
    setTimeout(() => {
      if (cookies == undefined) {
        document.getElementById("cookie-concent")?.click();
      }
    }, delayInMilliseconds);
  };
  useEffect(() => {
    fetchCookies();
  }, []);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="hidden" id="cookie-concent" />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{TextConstants.en.cookieTitle}</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2"></div>
            <div className="mt-3 h-[120px]">
              {TextConstants.en.cookieConsent}
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose>
                <Button
                className="w-full"
                onClick={() => {
                    setCookies("cookie", "true");
                }}
                >
                {TextConstants.en.accept}
                </Button>
            </DrawerClose>
            {/* <DrawerClose>
                <Button
                className="w-full"
                onClick={() => {
                    setCookies("cookie", "false");
                }}
                variant={"destructive"}
                >
                {TextConstants.en.reject}
                </Button>
            </DrawerClose> */}
            <Link
              className="w-full"
              href={"https://www.google.com/search?q=What+is+cookies+%3F&"}
              target="_blank"
            >
              <Button type="button" className="w-full" variant="outline">
                {TextConstants.en.readMore}
              </Button>
            </Link>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CookiesConcent;
