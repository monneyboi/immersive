<div>
	<slot />
</div>

<style>
	div {
		backface-visibility: hidden;
		perspective: 1000px;
		perspective-origin: 20% -50%;
	}
</style>
