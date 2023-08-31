<script setup lang="ts">
defineProps({
	valence: String,
})
</script>

<template>

		<div class="py-2">
			<h1>Valence:</h1>
			<progress class="progress" v-bind:value="valence" max="1"></progress>
		</div>
</template>