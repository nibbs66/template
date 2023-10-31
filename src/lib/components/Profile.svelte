<script lang="ts">
    import { register } from "@teamhanko/hanko-elements";
    import { onMount } from "svelte";
    import { env } from "$env/dynamic/public";

    const hankoApi = env.PUBLIC_HANKO_API_URL;

    onMount(async () => {
      const res = await  register(hankoApi).catch((error) => {
            // handle error
        });
      console.log(res)
    });

</script>

<hanko-profile />
