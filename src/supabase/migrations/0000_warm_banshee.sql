CREATE TABLE IF NOT EXISTS "registration" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp,
	"competition_category" varchar(64),
	"name_of_inventor" varchar(64),
	"institution" varchar(128),
	"email" varchar(64),
	"phone_number" varchar(14),
	"whatsapp_number" varchar(14),
	"address" varchar(256),
	"title_of_invention" varchar(64),
	"stage_of_invention" varchar(64),
	"scope_of_invention" varchar(64),
	"description_of_invention" varchar(128),
	"abstract_of_invention" varchar(128),
	"design_of_invention" varchar(128)
);
