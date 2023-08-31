<script setup lang="ts">
import { ref } from "vue";

const { isMobile } = useDevice();

const router = useRouter();
const route = useRoute();
const link = ref("");
const analyzing = ref(false);

definePageMeta({
	middleware:[
		'auth',
	]
})

async function analyze() {
	console.log("analyze clicked");
	const login = await useFetch('/api/auth');
	window.location.href = login.data.value as string;
}

onMounted(()=>{
	watch(route,()=>{
		console.log(route.query);
	})
})

</script>

<template>
	<div class="my-20 w-3/4 lg:w-1/2 mx-auto rounded-xl bg-base-200">
		<div v-if="$device.isMobile" class="p-4">
			<h1 class="text-4xl">
				Analyze your
				<span class="text-primary font-bold">Spotify</span> playlist!
			</h1>
			<div>
				<input
					class="input input-bordered h-8 py-4 mt-3"
					placeholder="Enter playlist link:"
					v-model="link"
				/>
				<div class="flex justify-evenly">
					<button
						class="btn btn-primary scale-75"
						@click="
							() => {
								analyzing = true;
								analyze();
							}
						"
					>
						Analyze
					</button>
				</div>
			</div>
		</div>
		<div v-else class="mx-auto p-4">
			<h1 class="mb-5 text-3xl">
				Analyze your
				<span class="text-primary font-bold">Spotify</span> playlist!
			</h1>
			<div class="flex w-full justify-between">
				<input
					class="input rounded-md w-3/4"
					placeholder="Enter playlist link:"
					v-model="link"
				/>
				<button
					class="btn btn-primary"
					@click="
						() => {
							analyzing = true;
							analyze();
						}
					"
				>
					Analyze
				</button>
			</div>
			<div class="divider">OR</div>
			<div class="flex justify-center">
				<button
					class="btn btn-wide bg-primary text-white hover:bg-primary-focus"
					@click="()=>{
						analyzing = true;
						analyze();
					}"
				>
					Login to Spotify
				</button>
			</div>
		</div>
	</div>

	<!-- 
		most/least (audio feature) track : number
		avg audio features
		rank track/artist popularity
		most frequenct tracks/genres
	-->

	<!-- <div v-if="analyzing" class="my-20">
		<Suspense>
			<template #fallback> </template>
		</Suspense>
	</div> -->
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
