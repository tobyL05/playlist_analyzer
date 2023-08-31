<script setup lang="ts">

defineProps({
	acousticness: String,
	danceability: String,
	energy: String,
	speechiness: String,
	instrumentalness: String,
	liveness: String,
	valence: String,
})

</script>

<template>
	<div class="mx-auto w-5/6 py-4">
		<div class="py-2">
			<h1>Acousticness:</h1>
			<progress class="progress w-full" v-bind:value="acousticness" max="1"></progress>
		</div>

		<div class="py-2">
			<h1>Danceability:</h1>
			<progress class="progress w-full" v-bind:value="danceability" max="100"></progress>
		</div>

		<div class="py-2">
			<h1>Energy:</h1>
			<progress class="progress w-full" v-bind:value="energy" max="100"></progress>
		</div>

		<div class="py-2">
			<h1>Speechiness:</h1>
			<progress class="progress w-full" v-bind:value="speechiness" max="100"></progress>
		</div>

		<div class="py-2">
			<h1>Instrumentalness:</h1>
			<progress class="progress w-full" v-bind:value="instrumentalness" max="100"></progress>
		</div>

		<div class="py-2">
			<h1>Valence:</h1>
			<progress class="progress w-full" v-bind:value="valence" max="100"></progress>
		</div>
	</div>
</template>