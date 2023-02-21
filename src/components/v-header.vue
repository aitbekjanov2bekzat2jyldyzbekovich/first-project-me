<template>
    <div>
        <header>
            <div class="MainWrapper">
                <div class="conteiner">
                    <v-input />
                    <v-navigation />
                </div>
            </div>
        </header>
    </div>
</template>


<script>

import Navigation from '@/components/navigation.vue'
import Input from '@/components/input.vue'
export default {
    components: {
        'v-navigation': Navigation,
        'v-input': Input
    }
}
</script>



<style lang="scss" scoped>
.MainWrapper {
    display: flex;
    justify-content: center;
    background-color: orangered;
    width: 100%;

    .conteiner {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;
        transition-duration: 1s;
    }
}
</style>