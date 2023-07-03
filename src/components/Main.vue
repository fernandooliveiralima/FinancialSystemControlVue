<script setup lang="ts">
/* vue imports */
import { computed, ref, onMounted } from "vue";

/* app imports */
import { items } from "../data/items";
import { useFormatValuesStore } from "@/stores/formatValues";

/* imports components */
import transactionsList from "./transactionsList.vue";

/* variables */
const list = ref(items);
const formatedValues = ref(useFormatValuesStore());
const hiddenTransactionsListComponent = ref(false);
const title = ref("");
const amount = ref();
const showModal = ref(false);

const modalElement = ref('modal-element');

/* vue methods */
onMounted(() => {
  updateValues();
});

/* app functions */

/* generateId */
const generateRandomId = () => Math.round(Math.random() * 1000);

/* transactionsTypes */
const transactionsTypes = computed(() =>
  amount.value < 0 ? "Expense" : "Income"
);

/* updateValues() */
const updateValues = () => {
  const transactionsAmounts = ref(
    list.value.map((transaction) => Number(transaction.amount))
  );
  const Total = ref(
    transactionsAmounts.value.reduce(
      (accumulator, transaction) => accumulator + transaction,
      0
    )
  );

  const income = ref(
    transactionsAmounts.value
      .filter((value) => value > 0)
      .reduce((accumulator, value) => accumulator + value, 0)
  );

  const expense = ref(
    transactionsAmounts.value
      .filter((value) => value < 0)
      .reduce((accumulator, value) => accumulator + value, 0)
  );

  return { Total, income, expense };
};

/* submitForm() */
const submitForm = () => {
  if (amount.value === null || title.value === "") {
    alert("Preencha todos os campos");
    return;
  }

  const transaction = {
    id: generateRandomId(),
    date: new Date(),
    category: "General",
    description: title.value,
    amount: amount.value,
    transactionModel: transactionsTypes.value,
  };
  list.value.push(transaction);

  title.value = "";
  amount.value = "";

  toggleModal();
};

const toggleModal = ()=>{
    showModal.value = !showModal.value;
};
</script>

<template>
  <main class="main">
    <h1 class="h1-main">Transactions Dashboard</h1>
    <section class="all-transactions">
      <section class="current-balance-section">
        <div class="current-balance">
          <span class="span-current-balance">Current Balance</span>
          <strong class="strong-current-balance">{{
            formatedValues.formatValues(updateValues().Total.value)
          }}</strong>
        </div>
        <font-awesome-icon
          icon="fa-solid fa-scale-balanced"
        ></font-awesome-icon>
      </section>

      <section class="income-section">
        <div class="income">
          <span class="span-income-section">Incomes</span>
          <strong class="strong-income-section">
            {{
              formatedValues.formatValues(updateValues().income.value)
            }}</strong
          >
        </div>
        <font-awesome-icon icon="fa-solid fa-arrow-up"></font-awesome-icon>
      </section>

      <section class="expense-section">
        <div class="expense">
          <span class="span-expense-section">Expenses</span>
          <strong class="strong-expense-section">
            {{
              formatedValues.formatValues(updateValues().expense.value)
            }}</strong
          >
        </div>
        <font-awesome-icon icon="fa-solid fa-arrow-down"></font-awesome-icon>
      </section>
    </section>

    <form @submit.prevent="submitForm" class="transactions">
      <div class="values">
        <div class="title">
          <label for="title">Title</label>
          <input
            class="input-title"
            type="text"
            placeholder="description"
            v-model="title"
          />
        </div>
        <div class="amount">
          <label for="amount">Amount</label>
          <input
            class="input-amount"
            type="number"
            placeholder="0,00"
            v-model="amount"
          />

          <div class="info-amount">
            <div class="positive">(positive) = Income</div>
            <div class="negative">(negative - ) = Expense</div>
          </div>
        </div>
      </div>

      <button class="btn-transactions" type="submit">New Transaction</button>
    </form>

    <div :class="{ 'modal-element': modalElement, 'hidden-modal': !showModal }">
      <font-awesome-icon class="success-transaction-icon" icon="fa-solid fa-circle-check"></font-awesome-icon>
      <span class="span-transaction">Transaction Added!</span>
      <small class="small-transactions">Go To <span class="span-smallText">Transactions </span>to see your transactions</small>
      <button @click="toggleModal()" class="btn-closeModal">Close Modal</button>
    </div>

    <transactionsList v-if="hiddenTransactionsListComponent"></transactionsList>

  </main>

</template>

<style lang="scss" scoped>
    .hidden-modal{
        display: none;
    }
</style>
