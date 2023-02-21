<template>
    <nav>
        <div class="navig">
            <span>
                <router-link to="/" :class="{ butomLin: this.$route.name === 'home' }">HOME</router-link>
            </span>
            <span>
                <router-link to="/people" :class="{ butomLin: this.$route.name === 'people' }">PEOPLE</router-link>
            </span>
            <span>
                <router-link to="/show" :class="{ butomLin: this.$route.name === 'show' }">SHOWS</router-link>
            </span>
            <span>
                <router-link :to="`${link}`" :class="{ butomLin: this.$route.name === 'profile'}">
                    {{ this.linkName }}
                </router-link>
            </span>

        </div>
    </nav>
</template>


<script>


export default {
    data() {
        return {
            link: '',
            linkName: ''
        }
    },
    methods: {
        path() {
            if (localStorage.length) {
                this.link = '/profile'
                this.linkName = 'PROFILE'
            } else {
                this.link = '/auth/login'
                this.linkName = 'SIGN-UP'
            }
        }
    },
    mounted() {
        this.path()
    }
}
</script>

<style lang="scss" scoped>
.butomLin {
    border-bottom: 3px solid black;
    
}

span {
    margin-right: 30px;
   

    a {
        color: black;
        font-weight: bold;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    &:hover {
        border-bottom: 3px solid black;
    }
}

.filterPeople {
    width: 10%;

    select {
        width: 100%;
        text-align: center;
        height: 30px;
        border: none;
        color: orangered;
        background-color: rgb(0, 0, 0);
        font-weight: 800;
        border-bottom: 2px solid orangered;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 18px;

        &:focus {
            outline: none;
        }

        option {
            font-weight: 800;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

        }
    }
}
</style>