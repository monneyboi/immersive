<div>
	<slot />
</div>

<style>
	div {
		top: 0;
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		backface-visibility: hidden;
		perspective: 20px;
	}
</style>
