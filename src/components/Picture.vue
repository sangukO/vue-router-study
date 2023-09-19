<template>
    <div id="animals">
        <div class="animal fwb tc">
            <div class="my_div">
                <p
                    :style="`background-image: url(${animals[0].url});
                        background-size: contain;`"
                >
                    {{ animals[0].name }}
                </p>
            </div>
        </div>
        <div class="animal fwb tc">
            <div class="my_div">
                <p
                    :style="`background-image: url(${animals[1].url});
                        background-size: contain;`"
                >
                    {{ animals[1].name }}
                </p>
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
