<template>
    <footer v-if="route.meta?.isShowFooter" class="tc fwb">
        <router-link to="/">1</router-link>
        <router-link :to="{ name: 'Bn', params: { id: 1 } }">2</router-link>
        <router-link to="/C">3</router-link>
        <router-link to="/D">4</router-link>
    </footer>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style></style>
