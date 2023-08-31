export default defineNuxtRouteMiddleware((to,from)=>{
	console.log("params " + to.params);
	console.dir("q" + to.query);
	
	

})