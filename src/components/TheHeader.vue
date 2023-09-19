<template>
    <header :class="member.currentMember === 0 ? 'red' : 'lime'">
        {{ member.currentMember === 0 ? "A" : "C" }}
        <span v-if="member.currentMember != 0">
            {{ member.printUserData.grade }}
        </span>
    </header>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useMemberStore } from "@stores";

const route = useRoute();
const member = useMemberStore();
</script>

<style></style>
