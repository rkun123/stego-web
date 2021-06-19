export type BaseUser = {
	username: string,
	email: string,
	avatar_url: string,
	date_of_birth: Date,
}

export type User = {
	id: string,
	username: string,
	email: string,
	avatar_url: string,
	date_of_birth: Date,
	created_at: Date
	updated_at: Date
}

export type BasePost = {
	content: string,
	reply_to_id: string,
	writing_time: Date,
	lat?: number,
	lng?: number,
	elevation?: number,
	velocity?: number,
	direction?: number,
	weather?: string,
	gyro_x?: number,
	gyro_y?: number,
	gyro_z?: number,
}

export type Post = {
	id: string,
	content: string,
	content_length: number,
	user: User,
	reply_to?: Post,
	writing_time: number,
	lat?: number,
	lng?: number,
	elevation?: number,
	velocity?: number,
	direction?: number,
	weather?: string,
	gyro_x?: number,
	gyro_y?: number,
	gyro_z?: number,
	seen_users: User[],
	favorited_users: User[],
}