<template>
    <v-leyout>
        <div class=" personWaper" v-if="person">
            <div class="conteiner">
                <div class="imgnamePerson">
                    <div class="imagePerson">
                        <img :src="person.image.medium" alt="">
                    </div>
                    <div class="nameperson">
                        <h2>{{ person.name }}</h2>
                    </div>
                </div>
                <div class="infPersonwraper">

                    <div class="information">
                        <h3>
                            INFORMATION OF PERSON
                        </h3>
                    </div>
                    <div class="informationWrapper">
                        <div class=" tem">
                            <h5>country:</h5>
                            <h5>timezone:</h5>
                            <h5>gender:</h5>
                            <h5>birthday:</h5>
                        </div>

                        <div class="otv">
                            <p>{{ person.country.name }}</p>
                            <p>{{ person.country.timezone }}</p>
                            <p>{{ person.gender }}</p>
                            <p>{{ person.birthday}}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </v-leyout>
</template>

<script>
export default {
    data() {
        return {
            person: null
        }

    },
    methods: {
        async getData() {
            const response = await fetch(`https://api.tvmaze.com/people/${this.$route.params.id}`)
            this.person = await response.json()
        }
    },
    mounted() {
        this.getData()

    }
}
</script>


<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.personWaper {
    display: flex;
    justify-content: center;
    background-color: black;

    .conteiner {
        width: 90%;
        height: 90vh;
        display: flex;


        .imgnamePerson {
            width: 50%;
            height: 100%;
            padding: 10px;

            .imagePerson {
                width: 100%;
                height: 80%;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: inherit;
                }
            }

            .nameperson {
                width: 100%;
                height: 20%;
                display: flex;
                justify-content: center;
                align-items: center;


                h2 {
                    font-size: 40px;
                    font-family: Arial, Helvetica, sans-serif;
                    text-align: center;
                    font-weight: bold;
                    color: orangered;
                    width: 90%;
                    height: 30%;

                }

            }

        }

        .infPersonwraper {
            background-color: rgb(32, 28, 28);
            border: 2px solid orangered;
            width: 50%;
            height: 77%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            margin: 10px 0;

            .information{
                 h3{
                    font-size: 30px;
                    color: red;
                    font-family:'Courier New', Courier, monospace;
                 }
            }

            .informationWrapper {
                display: flex;
                width: 90%;

                .tem {
                    width: 50%;
                    line-height: 50px;

                    h5 {
                        font-size: 25px;
                        font-family: Arial, Helvetica, sans-serif;
                        font-weight: bold;
                        color: orangered;
                        font-size: 25px;
                        font-family: Arial, Helvetica, sans-serif;
                        font-weight: bold;
                        
                    }
                }

                .otv {
                    width: 50%;
                    line-height: 50px;

                    p {
                        font-size: 20px;
                        font-weight: bold;
                        font-style: unset;
                        color: rgb(12, 3, 3);
                        background-color: transparent;
                        font-family: 'Courier New', Courier, monospace;

                    }
                }

            }
        }

    }
}
</style>