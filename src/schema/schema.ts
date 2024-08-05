import {
  pgTable,
  serial,
  timestamp,
  varchar,
  numeric
} from "drizzle-orm/pg-core";

export const registrationTable = pgTable("registration", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", {withTimezone: true}).notNull().defaultNow(),
  email: varchar("email", { length: 64 }).notNull(),
  leaderName: varchar("leader_name", { length: 64 }).notNull(),
  membersName: varchar("members_name", { length: 512 }).notNull(),
  supervisorName: varchar("supervisor_name", { length: 128 }).notNull(),
  universityOrigin: varchar("university_origin", { length: 256 }).notNull(),
  whatsappNumber: varchar("whatsapp_number", { length: 14 }).notNull(),
  competitionCategory: varchar("competition_category", { length: 256 }).notNull(),
  formOfInvention: varchar("form_of_invention", { length: 256 }).notNull(),
  titleOfInnovation: varchar("title_of_innovation", { length: 256 }).notNull(),
  patentNumber: varchar("patent_number", { length: 20 }),
  scanStudentId: varchar("scan_student_id", { length: 256 }).notNull(),
  abstract: varchar("abstract", { length: 256 }).notNull(),
  productDescription: varchar("product_description", { length: 256 }).notNull(),
  competitionBatch: numeric("competition_batch").notNull(),
});

export type InsertRegistrationType = typeof registrationTable.$inferInsert;
export type SelectRegistrationType = typeof registrationTable.$inferSelect;