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
	<div class="mx-auto w-5/6">
		<div class="">
			<h1>Acousticness:</h1>
			<progress class="progress w-full" value="0" max="100"></progress>
		</div>

		<div>
			<h1>Danceability:</h1>
			<progress class="progress w-full" value="10" max="100"></progress>
		</div>

		<div>
			<h1>Energy:</h1>
			<progress class="progress w-full" value="40" max="100"></progress>
		</div>

		<div>
			<h1>Speechiness:</h1>
			<progress class="progress w-full" value="70" max="100"></progress>
		</div>

		<div>
			<h1>Instrumentalness:</h1>
			<progress class="progress w-full" value="100" max="100"></progress>
		</div>
	</div>
</template>