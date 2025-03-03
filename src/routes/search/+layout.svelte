<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
import { Icon, MagnifyingGlass, XMark } from 'svelte-hero-icons';

	let { data, children } = $props();

	let search: string = $state(data.search);

	let showClearButton = $derived(!(search.length === 0));

	const clearSearch = () => {
		search = '';
	};

	function handleSearch() {
		const searchInput = search.trim();
		if (search) {
			const encoded = encodeURIComponent(searchInput);
			goto(`/search?search=${encoded}`);
		}
	}
	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();
			handleSearch();
		}
	}
	function handleButtonClick() {
		handleSearch();
	}
</script>

<div
	class="max-w-7xl mx-auto mt-8 mb-2 flex items-center justify-start gap-4 px-4
	flex-col md:flex-row"
>
	<img src="upsetgal-logo.webp" alt="logo" class="h-16 -mt-2" />
	<div class="rounded-full w-full max-w-3xl flex gap-2 justify-between items-center
	shadow-sm shadow-primary/20 border border-secondary duration-200 transition hover:border-amber-500 focus-within:border-amber-500
	bg-secondary focus-within:bg-pink-100 hover:bg-pink-100 dark:focus-within:bg-amber-800 dark:hover:bg-amber-800
		"
	>
		<input
			class="flex-1 outline-none text-foreground bg-transparent py-2 px-4"
			bind:value={search}
			onkeydown={handleKeyDown}
		/>
		{#if showClearButton}
			<Button variant="ghost" size="icon" onclick={clearSearch}>
				<Icon src={XMark} solid size="16" />
			</Button>
		{/if}
		<button class="rounded-full h-full block p-3 bg-transparent
		hover:bg-pink-500 transition duration-200
		text-muted-foreground hover:text-foreground"
		onclick={handleButtonClick}
		>
			<Icon src={MagnifyingGlass} solid size="20" />
		</button>
	</div>
</div>
<hr/>
{@render children()}

