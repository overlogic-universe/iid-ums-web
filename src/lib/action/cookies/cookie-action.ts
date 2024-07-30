"use server";

import { cookies } from "next/headers";

const setCookies = (key: string, data: string) => {
  try {
    cookies().set({
      sameSite:false,
      name: key,
      value: data,
      // secure: true,
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

const getTotalCookies = async () => {
  try {
    return cookies().getAll().length;
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
        cookies().delete(key.name);
      });
  } catch (error) {}
};

export { getCookies, setCookies, removeAllCookies, removeCookies, getTotalCookies };
