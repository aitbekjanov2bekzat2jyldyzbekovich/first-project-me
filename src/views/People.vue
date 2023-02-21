<template>
  <v-leyout>
    <div class="peoplewraper">
      <div class="conteiner">
        <div class="cardsPersons" v-for="person in this.contentStore.defultItems">
          <div class="imgWrapper">
            <img :src="person?.image?.original">
          </div>
          <router-link :to="`/person/${person.id}`">
            <div class="personName">
              <h3>{{ person.name }}</h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </v-leyout>
</template>
<script>

import { mapStores } from "pinia";
import { useContentStore } from '@/stores/contennt'

export default {
  computed: {
    ...mapStores(useContentStore)
  },


  mounted() {
    this.contentStore.contentFech('people')
  }
}
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.peoplewraper {
  display: flex;
  padding: 30px 0;
  background-color: black;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;


  .conteiner {
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    justify-content: space-between;


    .cardsPersons {
      width: 300px;
      margin-bottom: 50px;






      .personName {
        padding: 20px;
        margin-top: 5px;
        border: 2px solid red;
        cursor: pointer;
        transition-duration: 1s;

        &:hover {
          background-color: orangered;
          border: none;


          h3 {
            color: black;
          }
        }

        h3 {
          font-size: 18px;
          color: orangered;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: bold;
        }
      }

      .imgWrapper {
        img {
          width: 100%;
          height: 300px;
        }

      }


    }
  }
}
</style>