<script setup>
const { isMobile } = useDevice();
</script>

<template>
	<div class="my-20 w-1/4 mx-auto rounded-xl bg-base-200">
		<div v-if="$device.isMobile" class="p-4">
			<h1>Analyze your <span class="text-primary font-bold">Spotify</span> playlist!</h1>
			<div>
				<input class="input input-bordered h-8 py-4 mt-3" placeholder="Enter playlist link:"/>
				<div class="flex justify-evenly"><button class="btn btn-primary scale-75">Analyze</button></div>
			</div>
		</div>
		<div v-else class="w-3/4 mx-auto p-4">
			<h1 class="mb-2">Analyze your <span class="text-primary font-bold">Spotify</span> playlist!</h1>
			<input class="input input-bordered mx-auto w-1/2" placeholder="Enter playlist link:">
			<button class="btn btn-primary mx-3">Analyze</button>
		</div>
	</div>
</template>