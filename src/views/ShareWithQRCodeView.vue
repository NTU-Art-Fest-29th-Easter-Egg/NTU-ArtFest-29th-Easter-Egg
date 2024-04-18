<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

onBeforeMount(() => {
    const router = useRouter()
    if (!window.matchMedia('(min-width: 768px)').matches) {
        router.push('/')
    }
})
</script>


<template>
    <main class="h-screen w-full">
        <div class="bg-black flex h-screen flex-col items-center justify-top" id="page-1">
            <img src="../assets/main-page/title.png" alt="title" class="w-[30%] max-w-4xl mx-auto mt-16" />

            <p class="text-center text-white text-2xl mt-12 animate-pulse">
                利用手機開始通話
            </p>

            <div class="bg-white w-48 h-48 rounded-2xl flex items-center justify-center mt-2">
                <img src="../assets/qr-code.png" alt="QR Code" class="w-44 h-44 rounded-2xl">
            </div>
        </div>
    </main>
</template>

<style>
#page-1 {
    background-image: url('../assets/main-page/top.png');
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
}

@keyframes pulse {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.4;
    }

    100% {
        opacity: 1;
    }
}

.animate-pulse {
    animation: pulse 3s infinite;
}
</style>
