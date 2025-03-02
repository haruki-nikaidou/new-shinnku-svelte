<script lang="ts">
	import { Icon, MagnifyingGlass } from 'svelte-hero-icons';

	let input_content = $state('');

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			const search = input_content.trim();
			if (search) {
				const encoded = encodeURIComponent(search);
				window.location.href = `/search?search=${encoded}`;
			}
		}
	};
</script>
<main class="flex gap-4 flex-col items-center pt-24 px-4">
	<img src="upsetgal-logo.webp" alt="logo" class="w-4/5 sm:w-auto sm:h-36 md:h-48" />
	<div class="rounded-full w-full max-w-3xl py-2 px-3 flex gap-2 justify-between items-center
	shadow-md shadow-zinc-200 border
	border-zinc-200 duration-200 transition hover:border-red-500 focus-within:border-red-500
	bg-zinc-50 hover:bg-gradient-to-r focus-within:bg-gradient-to-r
	 		 from-amber-300 to-pink-400
		"
	>
		<Icon src={MagnifyingGlass} solid size="20" class="text-zinc-400" />
		<input
			class="flex-1 outline-none text-zinc-800 bg-transparent"
			onkeydown={handleKeyDown}
			bind:value={input_content}
		/>
	</div>
	<div class="flex flex-row gap-4 items-center mt-8">
		<a href="/list" class="block px-4 py-2 rounded-full bg-zinc-200 text-sm text-zinc-700">
			浏览全部游戏
		</a>
		<a href="/random" class="block px-4 py-2 rounded-full bg-zinc-200 text-sm text-zinc-700">
			试试手气
		</a>
	</div>
</main>