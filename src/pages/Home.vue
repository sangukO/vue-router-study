<template>
    <div>
        <main>
            <p class="pageTitle fwb">{{ route.meta.pageNumber }}번 페이지</p>
            <select v-model="member.currentMember" class="fwb">
                <option
                    v-for="(list, index) in member.list"
                    :key="index"
                    :value="list.id"
                >
                    {{ list.grade }}
                </option>
            </select>
            <Picture />
        </main>
        <br />
    </div>
</template>

<script setup>
import { useRouter, useRoute, onBeforeRouteLeave } from "vue-router";
import { reactive } from "vue";
import { useMemberStore } from "@stores";
import { Picture } from "@components";

const route = useRoute();
const member = useMemberStore();
</script>

<style></style>
