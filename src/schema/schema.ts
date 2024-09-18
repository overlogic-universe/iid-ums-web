import {
  pgTable,
  serial,
  timestamp,
  varchar,
  numeric
} from "drizzle-orm/pg-core";

export const registrationCompetitionTable = pgTable("registration_competition", {
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
  titleOfProduct: varchar("title_of_product", { length: 256 }).notNull(),
  patentNumber: varchar("patent_number", { length: 20 }),
  scanStudentId: varchar("scan_student_id", { length: 256 }).notNull(),
  abstract: varchar("abstract", { length: 256 }).notNull(),
  productDescription: varchar("product_description", { length: 256 }).notNull(),
  competitionBatch: numeric("competition_batch").default("2").notNull(),
});

export const registrationInnovationTalk = pgTable("registration_innovation_talk", {
  id: serial("id").primaryKey(),
  emailUser: varchar("email", { length: 64 }).notNull(),
  name: varchar("name", { length: 64 }).notNull(),
  whatsappNumberUser: varchar("whatsapp_number", { length: 14 }).notNull(),
  organization: varchar("organization", { length: 64 }).notNull(),
  faculty: varchar("faculty", { length: 128 }).notNull(),
  payment: varchar("payment", { length: 128 }).notNull(),
});

export type InsertRegistrationCompetitionType = typeof registrationCompetitionTable.$inferInsert;
export type SelectRegistrationCompetitionType = typeof registrationCompetitionTable.$inferSelect;
export type SelectRegistrationInnovationTalkType = typeof registrationInnovationTalk.$inferSelect;
export type InsertRegistrationInnovationTalkType = typeof registrationInnovationTalk.$inferInsert