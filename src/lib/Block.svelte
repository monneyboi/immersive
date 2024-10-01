<script lang="ts">
	export let size: number = 100;
	export let tx: number = 0;
	export let ty: number = 0;
	export let start: number;
</script>

<div class="block" style={`--size:${size}px;--tx:${tx}px;--ty:${ty}px;--start:${start}px`}>
	<div class="face top"></div>
	<div class="face bottom"></div>
	<div class="face back"></div>
	<div class="face front"></div>
	<div class="face left"></div>
	<div class="face right"></div>
</div>

<style>
	:root {
		--factor: 1.3;
	}

	@keyframes move {
		0% {
			transform: translate3d(var(--tx), var(--ty), var(--start));
		}
		100% {
			transform: translate3d(var(--tx), var(--ty), calc(var(--start) + 2000px));
		}
	}

	.block {
		width: var(--size);
		aspect-ratio: 1;

		position: absolute;
		top: calc(var(--size) * -0.5);
		left: calc(var(--size) * -0.5);
		transform-style: preserve-3d;
		transform-origin: calc(var(--size) * 0.5) bottom calc(var(--size) * -0.5);

		animation: move linear both;
		animation-timeline: scroll(root block);
	}

	.face {
		position: absolute;
		width: var(--size);
		aspect-ratio: 1;

		background-color: hsl(99, 0%, var(--lightness));
		box-shadow: 0 0 2rem 0 rgba(255, 255, 255, 0.75);

		transform-style: preserve-3d;
	}

	.face.front {
		--lightness: calc(66% * var(--factor));
	}

	.face.bottom {
		top: 100%;
		transform-origin: top;
		transform: rotateX(-90deg);
		--lightness: calc(74% * var(--factor));
	}

	.face.top {
		bottom: 100%;
		transform-origin: bottom;
		transform: rotateX(90deg);
		--lightness: calc(74% * var(--factor));
	}

	.face.back {
		bottom: 200%;
		transform-origin: center calc(var(--size) * 1.5) calc(var(--size) * -0.5);
		transform: rotateX(180deg);
		--lightness: calc(78% * var(--factor));
	}

	.face.right {
		left: 100%;
		transform-origin: left;
		transform: rotateY(90deg);
		--lightness: calc(70% * var(--factor));
	}

	.face.left {
		right: 100%;
		transform-origin: right;
		transform: rotateY(-90deg);
		--lightness: calc(70% * var(--factor));
	}
</style>
