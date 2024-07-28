CREATE TABLE IF NOT EXISTS "registration" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(64),
	"leader_name" varchar(64),
	"members_name" varchar(256),
	"supervisor_name" varchar(64),
	"university_origin" varchar(64),
	"whatsapp_number" varchar(14),
	"competition_category" varchar(64),
	"form_of_invention" varchar(64),
	"title_of_innovation" varchar(64),
	"patent_number" varchar(64),
	"scan_student_id" varchar(64),
	"abstract" varchar,
	"product_description" varchar
);
