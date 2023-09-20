<template>
    <main>
        <p class="pageTitle fwb">{{ route.meta.pageNumber }}번 페이지</p>
        <h1 class="tc">Welcome, Guest!</h1>
    </main>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style></style>
