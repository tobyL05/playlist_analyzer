<script setup lang="ts">
defineProps({
	speechiness: String,
})
</script>

<template>

		<div class="py-2">
			<h1>Speechiness:</h1>
			<progress class="progress" v-bind:value="speechiness" max="1"></progress>
		</div>
</template>
