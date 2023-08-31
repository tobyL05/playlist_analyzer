export default defineNuxtRouteMiddleware((to,from)=>{
	console.log("to" + to.toString());
	console.log("from" + from);
})