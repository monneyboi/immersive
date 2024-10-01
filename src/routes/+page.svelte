<script lang="ts">
	import Perspective from '$lib/Perspective.svelte';
	import Scene from '$lib/Scene.svelte';
	import Stream from '$lib/Stream.svelte';
</script>

<Perspective>
	<Scene>
		<Stream xs={6} ys={6} />
	</Scene>
</Perspective>
