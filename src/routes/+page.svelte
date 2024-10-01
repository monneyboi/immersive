<script lang="ts">
	import Perspective from '$lib/Perspective.svelte';
	import Block from '$lib/Block.svelte';
	import Scene from '$lib/Scene.svelte';
</script>

<Perspective>
	<Scene>
		<Block tx={10} />
		<Block tx={-10} />
	</Scene>
</Perspective>
