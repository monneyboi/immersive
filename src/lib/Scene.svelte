<div>
	<slot />
</div>

<style>
	div {
		transform-style: preserve-3d;
		animation: rotate 10s linear infinite;
	}

	@keyframes rotate {
		from {
			transform: rotateY(40deg) rotateX(-30deg) translateZ(-40rem);
		}
		to {
			transform: rotateY(10deg) rotateX(-10deg) translateZ(80rem);
		}
	}
</style>
