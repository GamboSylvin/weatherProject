<script setup>
import Navbar from './components/NavBar.vue';
import SearchBar from './components/SearchBar.vue';
import InfoBlockSnippet from './components/InfoBlockSnippet.vue';
import InfoBlock from './components/InfoBlock.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <div class="bg-gradient-to-br from-SunnyGradientColorTop to-SunnyGradientColorBottom h-screen resize-none">
        <Navbar/>
        <SearchBar /> 
        <div class="mt-7">
            <InfoBlock/>
            <InfoBlockSnippet/>
        </div>
        <Footer class="absolute bottom-0 md:hidden"/>
    </div>
</template>



