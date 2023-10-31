<script lang="ts">

    import Profile from "$lib/components/Profile.svelte";
    import Logout from "$lib/components/Logout.svelte";
    import { page } from '$app/stores';

   console.log($page.params.name)
</script>

<div>
<Profile />
    <Logout/>

</div>
