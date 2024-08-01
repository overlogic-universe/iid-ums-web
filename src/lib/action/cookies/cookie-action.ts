"use server";
import { ZodConstants } from "@/constants/zod-constants";
import { cookies } from "next/headers";
import { UseFormReturn } from "react-hook-form";
const formSchema = ZodConstants.formSchema;

const setCookies = (key: string, data: string) => {
  try {
    cookies().set({
      sameSite: false,
      name: key,
      value: data,
      // secure: true,
    });
  } catch (error) {
    throw new Error(error as string);
  }
};

const setAllCookies = (cookieData: CookieType[]) => {
  try {
    cookieData.forEach((cookie) => {
      console.log(cookie.value);
      
      if(cookie.value != undefined && cookie.value != ""){
        setCookies(cookie.key, cookie.value);
      } else {
        removeCookies(cookie.key);
      }
    });
  } catch (error) {
    throw new Error(error as string);
  }
};

const getCookies = async () => {
  try {
    return cookies().getAll();
  } catch (error) {
    throw new Error(error as string);
  }
};

const getCookie = async (key: string) => {
  try {
    return cookies().get(key);
  } catch (error) {
    throw new Error(error as string);
  }
};

const getTotalCookies = async () => {
  try {
    let total = 0;
    cookies()
      .getAll()
      .map((cookie) => {
        if ((cookie.value.length > 0) && cookie.name != "cookie") {
          total++;
        }
      });
    return total;
  } catch (error) {
    throw new Error(error as string);
  }
};

const removeCookies = async (key: string) => {
  try {
    return cookies().delete(key);
  } catch (error) {
    throw new Error(error as string);
  }
};

const removeAllCookies = async () => {
  try {
    return cookies()
      .getAll()
      .forEach((key) => {
        if(!(key.name == "cookie")){
          cookies().delete(key.name);
        }
      });
  } catch (error) {}
};

export {
  getCookies,
  setCookies,
  setAllCookies,
  removeAllCookies,
  removeCookies,
  getTotalCookies,
  getCookie,
};
