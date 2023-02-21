<template>
    <v-leyout>
        <div class="showMainWraperr" v-if="show">
            <div class="conteiner">
                <div class="imgNamePlotWrapper">
                    <div class="imgWrapper">
                        <img :src="show.image.medium">
                    </div>
                    <div class="nameInformWrapper">
                        <div class="NameShow">
                            <h2>{{ show.name }}</h2>
                        </div>
                        <div class="plot" v-html="show.summary" />
                    </div>
                </div>
                <div class="informShowWrapper">
                    <div class="headerInf">
                        <h3>
                            INFORMATION OF SHOW
                        </h3>
                    </div>
                    <div class="informShowConteiner">
                        <div class="informationP">
                            <ul>
                                <li>type:</li>
                                <li>language:</li>
                                <li>country:</li>
                                <li>timezone:</li>
                                <li>genres:</li>
                                <li>status:</li>
                                <li>runtime:</li>
                                <li>premiered:</li>
                                <li>ended:</li>
                                <li>rating:</li>
                            </ul>
                        </div>
                        <div class="valueInf">
                            <p>{{ show.type }}</p>
                            <p>{{ show.language }}</p>
                            <p>{{ show.network.country.name }}</p>
                            <p>{{ show.network.country.timezone }}</p>
                            <div class="genres" v-for="genres in show.genres ">
                                <span>{{`${genres} ,` }}</span>
                            </div>
                            <p>{{ show.status }}</p>
                            <p>{{ `${show.runtime} minutes` }}</p>
                            <p>{{ show.premiered }}</p>
                            <p>{{ show.ended }}</p>
                            <p>{{show.rating.average}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-leyout>

</template>

<script>
import { mapStores } from "pinia";
import { useEpisodesStore } from '@/stores/showEpisodes'
export default {
    computed: {
        ...mapStores(useEpisodesStore)
    },
    data() {
        return {
            show: null
        }
    },
    methods: {
        async getData() {
            const response = await fetch(`https://api.tvmaze.com/shows/${this.$route.params.id}`)
            this.show = await response.json()
        

        }
    },
    mounted() {
        this.getData()
        this.episodesStore.getEpisodes()
        this.episodesStore.idShow = this.$route.params.id 

       
    }
}
</script>