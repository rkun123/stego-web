import { BasePost } from "~/schemas";

export default async function updateDetailInfo(post: BasePost) {
	const geo = await fetchGeography()
	console.debug('geography', geo)

	post = {
		...post,
		...geo,
		...cachedGyro
	}

	return post
}

async function fetchGeography () : Promise<{
	lat?: number,
	lng?: number,
	elevation?: number
}>{
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(({ coords }) => {
			const result = {
				lat: coords.latitude,
				lng: coords.longitude,
				elevation: coords.altitude ? coords.altitude : undefined
			}
			resolve(result)
		}, (e) => {
			resolve({})
		})
	})
}

let cachedGyro: {
	gyro_x: number,
	gyro_y: number,
	gyro_z: number
} | null = null

function startSubscribeGyro () {
	if(window.DeviceOrientationEvent) {

		//window.removeEventListener('deviceorientation', callback)
		window.addEventListener('deviceorientation', callback)

		function callback(e: DeviceOrientationEvent) {
			console.debug('gyro', cachedGyro)
			if(e.beta !== null && e.gamma !== null && e.alpha !== null) {
				cachedGyro = {
					gyro_x: e.beta,
					gyro_y: e.gamma,
					gyro_z: e.alpha
				}
			}
		}
	}
}

startSubscribeGyro()