CREATE TABLE IF NOT EXISTS "registration" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"email" varchar(64) NOT NULL,
	"leader_name" varchar(64) NOT NULL,
	"members_name" varchar(512) NOT NULL,
	"supervisor_name" varchar(128) NOT NULL,
	"university_origin" varchar(256) NOT NULL,
	"whatsapp_number" varchar(14) NOT NULL,
	"competition_category" varchar(256) NOT NULL,
	"form_of_invention" varchar(256) NOT NULL,
	"title_of_innovation" varchar(256) NOT NULL,
	"title_of_product" varchar(256) NOT NULL,
	"patent_number" varchar(20),
	"scan_student_id" varchar(256) NOT NULL,
	"abstract" varchar(256) NOT NULL,
	"product_description" varchar(256) NOT NULL,
	"competition_batch" numeric DEFAULT '1' NOT NULL
);
