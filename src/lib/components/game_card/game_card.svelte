<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { filesize } from "filesize";

    interface Props {
        title: string;
        size: number;
        uuid: string;
    }

    let { title, uuid, size }: Props = $props();

</script>

<Card.Root>
    <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>大小： {filesize(size)}</Card.Description>
    </Card.Header>
    <Card.Footer>
        <Button>下载</Button>
    </Card.Footer>
</Card.Root>