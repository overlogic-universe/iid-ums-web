ALTER TABLE "registration" ALTER COLUMN "supervisor_name" SET DATA TYPE varchar(128);--> statement-breakpoint
ALTER TABLE "registration" ALTER COLUMN "university_origin" SET DATA TYPE varchar(128);--> statement-breakpoint
ALTER TABLE "registration" ALTER COLUMN "competition_category" SET DATA TYPE varchar(256);--> statement-breakpoint
ALTER TABLE "registration" ALTER COLUMN "form_of_invention" SET DATA TYPE varchar(256);--> statement-breakpoint
ALTER TABLE "registration" ALTER COLUMN "title_of_innovation" SET DATA TYPE varchar(256);--> statement-breakpoint
ALTER TABLE "registration" ALTER COLUMN "patent_number" SET DATA TYPE varchar(128);--> statement-breakpoint
ALTER TABLE "registration" ALTER COLUMN "scan_student_id" SET DATA TYPE varchar(256);--> statement-breakpoint
ALTER TABLE "registration" ALTER COLUMN "competition_batch" SET DEFAULT '1';