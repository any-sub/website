export async function load() {
	const url = `https://jsonplaceholder.typicode.com/todos/1`;
	const response = await fetch(url);
	return {
		json: JSON.stringify(await response.json(), null, 4)
	};
}
