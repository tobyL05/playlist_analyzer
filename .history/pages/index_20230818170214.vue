<script setup>
const { isMobile } = useDevice();
</script>

<template>
	<div class="my-20 w-5/6 mx-auto bg-base-200">
		<div class="p-4">
			<h1>Analyze your <span class="text-primary font-bold">Spotify</span> playlist!</h1>
			<div v-if="$device.isMobile">
				<input class="input input-bordered h-8 py-4 mt-3" placeholder="Enter playlist link:"/>
				<div class="flex justify-evenly"><button class="btn btn-primary scale-75">Analyze</button></div>
			</div>

			<div v-else class="join">
				<div>
					<div>
						<input class="input input-bordered rounded-none join-item" placeholder="Enter playlist link:"/>
						<button class="btn btn-primary join-item">Search</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>