CREATE TABLE `categories` (
	`categoryID` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `tasks` (
	`taskID` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userID` integer,
	`title` text NOT NULL,
	`description` text,
	`dueDate` integer,
	`statusID` integer,
	`dateCreated` integer DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (`userID`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`statusID`) REFERENCES `taskStatus`(`statusID`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `taskStatus` (
	`statusID` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`statusName` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`username` text,
	`email` text,
	`passwordHah` text,
	`dateCreated` integer DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_username_unique` ON `users` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);