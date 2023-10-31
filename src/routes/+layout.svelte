<script lang="ts">
import '$lib/app.css'
import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class=" mx-auto  bg-blue-500 bg-cover  ">
    <div class=" mx-auto py-10 min-h-screen max-w-screen-2xl  2xl:px-0">
            <Navbar />
        <div class="mx-auto  min-h-screen mt-10  ">
            <slot />
        </div>
    </div>

</div>

