<script lang="ts">
	import Block from './Block.svelte';

	export let xs = 10;
	export let ys = 10;
	export let zs = 10;

	const size = 100;
	const gap = 100;

	const s = size + gap;

	const txs = Array.from({ length: xs }, (_, x) => x * s - xs * s * 0.5 + s * 0.5);
	const tys = Array.from({ length: ys }, (_, y) => y * s - ys * s * 0.5 + s * 0.5);
	const tzs = Array.from({ length: zs }, (_, z) => z * s - zs * s * 0.5 + s * 0.5);
</script>

<div>
	{#each txs as tx}
		{#each tys as ty}
			{#each tzs as tz}
				<Block {size} {tx} {ty} {tz} />
			{/each}
		{/each}
	{/each}
</div>

<style>
	div {
		transform-style: preserve-3d;
	}
</style>
