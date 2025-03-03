<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { filesize } from "filesize";

    interface Props {
        title: string;
        size: number;
        uuid: string;
        updated_at: string;
        created_at: string;
        download_provider: string;
    }

    let { title, uuid, size, updated_at, created_at, download_provider }: Props = $props();

</script>

<Card.Root>
    <Card.Header>
        <Card.Title>{title}</Card.Title>
    </Card.Header>
    <Card.Content class="text-sm text-muted-foreground">
        <p>大小：{filesize(size)}</p>
        <p>更新时间：{updated_at.toLocaleString()}</p>
        <p>创建时间：{created_at.toLocaleString()}</p>
    </Card.Content>
    <Card.Footer>
        <Button>下载</Button>
    </Card.Footer>
</Card.Root>