<template>
    <v-header />
    <main>
        <slot />
    </main>
    <v-footer />
</template>

<script>


import Footer from '@/components/footer.vue'
import Header from '@/components/v-header.vue'


export default {
    components: {
        'v-footer': Footer,
        'v-header': Header
    }
}
</script>