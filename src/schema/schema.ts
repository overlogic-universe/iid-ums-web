import {
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const registrationTable = pgTable("registration", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at"),
  competitionCategory: varchar("competition_category", { length: 64 }),
  nameOfInventor: varchar("name_of_inventor", { length: 64 }),
  institution: varchar("institution", { length: 128 }),
  email: varchar("email", { length: 64 }),
  phoneNumber: varchar("phone_number", { length: 14 }),
  whatsappNumber: varchar("whatsapp_number", { length: 14 }),
  address: varchar("address", { length: 256 }),
  titleOfInvention: varchar("title_of_invention", { length: 64 }),
  stageOfInvention: varchar("stage_of_invention", { length: 64 }),
  scopeOfInvention: varchar("scope_of_invention", { length: 64 }),
  descriptionOfInvention: varchar("description_of_invention", { length: 128 }),
  abstractOfInvention: varchar("abstract_of_invention", { length: 128 }),
  designOfInvention: varchar("design_of_invention", { length: 128 }),
});

export type InsertRegistrationType = typeof registrationTable.$inferInsert;
export type SelectRegistrationType = typeof registrationTable.$inferSelect;