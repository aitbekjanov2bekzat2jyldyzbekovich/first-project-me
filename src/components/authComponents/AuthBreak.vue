<template>
    <div class="difoltBloker" :class="{activeBreker: this.active === true}" /> 
</template>

<script>
export default {
    data() {
        return {
            active: false
        }
    },
    methods: {
        activBreak() {
            if (localStorage.length) {
               this.active = true
            }
        }
    },
    mounted() {
        this.activBreak()
    }
}   
</script>

<style lang="scss" scoped>
    .difoltBloker{
        display: none;
    }
    .activeBreker{
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0);
        top: 0;
    }

</style>