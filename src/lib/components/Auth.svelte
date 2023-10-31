<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { register } from "@teamhanko/hanko-elements";
    import { env } from "$env/dynamic/public";
    const hankoApi = env.PUBLIC_HANKO_API_URL;
    export let data;
    console.log(data)
    const redirectAfterLogin = () => {
        goto(`/${data?.page}/profile`);
    };

    onMount(async () => {
    await  register(hankoApi).catch((error) => {
            console.log(error)
        });

    });

</script>

<hanko-auth  on:onAuthFlowCompleted={redirectAfterLogin} />
