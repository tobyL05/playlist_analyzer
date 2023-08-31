import { defineStore } from "pinia";

export const storeAPIdetails = defineStore('api_details',()=>{
	const code = ref('');
	const state = ref('');

	// function setCode(new_code: string){
	// 	code.value = new_code;
	// }

	// function setState(new_state:string){
	// 	state.value = new_state;
	// }

	// function checkState(currState:string){
	// 	if(state.value == currState){
	// 		return true;
	// 	}else{
	// 		return false;
	// 	}
	// }


})
