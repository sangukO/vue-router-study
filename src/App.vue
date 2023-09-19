<template>
    <div class="wrap">
        <TheHeader />
        <router-view></router-view>
        <TheFooter />
    </div>
</template>

<script setup>
import { TheHeader, TheFooter } from "@components";
</script>

<style></style>
