<template>
    <div class="fixedconteiner">
        <div class="LoginmainWrapper">
            <div class="loginConteiner">
                <div>
                    <h2>REGISTRATION</h2>
                </div>
                <form @submit.prevent="register">
                    <input
                        :class="{ borderred: this.erroreStore.redBorder === 'INVALID_EMAIL' || this.erroreStore.redBorder === 'NOTE_FOUND' }"
                        type="text" placeholder="create   email" v-model="formData.email">
                    <input
                        :class="{ borderred: this.erroreStore.redBorder === 'INVALID_PASSWORD' || this.erroreStore.redBorder === 'NOTE_FOUND' }"
                        type="password" placeholder="create  password" v-model="formData.password">
                    <button @click="registraton">SIGIN UP</button>
                </form>
                <div>
                    <span>
                        <router-link to="/auth/login">if you have accound click here</router-link>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <validAlert />
</template>
<script>
import { mapStores } from "pinia";
import { useUserErrorStore } from "@/stores/userError";
import { useLoaderStore } from "@/stores/loader";
import validAlert from '@/components/authComponents/ValidationLogin.vue'
export default {
    computed: {
        ...mapStores(useUserErrorStore),
        ...mapStores(useLoaderStore)
    },
    components: {
        validAlert
    },
    data() {
        return {
            formData: {
                email: '',
                password: '',
                returnSecureToken: true
            }
        }
    },
    methods: {
        async registraton() {
            if (this.formData.email.length && this.formData.password.length) {
                const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${import.meta.env.VITE_FIREBASE_API_KEY}`
                let OPTIONS = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.formData)
                }
                const response = await fetch(URL, OPTIONS)
                const res = await response.json()
                console.log(res);
                if (response.ok) {
                    localStorage.setItem('user', JSON.stringify(res))
                    this.loaderStore.status = true
                    this.$router.push({ name: 'profile' })
                }
                if (res.error.code === 400) {
                    this.erroreStore.getError = res.error.message
                    this.erroreStore.redBorder = res.error.message
                    setTimeout(() => {
                        this.erroreStore.getError = ''
                    }, 2000);
                    this.formData.email = ''
                    this.formData.password = ''
                }
            } else {
                this.erroreStore.getError = 'NOTE_FOUND'
                this.erroreStore.redBorder = 'NOTE_FOUND'
                this.formData.email = ''
                this.formData.password = ''
                setTimeout(() => {
                    this.erroreStore.getError = ''
                }, 2000);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.borderred {
    background-color: rgb(77, 12, 12) !important;
    border: 1px solid red !important;

    &::placeholder {
        color: rgb(167, 38, 38) !important;
    }

}

.fixedconteiner {
    position: relative;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: black;
}

.LoginmainWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: black;


    .loginConteiner {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 25px;
        background-color: rgb(28, 25, 25);
        border-radius: 10px;
        -webkit-box-shadow: 0px 5px 100px 16px rgba(186, 99, 0, 0.2);
        -moz-box-shadow: 0px 5px 100px 16px rgba(206, 82, 0, 0.2);
        box-shadow: 0px 5px 100px 16px rgba(228, 110, 0, 0.2);


        form {
            display: flex;
            flex-direction: column;
            margin: 15px 0;

            input {
                width: 300px;
                height: 40px;
                margin-bottom: 15px;
                border-radius: 5px;
                padding: 10px 10px;
                outline: none;
                background-color: black;
                color: orangered;
                border: 1px solid black;
                transition-duration: 1s;

                &::placeholder {
                    color: rgba(255, 68, 0, 0.363);
                    font-size: 13px;
                    font-weight: 100;
                }

                &:focus {
                    border: 3px solid orangered;
                }
            }

            button {
                height: 40px;
                background-color: orangered;
                border-radius: 5px;
                border: none;
                font-weight: 800;
                font-family: Arial, Helvetica, sans-serif;
                transition: 1s;

                &:hover {
                    background-color: rgba(241, 68, 5, 0.808);
                    cursor: pointer;
                }
            }
        }
    }

    a {
        color: rgba(255, 68, 0, 0.363);
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    }

    h2 {
        color: rgb(0, 0, 0);
        font-family: Arial, Helvetica, sans-serif;
    }

}
</style>