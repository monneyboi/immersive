<script lang="ts">
	export let size: number = 10;
	export let tx: number = 0;
	export let ty: number = 0;
	export let tz: number = 0;
</script>

<div class="box" style={`--size:${size}rem;--tx:${tx}rem;--ty:${ty}rem;--tz:${tz}rem;`}>
	<div class="face top"></div>
	<div class="face bottom"></div>
	<div class="face back"></div>
	<div class="face front"></div>
	<div class="face left"></div>
	<div class="face right"></div>
</div>

<style>
	.box {
		width: var(--size);
		aspect-ratio: 1;

		position: absolute;
		top: calc(var(--size) * -0.5);
		left: calc(var(--size) * -0.5);
		transform-style: preserve-3d;
		transform-origin: calc(var(--size) * 0.5) bottom calc(var(--size) * -0.5);

		transform: translate3d(var(--tx), var(--ty), var(--tz));
	}

	.face {
		position: absolute;
		width: var(--size);
		aspect-ratio: 1;

		background-color: #fff;
		background-color: hsl(99, 0%, var(--lightness));

		transform-style: preserve-3d;
	}

	.face.front {
		--lightness: 66%;
	}

	.face.bottom {
		top: 100%;
		transform-origin: top;
		transform: rotateX(-90deg);
		--lightness: 74%;
	}

	.face.top {
		bottom: 100%;
		transform-origin: bottom;
		transform: rotateX(90deg);
		--lightness: 74%;
	}

	.face.back {
		bottom: 200%;
		transform-origin: center calc(var(--size) * 1.5) calc(var(--size) * -0.5);
		transform: rotateX(180deg);
		--lightness: 78%;
	}

	.face.right {
		left: 100%;
		transform-origin: left;
		transform: rotateY(90deg);
		--lightness: 70%;
	}

	.face.left {
		right: 100%;
		transform-origin: right;
		transform: rotateY(-90deg);
		--lightness: 70%;
	}
</style>
