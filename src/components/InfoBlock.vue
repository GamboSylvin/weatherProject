<script setup>
import { ref } from 'vue';

const temperatureValue = ref('Welcome')
</script>

<template>
    <div class=" h-44 w-48 mb-7 flex m-auto flex-col justify-center">
        <div id="town" ></div>
        <div id="temperature" class="text-4xl text-center infoMessage text-appWhite">
            {{ temperatureValue }}
        </div>
        <div id="weatherState" ></div>
    </div>
</template>