<script lang="ts" setup>
/* vue imports */
import { ref, reactive } from 'vue'
import { RouterLink } from 'vue-router'
/* Pinia Stores */


/* project imports */




/* variables */



</script>

<template>
    <header>

        <section class="logo">
            <div class="icon-money">&#128184;</div>
            <h3>Financial System</h3>
        </section>

        <section class="user-transactions">

            <div class="transactions-section">
                <font-awesome-icon icon="fa-solid fa-bell"></font-awesome-icon>
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
    }

    /* main */
}
</style>
             