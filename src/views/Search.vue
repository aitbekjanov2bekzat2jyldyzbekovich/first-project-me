<template>
    <Content v-if="status" :arr="list"></Content>
</template>


<script>

import Content from '@/components/renderCont.vue'
export default {
    components: {
        Content
    },
    data() {
        return {
            list: null,
            status: false
        }
    },
    methods: {
        async getSearchValue() {
            this.status = false
            const response = await fetch(` https://api.tvmaze.com/search/${this.$route.query.type}?q=${this.$route.query.q}`)
            const data = await response.json()

            if (this.$route.query.type === 'shows') {
                this.list = data.map(item => ({
                    ...item.show
                }))
            } else {
                this.list = data.map(item => ({
                    ...item.person
                }))
            }
                this.status = true
                this.$router.go(1)
        }
    },
    mounted() {
        this.getSearchValue()
    },
    watch: {
    '$route.query.q': {
      handler: function () {
        this.getSearchValue()
      },
      deep: true,
      immediate: true
    }
  }
}
</script>




