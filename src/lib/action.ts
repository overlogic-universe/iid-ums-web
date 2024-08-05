"use server";
import { db } from "./db";
import {
  InsertRegistrationType,
  registrationTable,
} from "@/schema/schema";

export const insertRegistrationAction = async (
  data: InsertRegistrationType
) => {
  try {
    return await db.insert(registrationTable).values(data);
  } catch (error) {
    throw new Error(error as string);
  }
};
