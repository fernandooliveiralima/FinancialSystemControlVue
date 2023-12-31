<template>
    <div class="transactions-list">

        <div class="section-month-container">
            <router-link class="section-month-container-link" to="/">Go To Home</router-link>

            <div class="month-container-date">
                <button class="previous-month-btn" @click="previousMonth()">Previous Month</button>
                <span class="currentDate">{{ currentMonth }} de {{ currentYear }}</span>
                <button class="next-month-btn" @click="nextMonth()">Next Month</button>
            </div>

        </div>

        <section class="transactions-items" v-for="items in filteredListTransactions" :key="items.id">
            <div class="id">
                Id
                <div class="elements">{{ items.id }}</div>
            </div>
            <div class="date">
                Date
                <div class="elements">{{ getFormatedDate }}</div>
            </div>
            <div class="category">
                Category
                <div class="elements">{{ items.category }}</div>
            </div>
            <div class="title">
                Title
                <div class="elements">{{ items.description }}</div>
            </div>
            <div class="amount">
                Amount
                <div class="elements">{{ formatedValues.formatValues(items.amount) }}</div>
            </div>
            <div class="transactionModel">
                TransactionModel
                <div class="elements">{{ items.transactionModel }}</div>
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
const formatedValues = ref(useFormatValuesStore());
const currentMonthIndex = ref(new Date().getMonth());
const currentYear = ref(new Date().getFullYear());

const months = ref(['January', 'February', 'March', 'April', 'May', 'Juny', 'July', 'August', 'September', 'October', 'November', 'December']);

/* app functions */

const currentMonth = computed(() => {
    return months.value[currentMonthIndex.value];
});

const filteredListTransactions = computed(() => {
    const targetMonth = ref(currentMonthIndex.value);
    return list.value.filter((obj) => {
        const objMonth = ref(new Date(obj.date).getMonth());
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

<style lang="scss" scoped></style>
