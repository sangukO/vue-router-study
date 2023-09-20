<template>
    <div id="animals">
        <div
            v-for="(animal, index) in animals"
            :key="index"
            class="animal fwb tc"
        >
            <div class="animal fwb tc">
                <div class="my_div">
                    <p
                        :style="`background-image: url(${animal.url});
                        background-size: contain;`"
                    >
                        {{ animal.name }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMemberStore } from "@stores/member";
import { computed } from "vue";

const member = useMemberStore();
const animals = computed(() => member.printUserData.animal);
</script>

<style></style>
