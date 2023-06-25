<template>
    <div class="transactions-list">


        <div class="section-month-container">
            <router-link to="/">Go To Home</router-link>

            <div class="month-container-date">
                <button class="previous-month-btn" @click="previousMonth()">Mes Anterior</button>
                <span class="currentDate">{{ currentMonth }} de {{ currentYear }}</span>
                <button class="next-month-btn" @click="nextMonth()">Mes Anterior</button>
            </div>

        </div>

        <section class="transactions-items" v-for="items in filteredListTransactions" :key="items.id">
            <div class="id">
                Id
                <div>{{ items.id }}</div>
            </div>
            <div class="date">
                Date
                <div>{{ getFormatedDate }}</div>
            </div>
            <div class="category">
                Category
                <div>{{ items.category }}</div>
            </div>
            <div class="title">
                Title
                <div>{{ items.description }}</div>
            </div>
            <div class="amount">
                Amount
                <div>{{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(items.amount) }}</div>
            </div>
            <div class="transactionModel">
                TransactionModel
                <div>{{ items.transactionModel }}</div>
            </div>
            <div class="delete">
                Delete
                <font-awesome-icon @click="deleteItem(items.id)" icon="fa-solid fa-trash"></font-awesome-icon>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
/* vue imports */
import { computed, ref, type Ref } from 'vue';
import { RouterLink } from 'vue-router';

/* imports app */
import { items } from '@/data/items';
import { useDateFilterStore } from '@/stores/dateFilter';
import { useFormatValuesStore } from '@/stores/formatValues'
import type { Item } from '@/types/Item';

/* variables */
const list = ref(items);
const getFormatedDate = ref(useDateFilterStore().formatedDate(new Date()));

const filteredList: Ref<Array<Item>> = ref([]);


const currentMonthIndex = ref(new Date().getMonth());
const currentYear = ref(new Date().getFullYear());
const months = ref(['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']);

/* app functions */



const currentMonth = computed(() => {
    return months.value[currentMonthIndex.value];
});

const filteredListTransactions = computed(() => {
    const targetMonth = ref(currentMonthIndex.value);
    return list.value.filter((obj) => {
        const objMonth = ref(new Date(obj.date).getMonth() + 1);
        return objMonth.value === targetMonth.value;
    });
});

const previousMonth = ()=>{
    
    currentMonthIndex.value = (currentMonthIndex.value - 1 + 12) % 12;
    updateFilteredList.value;

};
const nextMonth = ()=>{
    currentMonthIndex.value = (currentMonthIndex.value + 1) % 12;
    updateFilteredList.value;
};

const updateFilteredList = computed(()=>{
    filteredList.value = filteredList.value;
});


const deleteItem = (ID: number)=>{
    const index = list.value.findIndex(item => item.id === ID)
    if (index !== -1) {
      list.value.splice(index, 1)
      

    }
};

</script>

<style lang="scss" scoped>
.transactions-list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 1rem;

    a {
        color: black;
        text-decoration: none;
    }

    .section-month-container {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;

        /* .month-container-date */
        .month-container-date {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 20%;

            /* button */
            button {
                background-color: #047d8f;
                font-weight: 600;
                padding: 0.3rem;
                border: 0;
                border-radius: 0.2rem;
                cursor: pointer;
            }

            /* span */
            span {
                font-size: 1rem;
                font-weight: 600;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
            }
        }
    }

    .transactions-items {
        width: 50%;
        background-color: gray;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem;
        margin-top: 5rem;

        /* class elements */
        .id,
        .date,
        .category,
        .title,
        .amount,
        .transactionModel,
        .delete {
            display: flex;
            flex-direction: column;
            font-weight: 600;
            font-family: Verdana, Geneva, Tahoma, sans-serif;

            /* div */
            div {
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-weight: 500;
            }
        }
    }
}
</style>