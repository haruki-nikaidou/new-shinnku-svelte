<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Icon, MagnifyingGlass } from 'svelte-hero-icons';
	import { goto } from '$app/navigation';

	let input_content = $state('');

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			const search = input_content.trim();
			if (search) {
				const encoded = encodeURIComponent(search);
				goto(`/search?search=${encoded}`);
			}
		}
	};
</script>
<main class="flex gap-4 flex-col items-center pt-24 px-4">
	<img src="upsetgal-logo.webp" alt="logo" class="w-4/5 sm:w-auto sm:h-36 md:h-48" />
	<div class="rounded-full w-full max-w-3xl py-2 px-3 flex gap-2 justify-between items-center
	shadow-md shadow-primary/10 border border-secondary
	 duration-200 transition hover:border-red-500 focus-within:border-red-500
	bg-secondary hover:bg-gradient-to-r focus-within:bg-gradient-to-r
	 		 from-amber-300 to-pink-400
			 dark:from-yellow-800 dark:to-pink-700
		"
	>
		<Icon src={MagnifyingGlass} solid size="20" class="text-primary" />
		<input
			class="flex-1 outline-none text-foreground bg-transparent"
			onkeydown={handleKeyDown}
			bind:value={input_content}
		/>
	</div>
	<div class="flex flex-row gap-4 items-center mt-8">
		<Button variant="secondary" href="/list">
			浏览全部游戏
		</Button>
		<Button variant="secondary" href="/random">
			试试手气
		</Button>
	</div>
</main>