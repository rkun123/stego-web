export type BaseUser = {
	username: string,
	email: string,
	password: string,
	avatar_url: string,
	date_of_birth: Date,
}

export type User = {
	id: string,
	username: string,
	email: string,
	password_hash: string,
	avatar_url: string,
	date_of_birth: Date,
	created_at: Date
	updated_at: Date
}

export type BaseImage = {
	image_url: string,
	post_id: string
}

export type Image = {
	image_url: string,
	post_id: string,
	post: Post,
	created_at: Date,
	updated_at: Date
}

export type BasePost = {
	content: string,
	reply_to_id: string,
	temperature : number,
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
	images: Image[]
}

export type Post = {
	id: string,
	content: string,
	content_length: number,
	user: User,
	reply_to?: Post,
	writing_time: number,
	temperature : number,
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
	images: Image[]
}

export const sortAttrOptions = [ "writing_time", "birthday", "seen", "velocity", "elevation" ] as const
type sortAttrOptionsTuple = typeof sortAttrOptions

export type Query = {
	sort: {
    attr: sortAttrOptionsTuple[number],
    order: "asc" | "desc"
  },
  filter: {
    temperture?: {
      max?: number,
      min?: number
    },
    velocity?: {
      max?: number,
      min?: number
    },
    direction?: "up" | "down",
    elevation?: {
      max?: number,
      min?: number
    }
  }
}