import queryString from "query-string";

export default defineEventHandler(async () => {
	function makeState(length: number) {
		let result = "";
		const characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		const charactersLength = characters.length;
		let counter = 0;
		while (counter < length) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
			counter += 1;
		}
		return result;
	}

	const client_id = process.env.client_id;
	const state = makeState(16);
	const redirect_uri = "localhost:3000";
	const scope = "playlist-read-collaborative playlist-read-private";
	let auth_url = "https://accounts.spotify.com/authorize?";
	auth_url = auth_url +
		queryString.stringify({
			response_type: "code",
			client_id: client_id,
			scope: scope,
			redirect_uri: redirect_uri,
			state: state,
		});

	const req = await fetch(auth_url);
	const resp = req.json();
	console.log(resp)
	
});
