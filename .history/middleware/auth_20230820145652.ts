export default defineNuxtRouteMiddleware((to,from)=>{
	console.log(to.params);
	console.dir(to.query);
	
	

})