import { defineStore } from 'pinia'
export const useLoaderStore = defineStore('loader', {
    state: () => ({
        status: false,
    }),
    actions: {
        loder() {
           if (this.status === true) {
            location.reload()
           }
        }
    }
})