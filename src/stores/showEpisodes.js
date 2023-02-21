import { defineStore } from 'pinia'
export const useEpisodesStore = defineStore('episodes', {
    state: () => ({
        idEpisodes: null,
        idShow: null
    }),
    actions: {
        async getEpisodes() {
            const response = await fetch(`https://api.tvmaze.com/seasons/${this.idShow}/episodes`)
            const rees = await response.json()
            this.idEpisodes = rees
        }
    }
})

