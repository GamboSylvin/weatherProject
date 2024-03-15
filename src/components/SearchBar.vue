<script setup>

</script>

<template>
    <form>
        <div class="flex m-auto w-3/4 h-11 relative">
            <input type="search" name="SearchBar" id="SearchBar" placeholder="Search a town" class="peer transition-all w-full h-full rounded-xl bg-appWhite px-10 focus:px-3 outline-none text-slate-400">
            <label for="SearchBar" class="absolute origin-center scale-150 left-3 top-1/2 -translate-y-1/2 transition-all peer-focus:opacity-0 peer-focus:left-1"><img src="/SearchLoop.svg" alt="SearchLoop"></label>
        </div>
    </form>
    
</template>