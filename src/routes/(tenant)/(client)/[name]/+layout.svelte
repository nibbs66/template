<script lang="ts">
import '$lib/app.css'
import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class=" mx-auto  bg-blue-500  ">
    <div class=" mx-auto py-10 max-w-screen-2xl  2xl:px-0">
            <Navbar />
        <div class="mx-auto  mt-10  ">
            <slot />
        </div>
    </div>

</div>

