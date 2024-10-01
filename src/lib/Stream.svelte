<script lang="ts">
	import prand from 'pure-rand';
	import Block from './Block.svelte';

	// Chosen by fair diceroll
	const seed = 4;
	const rng = prand.xoroshiro128plus(seed);

	export let xs;
	export let ys;
	export let zs;

	export let size = 100;
	export let gap = 100;

	const s = size + gap;

	const txs = Array.from({ length: xs }, (_, x) => x * s - xs * s * 0.5 + s * 0.5);
	const tys = Array.from({ length: ys }, (_, y) => y * s - ys * s * 0.5 + s * 0.5);
	const tzs = Array.from({ length: zs }, (_, z) => z * s - zs * s * 0.5 + s * 0.5);
</script>

{#each txs as tx}
	{#each tys as ty}
		{#each tzs as _}
			<Block {size} {tx} {ty} start={prand.unsafeUniformIntDistribution(-2000, 0, rng)} />
		{/each}
	{/each}
{/each}
