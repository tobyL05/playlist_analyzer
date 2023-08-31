import queryString from "query-string";
import { storeAPIdetails } from "../../store/stores";
import { storeToRefs } from 'pinia';

export default defineEventHandler(async () => {

	const { state } = storeToRefs(storeAPIdetails());

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
	const generatedState = makeState(16);
	state.value = generatedState; 
	const redirect_uri = "http://localhost:3000/callback/";
	const scope = "playlist-read-collaborative playlist-read-private";
	let auth_url = "https://accounts.spotify.com/authorize?";
	auth_url = auth_url +
		queryString.stringify({
			response_type: "code",
			client_id: client_id,
			scope: scope,
			redirect_uri: redirect_uri,
			state: generatedState,
		});

	return auth_url;

});
