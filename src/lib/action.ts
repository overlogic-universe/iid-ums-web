"use server";
import { db } from "./db";
import {
  InsertRegistrationCompetitionType,
  InsertRegistrationInnovationTalkType,
  registrationCompetitionTable,
  registrationInnovationTalk,
} from "@/schema/schema";

export const insertCompetitionRegistrationAction = async (
  data: InsertRegistrationCompetitionType
) => {
  try {
    return await db.insert(registrationCompetitionTable).values(data);
  } catch (error) {
    throw new Error(error as string);
  }
};

export const insertInnovationTalkRegistrationAction = async (
  data: InsertRegistrationInnovationTalkType
) => {
  try {
    return await db.insert(registrationInnovationTalk).values(data);
  } catch (error) {
    throw new Error(error as string);
  }
};