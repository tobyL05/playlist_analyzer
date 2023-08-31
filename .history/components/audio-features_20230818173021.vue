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
	<div class="mx-auto w-3/4">
		<div class="">
			<h1>Acousticness:</h1>
			<progress class="progress w-56" value="0" max="100"></progress>
		</div>

		<div>
			<progress class="progress w-56" value="10" max="100"></progress>
		</div>

		<div>
			<progress class="progress w-56" value="40" max="100"></progress>
		</div>

		<div>
			<progress class="progress w-56" value="70" max="100"></progress>
		</div>

		<div>
			<progress class="progress w-56" value="100" max="100"></progress>
		</div>
	</div>
</template>