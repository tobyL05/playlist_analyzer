<script setup lang="ts">
defineProps({
	danceability: String,
})
</script>

<template>

		<div class="py-2">
			<h1>Danceability:</h1>
			<progress class="progress" v-bind:value="danceability" max="1"></progress>
		</div>
</template>