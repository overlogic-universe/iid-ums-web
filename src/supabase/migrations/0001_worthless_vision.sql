ALTER TABLE "registration_innovation_talk" ALTER COLUMN "organization" SET DATA TYPE varchar(64);--> statement-breakpoint
ALTER TABLE "registration_innovation_talk" ADD COLUMN "faculty" varchar(128) NOT NULL;--> statement-breakpoint
ALTER TABLE "registration_innovation_talk" ADD COLUMN "payment" varchar(128) NOT NULL;