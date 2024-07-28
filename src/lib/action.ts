"use server";
import { db } from "./db";
import {
  InsertRegistrationType,
  SelectRegistrationType,
  registrationTable,
} from "@/schema/schema";

export const insertRegistrationAction = async (
  data: InsertRegistrationType
) => {
  try {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    return await db.insert(registrationTable).values(data);
  } catch (error) {
    console.log('====================================');
    console.log(error as string);
    console.log('====================================');
    throw new Error(error as string);
  }
};
