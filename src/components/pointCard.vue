<template>
    <div class="pointCard">
        <h1>Point Card</h1>
        <img :src="selectedImage" alt="Point Image">
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const selectedImage = ref('');

onMounted(() => {
    // 讀取 cookie 中的 JSON 數據
    const cookieData = JSON.parse(getCookie('userActivity'));
    var point = 0;
    if (cookieData.psychTest.type !== -1) {
        point += 1;
    }
    point += cookieData.easterEggs.length;

    selectedImage.value = `pointCard/${point}.png`;
});

function getCookie(name: string): string {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || "{'err': 'cookie value is empty'}";
    return "{'err': 'cookie name is not found'}";
}
</script>
