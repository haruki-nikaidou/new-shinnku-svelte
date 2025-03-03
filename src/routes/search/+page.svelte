<script lang="ts">
	import { goto } from '$app/navigation';
	let { data } = $props();
	import GameCard from '$lib/components/game_card/game_card.svelte';
	import * as Pagination from '$lib/components/ui/pagination/index.js';

	const page_count = $derived(data.total_pages);
	const { current_page } = data;

	let page = $state(current_page);
	$effect(() => {
		const url = new URL(window.location.href);
		url.searchParams.set('page', page.toString());
		goto(url, { replaceState: true });
	});
</script>

<main class="mx-auto my-8 max-w-7xl px-4">
	<div class="flex max-w-xl flex-col gap-4">
		{#each data.games as game}
			<GameCard {...game} />
		{/each}
	</div>
	<Pagination.Root 
        count={page_count}
        perPage={1}    
        class="my-8" 
        bind:page
    >
		{#snippet children({ pages, currentPage })}
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.PrevButton />
				</Pagination.Item>
				{#each pages as page (page.key)}
					{#if page.type === 'ellipsis'}
						<Pagination.Item>
							<Pagination.Ellipsis />
						</Pagination.Item>
					{:else}
						<Pagination.Item>
							<Pagination.Link {page} isActive={currentPage === page.value}>
								{page.value}
							</Pagination.Link>
						</Pagination.Item>
					{/if}
				{/each}
				<Pagination.Item>
					<Pagination.NextButton />
				</Pagination.Item>
			</Pagination.Content>
		{/snippet}
	</Pagination.Root>
</main>
