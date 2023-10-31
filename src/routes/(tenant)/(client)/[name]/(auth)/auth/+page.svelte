<script lang="ts">
    import Auth from "$lib/components/Auth.svelte";
    export let data;

</script>

<div class="mx-auto max-w-7xl">
    <div class="container flex justify-center mx-auto max-w-md mt-44 bg-white py-4 rounded-lg shadow-2xl">
<Auth {data} />
</div>
</div>
