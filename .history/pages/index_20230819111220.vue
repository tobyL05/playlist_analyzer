<script setup>
import { ref } from 'vue';

const { isMobile } = useDevice();

const link = ref('');
const analyzing = ref(false);

async function analyze(){

}

</script>

<template>
	<div class="my-20 w-3/4 lg:w-1/2 mx-auto rounded-xl bg-base-200">
		<div v-if="$device.isMobile" class="p-4">
			<h1>Analyze your <span class="text-primary font-bold">Spotify</span> playlist!</h1>
			<div>
				<input class="input input-bordered h-8 py-4 mt-3" placeholder="Enter playlist link:" v-model="link"/>
				<div class="flex justify-evenly"><button class="btn btn-primary scale-75" @click="()=>{anaylzing = true; analyze()}">Analyze</button></div>
			</div>
		</div>
		<div v-else class="w-3/4 mx-auto p-4">
			<h1 class="mb-2">Analyze your <span class="text-primary font-bold">Spotify</span> playlist!</h1>
			<div class="flex w-full justify-between">
				<input class="input rounded-md w-3/4" placeholder="Enter playlist link:" v-model="link">
				<button class="btn btn-primary" @click="()=>{analyzing = true; analyze()}">Analyze</button>
			</div>
		</div>
		<AudioFeatures /> <!--indeterminate -->
	</div>

	<div class="mx-auto my-20 w-1/2">
		<p>designs</p>	
	</div>

	<!-- 
		most/least 
	-->

	<div v-if="analyzing" class="my-20"> <!-- suspense -->
		<Suspense>

			<template #fallback>

			</template>
		</Suspense>
	</div>
</template>

<!-- 

api returns 

 [maxFeatures, maxFeatureTracks, minFeatures, minFeatureTracks, avgFeatures]

todo:
	calculate track/artist popularity
	most frequent tracks
	most frequent genres (from artists)
	
	dont forget album covers/artist pics

	design infographics	

 -->