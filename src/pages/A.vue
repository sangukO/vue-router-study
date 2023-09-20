<template>
    <main>
        <p class="pageTitle fwb">{{ route.meta.pageNumber }}번 페이지</p>
        <select v-model="selectedOption" class="fwb" @change="handleChange">
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
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { useMemberStore } from "@stores";
import { Picture } from "@components";

const route = useRoute();
const member = useMemberStore();

const selectedOption = ref(member.currentMember);

function handleChange() {
    member.changeMember(selectedOption.value);
}
</script>

<style></style>
