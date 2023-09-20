<template>
    <main>
        <p class="pageTitle fwb">1-{{ paramId }} 페이지</p>

        <div class="subPage tc fwb">
            <h1 class="subTitle">Page {{ paramId }}</h1>
            <router-link
                :to="{
                    name: paramId === 5 ? 'A' : 'Bn',
                    params: paramId === 5 ? {} : { id: paramId + 1 },
                }"
                >다음</router-link
            >
        </div>
    </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const paramId = computed(() => parseInt(route.params.id));
</script>

<style></style>
