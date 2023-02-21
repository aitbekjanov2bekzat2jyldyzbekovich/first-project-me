<template>
    <div class="fixedconteiner">
        <div class="LoginmainWrapper">
            <div class="loginConteiner">
                <div>
                    <h2>LOGIN</h2>
                </div>
                <form @submit.prevent="register">
                    <input type="text" placeholder="enter your email" v-model="formData.email"
                        :class="{ inputValid: this.borderERor === 'INVALID_EMAIL' || this.borderERor === 'NOTE_FOUND' }">
                    <input type="password" placeholder="enter your password" v-model="formData.password"
                        :class="{ inputValid: this.borderERor === 'INVALID_PASSWORD' || this.borderERor === 'NOTE_FOUND' }">
                    <button @click="login">
                        <p :class="{ no: this.spinerStatus === true }">LOGIN</p>
                        <P :class="{ spiner: this.spinerStatus === true }"></P>
                    </button>
                </form>
                <div>
                    <span>
                        <router-link to="/auth/registration">if you dont have accound click here</router-link>
                    </span>
                </div>
            </div>
        </div>

    </div>
    <validAlert />
    <AuthBreak/>
</template>
<script>
import { mapStores } from "pinia";
import { useLoaderStore } from "@/stores/loader";
import { useUserErrorStore } from "@/stores/userError";
import validAlert from '@/components/authComponents/ValidationLogin.vue'
import AuthBreak from "../../components/authComponents/AuthBreak.vue";
export default {
    computed: {
        ...mapStores(useLoaderStore),
        ...mapStores(useUserErrorStore)
    },
    components: {
        validAlert,
        AuthBreak
    },

    data() {

        return {
            formData: {
                email: '',
                password: '',
                returnSecureToken: true
            },
            borderERor: '',
            spinerStatus: false
        }
    },
    methods: {
        async login() {
            this.spinerStatus = true
            if (this.formData.email.length && this.formData.password.length) {
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_FIREBASE_API_KEY}`
                let options = {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.formData)
                }
                const response = await fetch(url, options)
                const res = await response.json()
                console.log(res);
                if (response.ok) {
                    localStorage.setItem('user', JSON.stringify(res))
                    this.loaderStore.status = true
                    setTimeout(() => {
                        this.spinerStatus = false
                        this.$router.push({ name: 'profile' })
                    }, 5000);

                }
                if (res.error.code === 400) {
                    this.erroreStore.getError = res.error.message
                    setTimeout(() => {
                        this.erroreStore.getError = ''
                    }, 2000);
                    this.borderERor = res.error.message
                    this.formData.email = ''
                    this.formData.password = ''
                }

            } else {
                this.borderERor = 'NOTE_FOUND'
                this.erroreStore.getError = 'NOTE_FOUND'
                this.formData.email = ''
                this.formData.password = ''
            }
            this.spinerStatus = false
        }

    }
}
</script>

<style lang="scss" scoped>
.no {
    display: none;
}

.fixedconteiner {
    position: relative;
    overflow: hidden;
}

.spiner {
    width: 30px;
    height: 30px;
    border: 5px solid rgb(0, 0, 0);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
}

.inputValid {
    border: 1px solid red !important;
    background-color: rgb(77, 12, 12) !important;

    &::placeholder {
        color: rgb(167, 38, 38) !important;
    }
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
    background-color: black;
    height: 100vh;

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