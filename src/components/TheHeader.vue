<template>
    <header
        :class="
            route.meta.pageNumber !== '1'
                ? 'blue'
                : member.currentMember === 0
                ? 'red'
                : 'lime'
        "
    >
        <button
            v-if="route.meta.pageNumber !== '1'"
            class="fwb nbd"
            @click="router.back"
        >
            &lt;
        </button>
        {{
            route.meta.pageNumber !== "1"
                ? "B"
                : member.currentMember === 0
                ? "A"
                : "C"
        }}
        <span
            v-if="route.meta.pageNumber === '1' && member.currentMember !== 0"
        >
            {{ member.printUserData.grade }}
        </span>
    </header>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { useMemberStore } from "@stores";

const route = useRoute();
const router = useRouter();
const member = useMemberStore();
</script>

<style></style>
