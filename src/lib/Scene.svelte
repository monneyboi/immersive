<div>
	<slot />
</div>

<style>
	div {
		transform-style: preserve-3d;
		animation: rotate 8s linear infinite;
	}

	@keyframes rotate {
		from {
			transform: rotateY(20deg) rotateX(-20deg) translateZ(0);
		}
		to {
			transform: rotateY(10deg) rotateX(-10deg) translateZ(100rem);
		}
	}
</style>
