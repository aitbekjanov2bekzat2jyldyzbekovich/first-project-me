<template>
    <div class="windowDefult" :class="{ activeAlert: this.erroreStore.getError }">
        <div class="alertConteiner">
            <p>{{ this.erroreStore.getError }}</p>
        </div>
    </div>
</template>

<script>
import { mapStores } from "pinia";
import { useUserErrorStore } from "@/stores/userError";
export default {
    computed: {
        ...mapStores(useUserErrorStore)
    }


}
</script>

<style lang="scss" scoped>
.windowDefult {
    display: none;
}

.activeAlert {
    display: block;
    width: 380px;
    height: 100px;
    position: absolute;
    top: 330px;
    background-color: white;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    background-color: rgb(44, 39, 39);
    padding: 20px;

    p{
        color: red;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        font-weight: 500;
    }
}
</style>