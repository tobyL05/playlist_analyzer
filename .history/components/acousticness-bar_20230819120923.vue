<script setup lang="ts">
defineProps({
	acousticness: String,
})
</script>

<template>

		<div class="py-2">
			<h1>Acousticness:</h1>
			<progress class="progress" v-bind:value="acousticness" max="1"></progress>
		</div>
</template>