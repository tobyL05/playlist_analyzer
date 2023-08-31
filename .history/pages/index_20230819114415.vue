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

	<div class="mx-auto my-20 w-1/2 bg-accent">
		<div class="p-8">
			<div class="stats shadow">
  
			<div class="stat">
    			<div class="stat-figure text-primary">
    			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    			</div>
    			<div class="stat-title">Total Likes</div>
    			<div class="stat-value text-primary">25.6K</div>
    			<div class="stat-desc">21% more than last month</div>
			</div>
  
  			<div class="stat">
    			<div class="stat-figure text-secondary">
      			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    			</div>
    			<div class="stat-title">Page Views</div>
    			<div class="stat-value text-secondary">2.6M</div>
    			<div class="stat-desc">21% more than last month</div>
  			</div>
  
  			<div class="stat">
    			<div class="stat-figure text-secondary">
      			<div class="avatar online">
        			<div class="w-16 rounded-full">
          			<img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        			</div>
      			</div>
    			</div>
    			<div class="stat-value">86%</div>
    			<div class="stat-title">Tasks done</div>
    			<div class="stat-desc text-secondary">31 tasks remaining</div>
  			</div>
  
			</div>
		</div>"
	</div>

	<!-- 
		most/least (audio feature) track : number
		avg audio features
		rank track/artist popularity
		most frequenct tracks/genres
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