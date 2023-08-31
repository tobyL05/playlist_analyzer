import { defineStore } from "pinia";

export const storeAPIdetails = defineStore('api_details',()=>{
	const code = ref('');
	const state = ref('');

	function setCode(new_code: string){
		code.value = new_code;
	}
})
