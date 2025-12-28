module.exports = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/index.html',
				destination: '/',
				permanent: true,
			},
			{
				source: '/products.html',
				destination: '/products',
				permanent: true,
			},
			{
				source: '/history.html',
				destination: '/history',
				permanent: true,
			},
			{
				source: '/team.html',
				destination: '/team',
				permanent: true,
			},
			{
				source: '/placement.html',
				destination: '/placements',
				permanent: true,
			},
			{
				source: '/reports.html',
				destination: '/reports',
				permanent: true,
			},
			{
				source: '/contact.html',
				destination: '/contact',
				permanent: true,
			},
		]
	},
}
