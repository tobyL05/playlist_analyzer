<script setup lang="ts">
defineProps({
	Instrumentalness: String,
})
</script>

<template>

		<div class="py-2">
			<h1>Instrumentalness:</h1>
			<progress class="progress" v-bind:value="instrumentalness" max="1"></progress>
		</div>
</template>