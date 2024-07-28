import {
  pgTable,
  serial,
  timestamp,
  varchar,
  numeric
} from "drizzle-orm/pg-core";

export const registrationTable = pgTable("registration", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at"),
  email: varchar("email", { length: 64 }),
  leaderName: varchar("leader_name", { length: 64 }),
  membersName: varchar("members_name", { length: 256 }),
  supervisorName: varchar("supervisor_name", { length: 128 }),
  universityOrigin: varchar("university_origin", { length: 128 }),
  whatsappNumber: varchar("whatsapp_number", { length: 14 }),
  competitionCategory: varchar("competition_category", { length: 256 }),
  formOfInvention: varchar("form_of_invention", { length: 256 }),
  titleOfInnovation: varchar("title_of_innovation", { length: 256 }),
  patentNumber: varchar("patent_number", { length: 128 }),
  scanStudentId: varchar("scan_student_id", { length: 256 }),
  abstract: varchar("abstract"),
  productDescription: varchar("product_description"),
  competitionBatch: numeric("competition_batch").default('1'),
});

export type InsertRegistrationType = typeof registrationTable.$inferInsert;
export type SelectRegistrationType = typeof registrationTable.$inferSelect;