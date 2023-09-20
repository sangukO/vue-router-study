<template>
    <main>
        <p class="pageTitle fwb">{{ route.meta.pageNumber }}번 페이지</p>
        <div id="view">
            <component :is="tabs.list[tabs.active].component"></component>
            <div id="btnBox" class="tc">
                <button
                    v-for="(tab, index) in tabs.list"
                    :key="index"
                    id="#id"
                    :class="index === tabs.active ? 'active' : ''"
                    @click="handleBtn(index)"
                >
                    {{ tab.label }}
                </button>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { reactive } from "vue";
import { TheTabs1, TheTabs2, TheTabs3 } from "@components/tabs";

const route = useRoute();

const tabs = reactive({
    active: 0,
    list: [
        {
            label: "2-1 탭",
            component: TheTabs1,
        },
        {
            label: "2-2 탭",
            component: TheTabs2,
        },
        {
            label: "2-3 탭",
            component: TheTabs3,
        },
    ],
});

function handleBtn(i) {
    tabs.active = i;
}
</script>

<style></style>
