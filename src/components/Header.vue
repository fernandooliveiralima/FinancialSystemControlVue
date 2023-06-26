<script lang="ts" setup>
/* vue imports */
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
/* Pinia Stores */


/* project imports */
import { items } from '../data/items';



/* variables */
const list = ref(items);
const iconClass = ref('');


/* app functions */



watch(list.value, (newList)=> iconClass.value = 'bell-animation');

</script>

<template>
    <header>

        <section class="logo">
            <div class="icon-money">&#128184;</div>
            <h3>Financial System</h3>
        </section>

        <section class="user-transactions">

            <div class="transactions-section">
                <font-awesome-icon :class="{'bell-animation': iconClass}" icon="fa-solid fa-bell"></font-awesome-icon>
                <span> <router-link to="/Transactions">Transactions</router-link> </span>

            </div>

            <div class="user-section">
                <font-awesome-icon icon="fa-solid fa-user"></font-awesome-icon>
                <span>Fernando</span>
            </div>

        </section>


    </header>
</template>

<style lang="scss" scoped>
@import url(../assets/fonts/fonts.css);

header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
        width: 17%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .icon-money {
            font-size: 3.5rem;
        }

        h3 {
            font-family: sans-serif;
            font-size: 1.8rem;
        }
    }

    .input-date {
        width: 15%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .user-transactions {

        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 3rem;
        width: 15rem;
        margin-right: 5rem;

        .transactions-section {
            cursor: pointer;
            width: 8rem;

            i span {
                font-size: 1.2rem;
            }

            a {
                text-decoration: none;
                color: black;
            }
        }

        .user-section {
            width: 8rem;
        }

    }

    .user-section,
    .transactions-section {
        width: 8%;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        /* svg */
        
    }

    /* main */

    .myColor{
        color: black;
    }
    .bell-animation{
  display:block;
  
  
  -webkit-animation: ring 3s .7s ease-in-out infinite;
  -webkit-transform-origin: 50% 4px;
  -moz-animation: ring 3s .7s ease-in-out infinite;
  -moz-transform-origin: 50% 4px;
  animation: ring 3s .7s ease-in-out infinite;
  transform-origin: 50% 4px;
}

@-webkit-keyframes ring {
  0% { -webkit-transform: rotateZ(0); }
  1% { -webkit-transform: rotateZ(30deg); }
  3% { -webkit-transform: rotateZ(-28deg); }
  5% { -webkit-transform: rotateZ(34deg); }
  7% { -webkit-transform: rotateZ(-32deg); }
  9% { -webkit-transform: rotateZ(30deg); }
  11% { -webkit-transform: rotateZ(-28deg); }
  13% { -webkit-transform: rotateZ(26deg); }
  15% { -webkit-transform: rotateZ(-24deg); }
  17% { -webkit-transform: rotateZ(22deg); }
  19% { -webkit-transform: rotateZ(-20deg); }
  21% { -webkit-transform: rotateZ(18deg); }
  23% { -webkit-transform: rotateZ(-16deg); }
  25% { -webkit-transform: rotateZ(14deg); }
  27% { -webkit-transform: rotateZ(-12deg); }
  29% { -webkit-transform: rotateZ(10deg); }
  31% { -webkit-transform: rotateZ(-8deg); }
  33% { -webkit-transform: rotateZ(6deg); }
  35% { -webkit-transform: rotateZ(-4deg); }
  37% { -webkit-transform: rotateZ(2deg); }
  39% { -webkit-transform: rotateZ(-1deg); }
  41% { -webkit-transform: rotateZ(1deg); }

  43% { -webkit-transform: rotateZ(0); }
  100% { -webkit-transform: rotateZ(0); }
}

@-moz-keyframes ring {
  0% { -moz-transform: rotate(0); }
  1% { -moz-transform: rotate(30deg); }
  3% { -moz-transform: rotate(-28deg); }
  5% { -moz-transform: rotate(34deg); }
  7% { -moz-transform: rotate(-32deg); }
  9% { -moz-transform: rotate(30deg); }
  11% { -moz-transform: rotate(-28deg); }
  13% { -moz-transform: rotate(26deg); }
  15% { -moz-transform: rotate(-24deg); }
  17% { -moz-transform: rotate(22deg); }
  19% { -moz-transform: rotate(-20deg); }
  21% { -moz-transform: rotate(18deg); }
  23% { -moz-transform: rotate(-16deg); }
  25% { -moz-transform: rotate(14deg); }
  27% { -moz-transform: rotate(-12deg); }
  29% { -moz-transform: rotate(10deg); }
  31% { -moz-transform: rotate(-8deg); }
  33% { -moz-transform: rotate(6deg); }
  35% { -moz-transform: rotate(-4deg); }
  37% { -moz-transform: rotate(2deg); }
  39% { -moz-transform: rotate(-1deg); }
  41% { -moz-transform: rotate(1deg); }

  43% { -moz-transform: rotate(0); }
  100% { -moz-transform: rotate(0); }
}

@keyframes ring {
  0% { transform: rotate(0); }
  1% { transform: rotate(30deg); }
  3% { transform: rotate(-28deg); }
  5% { transform: rotate(34deg); }
  7% { transform: rotate(-32deg); }
  9% { transform: rotate(30deg); }
  11% { transform: rotate(-28deg); }
  13% { transform: rotate(26deg); }
  15% { transform: rotate(-24deg); }
  17% { transform: rotate(22deg); }
  19% { transform: rotate(-20deg); }
  21% { transform: rotate(18deg); }
  23% { transform: rotate(-16deg); }
  25% { transform: rotate(14deg); }
  27% { transform: rotate(-12deg); }
  29% { transform: rotate(10deg); }
  31% { transform: rotate(-8deg); }
  33% { transform: rotate(6deg); }
  35% { transform: rotate(-4deg); }
  37% { transform: rotate(2deg); }
  39% { transform: rotate(-1deg); }
  41% { transform: rotate(1deg); }

  43% { transform: rotate(0); }
  100% { transform: rotate(0); }
 }
}
</style>
             