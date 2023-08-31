export default defineNuxtRouteMiddleware((to,from)=>{
	console.log(to.fullPath);
	// console.log("from" + from.fullPath);

})