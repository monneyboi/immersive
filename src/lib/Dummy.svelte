<div class="grid">
	<h1>Johan</h1>

	<article>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo nunc, imperdiet at
			sodales vel, pretium et turpis. Duis quam magna, ultricies sit amet euismod vitae, tincidunt
			sed nisi. Integer sed faucibus lorem. Maecenas varius felis ac nisi egestas, sed ullamcorper
			odio commodo. Suspendisse facilisis, sem sit amet laoreet volutpat, nibh metus laoreet nisl,
			eu euismod neque ipsum vitae orci. Ut eget neque rhoncus, auctor justo non, ultricies felis.
			Vestibulum ultrices leo non eros placerat rhoncus. Ut ac mi nisl. Nunc sodales mauris eget
			risus iaculis luctus ut vel metus. Fusce eu mi dapibus, molestie nisl id, finibus quam.
		</p>
		<p>
			Vivamus vel tortor neque. Donec dui tellus, congue a pretium sit amet, sodales eu leo. In
			elementum odio quis fermentum semper. Suspendisse eget diam nisl. Nullam dictum tristique
			tellus, semper lacinia metus efficitur nec. Mauris ullamcorper, leo ut eleifend ultrices, sem
			metus mollis turpis, et finibus neque libero vitae nisl. Duis iaculis vehicula magna sed
			vehicula. Sed a aliquet est, sit amet tincidunt lectus. Suspendisse potenti. Ut bibendum dolor
			in est aliquet cursus.
		</p>
		<p>
			In nec consectetur est, quis placerat mauris. Nulla viverra dolor ante, vitae congue nulla
			commodo vitae. Morbi facilisis felis non pretium condimentum. Aenean in arcu semper urna
			commodo congue at ac quam. Aliquam ut tempus tellus. Quisque sollicitudin enim ut accumsan
			euismod. Proin nec diam urna. Ut eget tortor laoreet, condimentum ex ullamcorper, rhoncus ex.
		</p>
		<p>
			Fusce placerat mauris ut aliquet sodales. Mauris sed dolor viverra, tincidunt erat id,
			pellentesque ante. Proin et sem et urna mattis pellentesque vitae in erat. Pellentesque
			egestas nisi et lectus euismod, eu maximus mauris faucibus. Integer eu purus fermentum,
			pretium dui vel, facilisis neque. Vestibulum sed aliquam orci, ut pulvinar nisl. Cras nibh ex,
			molestie in fringilla vel, luctus quis tortor. Vivamus volutpat pharetra tincidunt. Integer
			eleifend in mi sit amet scelerisque. Fusce vulputate, erat vitae ullamcorper elementum, nunc
			tellus hendrerit odio, in egestas diam nisl id lectus. Etiam massa orci, ornare eu ornare ac,
			placerat quis augue. In tincidunt varius ultrices. Sed aliquam cursus lectus, dictum suscipit
			arcu viverra vel.
		</p>
		<p>
			Nunc vestibulum placerat lectus. Suspendisse rhoncus ultricies scelerisque. Aliquam malesuada
			vulputate tortor, sed accumsan nibh facilisis non. Etiam et tristique magna. Proin quis
			laoreet risus. Proin felis tellus, mollis aliquam ipsum sit amet, dignissim interdum nisl.
			Fusce laoreet dolor turpis, vel semper dolor gravida vitae. Maecenas condimentum ultricies
			congue. Nullam aliquet magna ex, vel gravida nisl varius quis. Lorem ipsum dolor sit amet,
			consectetur adipiscing elit. Suspendisse finibus posuere cursus. Nunc quis porta purus.
			Integer diam nulla, fermentum sit amet hendrerit et, aliquam et lacus. Curabitur ut facilisis
			mi. Pellentesque luctus justo justo, ut posuere mauris dignissim sit amet.
		</p>
	</article>
</div>

<style>
	@keyframes move {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		100% {
			transform: scale(2);
			opacity: 0;
		}
	}

	.grid {
		position: fixed;
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: 20rem 1fr;
		background-color: #fff;
		flex-direction: row;
		z-index: 1;

		animation: move linear both;
		animation-timeline: scroll(root block);
		animation-range: 0 100vh;
	}

	article {
		max-width: 80rem;
		margin: 0 auto;
	}
</style>
