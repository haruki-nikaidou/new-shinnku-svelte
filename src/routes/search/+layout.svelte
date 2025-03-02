<script lang="ts">
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
			window.location.href = `/search?search=${encoded}`;
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
	shadow-md shadow-zinc-200 border
	border-zinc-200 duration-200 transition hover:border-amber-500 focus-within:border-amber-500
	bg-zinc-50 focus-within:bg-pink-100 hover:bg-pink-100
		"
	>
		<input
			class="flex-1 outline-none text-zinc-800 bg-transparent py-2 px-4"
			bind:value={search}
			onkeydown={handleKeyDown}
		/>
		{#if showClearButton}
			<button class="rounded-full h-full block p-1 bg-transparent
				hover:bg-pink-500 transition duration-200
				text-zinc-600 hover:text-zinc-50"
				onclick={clearSearch}
				>
				<Icon src={XMark} solid size="16" />
			</button>
		{/if}
		<button class="rounded-full h-full block p-3 bg-transparent
		hover:bg-pink-500 transition duration-200
		text-zinc-600 hover:text-zinc-50"
		onclick={handleButtonClick}
		>
			<Icon src={MagnifyingGlass} solid size="20" />
		</button>
	</div>
</div>
<hr/>
{@render children()}

