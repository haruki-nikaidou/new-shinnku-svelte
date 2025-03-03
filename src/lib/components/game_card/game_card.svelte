<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { filesize } from "filesize";

    interface Props {
        name: string;
        size: number;
        uuid: string;
        updated_at: Date;
        created_at: Date;
        download_provider: string;
    }

    let { name: title, uuid, size, updated_at, created_at, download_provider }: Props = $props();

</script>

<Card.Root>
    <Card.Header>
        <Card.Title>{title}</Card.Title>
    </Card.Header>
    <Card.Content class="text-xs text-muted-foreground">
        <p>大小：{filesize(size)}</p>
        <p>更新时间：{updated_at.toLocaleString()}</p>
        <p>创建时间：{created_at.toLocaleString()}</p>
    </Card.Content>
    <Card.Footer>
        <Button variant="destructive" href={`/download/${uuid}`}>下载</Button>
    </Card.Footer>
</Card.Root>