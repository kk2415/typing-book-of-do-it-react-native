export const getHostUrl = (path: string) => {
	const protocol = 'http'
	const ip = '10.0.2.2'
	const port = 8080

	return `${protocol}://${ip}:${port}${path}`
}