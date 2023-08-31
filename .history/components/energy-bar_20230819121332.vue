<script setup>
defineProps({
	energy: String,
})
</script>

<template>

		<div class="py-2">
			<h1>Energy:</h1>
			<progress class="progress" v-bind:value="energy" max="1"></progress>
		</div>
</template>