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
	<div class="mx-auto w-5/6 lg:w-3/4 py-4">
		<div class="py-2">
			<h1>Acousticness:</h1>
			<progress class="progress" v-bind:value="acousticness" max="1"></progress>
		</div>

		<div class="py-2">
			<h1>Danceability:</h1>
			<progress class="progress" v-bind:value="danceability" max="1"></progress>
		</div>

		<div class="py-2">
			<h1>Energy:</h1>
			<progress class="progress" v-bind:value="energy" max="1"></progress>
		</div>

		<div class="py-2">
			<h1>Instrumentalness:</h1>
			<progress class="progress" v-bind:value="instrumentalness" max="1"></progress>
		</div>

		<div class="py-2">
			<h1>Liveness:</h1>
			<progress class="progress" v-bind:value="instrumentalness" max="1"></progress>
		</div>

		<div class="py-2">
			<h1>Speechiness:</h1>
			<progress class="progress" v-bind:value="speechiness" max="1"></progress>
		</div>


		<div class="py-2">
			<h1>Valence:</h1>
			<progress class="progress" v-bind:value="valence" max="1"></progress>
		</div>
	</div>
</template>