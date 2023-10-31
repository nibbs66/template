<script lang="ts">
    import { cubicInOut } from 'svelte/easing';
    import { crossfade } from 'svelte/transition';
    import logo from '$lib/img/favicon.png'
    let selected = 'home';
    const triggers = [
        { id: 'home', title: 'Home' },
        { id: 'about', title: 'About' },
        { id: 'contact', title: 'Contact' },
    ];
    $: value = selected;
    const [send, receive] = crossfade({
        duration: 400,
        easing: cubicInOut,
    });
    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute('href'));
        console.log(target.getAttribute('href').toString().slice(1))
        if (!el) return;
        selected === target.getAttribute('href').toString().slice(1) ? selected = null : selected = target.getAttribute('href').toString().slice(1)
        el.scrollIntoView({
            behavior: 'smooth'
        });
    }
</script>

<div class=" z-20">
    <div class="  mx-auto px-4 py-2 flex items-center justify-between w-full container  rounded-lg shadow-2xl shadow-black">
        <div class="flex space-x-4 items-center">
            <img src={logo} alt="logo" class="w-16"/>
            {#each triggers as { id, title }}
                <a href={`#${id}`}  class={`${value === id ? 'text-white transition duration-700 hover:duration-500' : 'text-monkebyte-300 transition duration-700 hover:duration-500'}  text-sm relative`}
                   on:click|preventDefault={scrollIntoView}



                >
                    {title}
                    {#if value === id}
                        <div
                                in:send={{ key: 'trigger' }}
                                out:receive={{ key: 'trigger' }}
                                class="absolute h-1 w-6 rounded-full mt-2 left-1/2 -translate-x-1/2  bg-monkebyte-700"
                        />
                    {/if}

                </a>
            {/each}
        </div>
        <div>
            <a href="/login" class="text-sm px-3 py-2 border rounded-md text-monkebyte-50">
                Inloggen
                <span
                        aria-hidden="true">&rarr;</span>
            </a>
        </div>
    </div>
</div>
