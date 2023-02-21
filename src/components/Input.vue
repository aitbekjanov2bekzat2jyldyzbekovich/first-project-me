<template>
    <div class="search">
        <input type="text" v-model="InputValue">
        <button :disabled="InputValue === ''" @click="search">
            <xml version='1.0' encoding='iso-8859-1' />
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.1 26.1"
                xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26.1 26.1">
                <path
                    d="m25.806,22.9l-5.4-5.4c-0.2-0.2-0.2-0.4-0.1-0.6 1.1-1.7 1.7-3.7 1.7-5.9 0-6.1-4.9-11-11-11s-11,4.9-11,11 4.9,11 11,11c2.2,0 4.2-0.6 5.9-1.7 0.2-0.1 0.5-0.1 0.6,0.1l5.4,5.4c0.4,0.4 1,0.4 1.4,0l1.4-1.4c0.5-0.5 0.5-1.1 0.1-1.5zm-14.7-4.9c-3.9,0-7-3.1-7-7s3.1-7 7-7 7,3.1 7,7-3.1,7-7,7z" />
            </svg>

        </button>
        <select v-model="typeSearch">
            <option value="shows">SHOW</option>
            <option value="people">PEOPlE</option>
        </select>
    </div>
</template>
<script>

export default {
    data() {
        return {
            typeSearch: 'shows',
            InputValue: ''

        }
    },
    methods: {
        search() {
            this.$router.push({
                path: `/search`,
                query: {
                    q: this.InputValue, type: this.typeSearch
                }
            })
        }




    }
}

</script>

<style lang="scss" scoped>
.search {
    width: 50%;
    display: flex;
    align-items: center;


    button {
        width: 30px;
        height: 30px;
        margin-right: 30px;
        background-color: orangered;
        max-width: 30px;
        max-width: 30px;
        border: none;
        cursor: pointer;
        &:hover{
            padding-bottom: 10px;
            border-bottom: 3px solid black;
        }
    }

    input {
        height: 50px;
        border: none;
        border-bottom: 2px solid black;
        padding: 10px 5px;
        color: rgb(0, 0, 0);
        font-style: italic;
        background-color: orangered;
        transition: 1s;
        margin-right: 10px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        width: 200px;

        &:focus {
            outline: none;
            -webkit-box-shadow: 0px 5px 10px 2px rgb(0, 0, 0);
            -moz-box-shadow: 0px 5px 10px 2px rgb(0, 0, 0);
            box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.651);
            background-color: rgb(235, 55, 0);
            border: none;
        }
    }
}

select {
    width: 110px;
    height: 50px;
    background-color: black;
    color: orangered;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    border: none;
    font-weight: bold;
    text-align: center;
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: black;
    }

    option {
        font-size: 18px;


    }
}
</style>