"use server";

import { cookies } from "next/headers";

const setCookies = (key: string, data: string) => {
  try {
    cookies().set({
      name: key,
      value: data,
      secure: true,
    });
  } catch (error) {}
};

const getCookies = async () => {
  try {
    return cookies().getAll();
  } catch (error) {}
};

export { getCookies, setCookies };
