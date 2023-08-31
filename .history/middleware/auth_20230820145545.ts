export default defineNuxtRouteMiddleware((to,from)=>{
	console.log("params " + to.params);
	console.log("q" + to.query);
	
	

})