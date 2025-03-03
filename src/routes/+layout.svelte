<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { SiGithub, SiTelegram } from '@icons-pack/svelte-simple-icons';
	import { Button } from "$lib/components/ui/button/index.js";
	import { Icon, Moon, Sun } from 'svelte-hero-icons';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
</script>

<title> 真红的小站 </title>
<ModeWatcher />

<header class="w-full border-b">
	<nav class="flex items-center justify-between gap-2 px-4 py-2 text-muted-foreground">
		<div class="flex items-center gap-3">
			<a href="/list"> 文档 </a>
			<a href="/list"> 关于 </a>
		</div>
		<div class="flex items-center gap-2 text-sm">
			<a href="/" class="mx-1"> 搜索 </a>
			<a href="/list" class="mx-1"> 目录 </a>
			<Button variant="ghost" size="icon">
				<SiGithub size={20} />
			</Button>
			<Button variant="ghost" size="icon">
				<SiTelegram size={20} />
			</Button>
			<Button onclick={toggleMode} variant="ghost" size="icon">
				<Icon src={Sun} solid size="20" class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<Icon src={Moon} solid size="20" class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			</Button>
		</div>
	</nav>
</header>
<div class="flex-1">
	{@render children()}
</div>

<footer
	class="flex w-full flex-wrap justify-between border-t px-4 py-2 text-xs text-muted-foreground md:flex-nowrap"
>
	<a href="/disclaimer"> 版权声明与免责事项 </a>
	<div>
		Powered by{' '}
		<a href="https://github.com/" class="text-destructive"> Shinnku </a>
	</div>
	<a href="/disclaimer"> 不知道放什么，总而言之放一个链接 </a>
</footer>
