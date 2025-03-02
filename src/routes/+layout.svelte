<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { SiGithub, SiTelegram } from '@icons-pack/svelte-simple-icons';
	import { Icon, Moon } from 'svelte-hero-icons';
</script>
<title>
	真红的小站
</title>

<header class="w-full border-b">
	<nav class="flex justify-between gap-2 px-4 py-2 items-center text-zinc-600 ">
		<div class="flex gap-3 items-center">
			<a href="/list">
				文档
			</a>
			<a href="/list">
				关于
			</a>
		</div>
		<div class="flex gap-4 items-center text-sm">
			<a href="/">
				搜索
			</a>
			<a href="/list">
				目录
			</a>
			<a href="https://github.com/">
				<SiGithub size={20}/>
			</a>
			<a href="https://github.com/">
				<SiTelegram size={20}/>
			</a>
			<button>
				<Icon src={Moon} solid size="20" />
			</button>
		</div>
	</nav>
</header>
<div class="flex-1">
	{@render children()}
</div>

<footer
	class="w-full border-t px-4 py-2 text-zinc-600 text-xs flex justify-between flex-wrap md:flex-nowrap"
>
	<a href="/disclaimer">
		版权声明与免责事项
	</a>
	<div>
		Powered by{' '}
		<a href="https://github.com/" class="text-red-500">
			Shinnku
		</a>
	</div>
	<a href="/disclaimer">
		不知道放什么，总而言之放一个链接
	</a>
</footer>
