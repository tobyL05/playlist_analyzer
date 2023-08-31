<script setup lang="ts">
defineProps({
	liveness: String,
})
</script>

<template>
	<div class="py-2">
		<h1>Liveness:</h1>
		<progress class="progress" v-bind:value="instrumentalness" max="1"></progress>
	</div>
</template>