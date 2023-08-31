export default defineNuxtRouteMiddleware((to,from)=>{
	console.log(to.params);
	console.dir("q" + to.query);
	
	

})