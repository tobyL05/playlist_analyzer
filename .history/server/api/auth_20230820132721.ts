export default defineEventHandler(() => {
	function makeState(length:number) {
		let result = "";
		const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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
	const response_type = "code";
	const redirect_uri = "localhost:3000"
	const scope = "playlist-read-collaborative playlist-read-private";
	auth_url = "https://accounts.spotify.com/authorize?";

});
