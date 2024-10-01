<script>
	import profile from '$lib/assets/profile.jpg';
</script>

<div class="noise">
	<div class="grid">
		<aside>
			<img alt="vector drawing of programmer" src={profile} />

			<ul>
				<li>Pretrained ~100B neurons</li>
				<li>Fine-tune quickly and easily</li>
			</ul>
		</aside>

		<main>
			<article>
				<h1>Johan</h1>

				<p>
					Johan is an exceptional IT-generalist whose diverse skills and passion make him a valuable
					collaborator in today's tech landscape. Based in the centre of Europe, Johan is a driven
					individual who embodies both technical prowess and a desire for continuous learning. His
					career has evolved from frontend development to advanced backend and systems programming,
					showcasing his adaptability and deep commitment to his craft.
				</p>

				<p>
					Johan's passion for technology started young, and he has since become a master of various
					programming languages, including JavaScript, Python, Rust, and more. His approach to
					solving complex IT problems reflects his self-driven, autodidactic nature—he learns fast,
					adapts well to changing technology landscapes, and continuously seeks improvement. Johan's
					journey is characterized by his dedication to leveraging data in meaningful ways,
					emphasizing efficient data processing, visualization, and human-centric interface design.
				</p>

				<p>
					Yet, Johan is far from being solely a technical expert. He balances his technical life
					with a love for outdoor activities like bouldering and functional training. Music, too,
					plays an integral role in his life—he drums, plays electronic instruments, and finds
					inspiration in the way music brings people together. This combination of technical
					mastery, creativity, and physical engagement paints a picture of a well-rounded
					individual, bringing energy and fresh perspectives to every project he takes on.
				</p>

				<p>
					Professionally, Johan is known for his work in DevOps and his role as a full-stack
					developer, where he has helped many streamline their workflows and optimize their
					applications, Johan has consistently delivered value through his dedication, curiosity,
					and innovative problem-solving abilities.
				</p>

				<p>
					What sets Johan apart is his strong belief in open-source solutions and the philosophy of
					learning through exploration. His experience with Linux and preference for working within
					open-source environments make him a natural fit for dynamic teams looking to push
					boundaries, particularly those that value transparency and collaborative problem-solving.
				</p>

				<p>
					Johan is now looking to broaden his horizons by engaging with new projects, where he can
					contribute not only his technical expertise but also his passion for creative solutions
					that connect technology with the human experience. His positive attitude, combined with a
					genuine interest in both people and technology, makes him a unique professional who is
					eager to make meaningful contributions to forward-thinking teams and organizations.
				</p>

				<p>
					Anyone seeking to collaborate with Johan will find not only a skilled programmer but also
					a teammate who is eager to share knowledge, face new challenges, and work toward
					innovative solutions that impact both technology and people positively. With his versatile
					skills and open-minded approach, Johan is well-prepared to contribute significantly to any
					ambitious project or professional collaboration.
				</p>
			</article>
		</main>
	</div>
</div>

<style>
	@keyframes move {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		20% {
			opacity: 1;
		}
		100% {
			transform: scale(3);
			opacity: 0;
		}
	}

	@keyframes noise {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			opacity: 0.33;
		}
		100% {
			transform: scale(3);
			opacity: 0;
		}
	}

	.noise {
		position: fixed;
		width: 100vw;
		height: 100vh;
		background:
			repeating-radial-gradient(#000 0 0.0001%, #fff 0 0.0002%) 50% 0/2500px 2500px,
			repeating-conic-gradient(#000 0 0.0001%, #fff 0 0.0002%) 50% 0/2500px 2500px;
		background-position: center;

		animation: noise linear both;
		animation-timeline: scroll(root block);
		animation-range: 50vh 500vh;
	}

	.grid {
		position: fixed;
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr 3fr;
		background-color: #fff;
		flex-direction: row;
		z-index: 1;
		font-size: 1.5rem;
		background: #60b96d;

		animation: move linear both;
		animation-timeline: scroll(root block);
		animation-range: 0 100vh;
	}

	img {
		border-radius: 50%;
		border: 1rem solid #f9fbf7;
	}

	aside {
		max-width: 16rem;
		justify-self: end;
		margin: 6rem;
		color: #fff;
		font-weight: bold;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	main {
		background: #f9fbf7;
	}

	article {
		max-width: 48rem;
		margin: 0 auto;
		padding: 8rem 0;
	}

	h1 {
		font-size: 4rem;
	}
</style>
