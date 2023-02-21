<template>
    <footer>
        <div class="footconteiner">
            <div class="left">

            </div>
            <div class="right"></div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footconteiner {
    display: flex;
    box-shadow: -2px -2px 15px -3px rgba(255, 68, 0, 0.77);
    -webkit-box-shadow: -2px -2px 15px -3px rgba(255, 68, 0, 0.77);
    -moz-box-shadow: -2px -2px 15px -3px rgba(255, 68, 0, 0.77);
    position: relative;
    z-index: 1;

    .left {
        background-color: rgb(29, 25, 25);
        width: 50%;
        height: 150px;
    }

    .right {

        background-color: rgb(255, 68, 0);
        width: 50%;
        height: 150px;

    }
}
</style>