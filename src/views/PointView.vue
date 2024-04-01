<script setup lang="ts">
import pointCard from '../components/pointCard.vue'
</script>

<template>
    <div class="pointCard">
        <pointCard />
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
