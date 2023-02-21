import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', {
    state: () => ({
        defultItems: [],
        
    }),
    actions: {
        async contentFech(item) {
            const response = await fetch(`https://api.tvmaze.com/${item}`)
            const ress = await response.json()
            this.defultItems = await ress.filter(item => item.id <= 16)
        }
    }
})