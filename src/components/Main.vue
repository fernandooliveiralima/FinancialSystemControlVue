<script setup lang="ts">
/* vue imports */
import {computed, ref, type Ref, onMounted } from 'vue';

/* app imports */
import { items } from '../data/items';
import type { Item } from '../types/Item';
import { useDateFilterStore } from '@/stores/dateFilter';
import { useFormatValuesStore } from '@/stores/formatValues';

/* imports components */
import transactionsList from './transactionsList.vue';
import Header from './Header.vue';

/* variables */
const list = ref(items);
const filteredList: Ref<Array<Item>> = ref([]);
const formatedDate = ref(useDateFilterStore().formatedDate(new Date()));
const formatedValues = ref(useFormatValuesStore());
const hiddenTransactionsListComponent = ref(false);
const title = ref('');
const amount  = ref();





/* vue methods */
onMounted(()=>{
    updateValues()
});

/* app functions */



/* generateId */
const generateRandomId = () => Math.round( Math.random() * 1000 );

/* transactionsTypes */
const transactionsTypes = computed(() => amount.value < 0  ? 'Expense' : 'Income' );


/* updateValues() */
const updateValues = () => {
    const transactionsAmounts = ref(list.value.map((transaction)=> Number(transaction.amount)))
    const Total = ref(transactionsAmounts.value.reduce((accumulator, transaction)=> accumulator + transaction, 0));

    const income = ref(transactionsAmounts.value.filter((value)=> value > 0)
    .reduce((accumulator, value) => accumulator + value, 0));

    const expense = ref(transactionsAmounts.value.filter((value)=> value < 0)
    .reduce((accumulator, value) => accumulator + value, 0));


    return { Total, income, expense }

};



/* submitForm() */
const submitForm = () => {
    if( amount.value === null || title.value === '' ){
        alert('Preencha todos os campos')
        return;
    }

    const transaction = {
        id: generateRandomId(),
        date: new Date(2023, 4, 2),
        category: 'General',
        description: title.value,
        amount: amount.value,
        transactionModel: transactionsTypes.value
    };
    list.value.push(transaction);
    
    /* console.log(`list->`,list.value,
     `Total->`, updateValues().Total.value,
     `income->`, updateValues().income.value,
     `expense->`, updateValues().expense.value
     ); */
    
     title.value = '';
     amount.value = '';
     
     
    
};

</script>

<template>
    <main>
        <h1>Transactions Dashboard</h1>
        <section class="all-transactions">

            <section class="current-balance-section">
                <div class="current-balance">
                    <span>Current Balance</span>
                    <strong>{{ formatedValues.formatValues( updateValues().Total.value ) }}</strong>
                </div>
                <font-awesome-icon icon="fa-solid fa-scale-balanced"></font-awesome-icon>
            </section>

            <section class="income-section">
                <div class="income">
                    <span>Incomes</span>
                    <strong> {{ formatedValues.formatValues( updateValues().income.value ) }}</strong>
                </div>
                <font-awesome-icon icon="fa-solid fa-arrow-up"></font-awesome-icon>
            </section>

            <section class="expense-section">
                <div class="expense">
                    <span>Expenses</span>
                    <strong> {{ formatedValues.formatValues( updateValues().expense.value ) }}</strong>
                </div>
                <font-awesome-icon icon="fa-solid fa-arrow-down"></font-awesome-icon>
            </section>

        </section>

        <form @submit.prevent="submitForm" class="transactions">

            <div class="values">
                <div class="title">
                    <label for="title">Title</label>
                    <input type="text" placeholder="description" v-model="title">
                </div>
                <div class="amount">
                    <label for="amount">Amount</label>
                    <input type="number" placeholder="0,00" v-model="amount">
                </div>
            </div>

            <button type="submit">New Transaction</button>


        </form>


        
        <transactionsList v-if="hiddenTransactionsListComponent"></transactionsList>
    </main>
</template>

<style lang="scss" scoped>
main {
    margin-top: 15%;
    padding: 1%;
    display: flex;
    flex-direction: column;

    h1 {
        font-family: 'Poppins', sans-serif;
    }

    .all-transactions {

        display: flex;
        align-items: center;
        justify-content: space-evenly;

        h1 {
            font-family: 'Poppins', sans-serif;
            letter-spacing: 0.1rem;
            font-size: 1.5rem;
        }

        .current-balance-section {
            background-color: white;
            width: 15%;
            height: 5rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.5%;
            margin-top: 1%;
            box-shadow: 0rem 0rem 0.3rem gray;

            svg {
                color: cornflowerblue;
                font-size: 2rem;
            }

            .current-balance {

                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            span {
                font-family: 'Poppins', sans-serif;
                font-weight: 600;
                color: cornflowerblue;
            }

            strong {
                font-family: 'Roboto', sans-serif;
                font-weight: 600;
                color: cornflowerblue;
            }
        }



        .income-section {
            background-color: white;
            width: 15%;
            height: 5rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.5%;
            margin-top: 1%;
            box-shadow: 0rem 0rem 0.3rem gray;

            svg {
                color: green;
                font-size: 2rem;
            }

            .income {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            span {
                color: green;
                font-family: 'Poppins', sans-serif;
                font-weight: 600;
            }

            strong {
                color: green;
                font-family: 'Roboto', sans-serif;
                font-weight: 600;
            }
        }


        .expense-section {
            background-color: white;
            width: 15%;
            height: 5rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.5%;
            margin-top: 1%;
            box-shadow: 0rem 0rem 0.3rem gray;

            svg {
                color: crimson;
                font-size: 2rem;
            }

            .expense {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            span {
                color: crimson;
                font-family: 'Poppins', sans-serif;
                font-weight: 600;
            }

            strong {
                color: crimson;
                font-family: 'Roboto', sans-serif;
                font-weight: 600;
            }
        }

    }


    .transactions {
        background-color: gray;
        height: 5rem;
        border-radius: 0.5rem;
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .values {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 45rem;

            .title,
            .amount {
                color: black;
                display: flex;
                flex-direction: column;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
            }

            .title {
                color: black;
                display: flex;
                flex-direction: column;
                font-family: Verdana, Geneva, Tahoma, sans-serif;

                /* label */

                /* input */
                input {
                    outline: none;
                    padding: 0.3rem;
                    border: 0.05rem solid #5353db;
                    border-radius: 0.2rem;
                }
            }

            .amount {
                color: black;
                display: flex;
                flex-direction: column;
                font-family: Verdana, Geneva, Tahoma, sans-serif;

                /* label */

                /* input */
                input {
                    outline: none;
                    padding: 0.3rem;
                    border: 0.05rem solid #5353db;
                    border-radius: 0.2rem;
                }
            }


        }




        button {
            background-color: goldenrod;
            color: purple;
            width: 20%;
            padding: 0.5rem;
            border: 0;
            border-radius: 0.3rem;
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            font-weight: 600;
            letter-spacing: 0.1rem;
            transition: 0.2s;

            &:hover {
                color: goldenrod;
                background-color: purple;
            }
        }


    }

    /* bell animation */

   

}
</style>