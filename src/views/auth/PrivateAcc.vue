<template>
<v-leyout>
    <p>private accaund</p>
</v-leyout>  
</template>

<script>

import { mapStores } from "pinia";
import { useLoaderStore } from "@/stores/loader";
export default {
    computed: {
        ...mapStores(useLoaderStore)
    },
    methods: {
        loadere() {
           this.loaderStore.loder()
        }
    },
    mounted() {
        this.loadere()
    }
}
</script>