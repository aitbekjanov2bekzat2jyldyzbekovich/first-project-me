import { defineStore } from 'pinia'
export const useUserErrorStore = defineStore('errore', {
    state: () => ({
        getError: '',
        redBorder: ''
    })
})