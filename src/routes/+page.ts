export async function load() {
	const url = `http://localhost:8080/docs/swagger.json`;
	const response = await fetch(url);
	return {
		json: JSON.stringify(await response.json(), null, 4)
	};
}
