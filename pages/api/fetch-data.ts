export default async function fetchData(url: any, delay: number = 0) {
	const [res] = await Promise.all([
		new Promise((resolve, reject) => {
			resolve(url);
		}),
		// fetch(`${server}/${url}`, {
		// 	method: "GET",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 		Accept: "application/json",
		// 	},
		// }),
		new Promise((res) => setTimeout(res, Math.random() * delay)),
	]);
	return res;
}

module.exports = fetchData;
