import { pgTable, text, integer, uuid, timestamp } from 'drizzle-orm/pg-core';

export const game_download_list = pgTable('game_download_list', {
	id: uuid('id').primaryKey(),
	download_url_seed: text('download_url_seed').notNull(),
	download_provider: text('download_provider').notNull(),
	file_size: integer('file_size').notNull(),
	created_at: timestamp('created_at').notNull().defaultNow(),
	updated_at: timestamp('updated_at').notNull().defaultNow(),
})