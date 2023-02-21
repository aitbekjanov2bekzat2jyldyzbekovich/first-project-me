<template>
    <v-leyout>
        <div class="mainWrapper">
            <div class="mainConeiner ">
                <div class="haveCont" :class="{ 'haventCont': arr.length < 1 }">
                    <h2>not found try again !!!</h2>
                </div>
                <div v-for="item in arr" class="mainContent">
                    <div class="imgwraper" v-if="item.image">
                        <img :src="item.image.medium" alt="note found image">
                    </div>
                    <router-link :to="`/${this.typeinfopm}/${item.id}`">
                    <div class="nameWrapper" v-if="item.image">
                        <h3>{{ item.name }}</h3>
                    </div>
                </router-link>
                </div>
            </div>
        </div>
    </v-leyout>

</template>


<script>

export default {
    data: ()=> ({
        typeinfopm: ''
    }),
    props: {
        arr: {
            type: Array,
            default: []
        }
    },
    methods: {
        typeinf() {
            if (this.$route.query.type == 'people') {
               this.typeinfopm = 'person' 
            }else{
                this.typeinfopm = 'show'
            }
        }
    },
    mounted() {
        this.typeinf()
    }
}

</script>
have
<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.haveCont {
    display: none;
    height: 100vh;

}

.haventCont {
    display: block;
    font-size: 20px;
    color: orangered;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}

.mainWrapper {
    display: flex;
    justify-content: center;
    padding: 30px 0;
    background-color: black;

    .mainConeiner {
        display: flex;
        width: 90%;
        padding-top: 70px;
        flex-wrap: wrap;
        justify-content: space-between;


        .mainContent {
            width: 300px;
            margin-bottom: 50px;

            .nameWrapper {
                padding: 20px;
                margin-top: 5px;
                border: 2px solid red;
                cursor: pointer;
                transition-duration: 1s;

                &:hover {
                    background-color: orangered;
                    border: none;


                    h3 {
                        color: black;
                    }
                }

                h3 {
                    font-size: 18px;
                    color: orangered;
                    font-family: Arial, Helvetica, sans-serif;
                    font-weight: bold;
                }

            }

            .imgwraper {
                height: 300px;
                img {
                    width: 100%;
                    height: 300px;
                    color: orangeredЁ;
                }

            }



        }
    }
}

.imgwraper {
    img {
        width: 100%;
        height: 300px;
    }

}
</style>