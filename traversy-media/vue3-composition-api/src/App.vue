<template>
  <Header />
  <div class="container">
    <!-- `+` passes the strings as numbers -->
    <Balance :total="+total" />
    <IncomeExpenses :income="+income" :expenses="+expenses" />
    <TransactionList @transactionDeleted="handleTransactionDeleted" :transactions="transactions" />
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
  </div>
</template>

<!-- Don't need to explicitly define `export default { components: { ... } } w/ `<script setup>` -->
<script setup>
  import Header from './components/Header.vue';
  import Balance from './components/Balance.vue';
  import IncomeExpenses from './components/IncomeExpenses.vue';
  import TransactionList from './components/TransactionList.vue';
  import AddTransaction from './components/AddTransaction.vue';

  import { useToast } from 'vue-toastification';
  // Wrap w/ `ref' for anything you want to make reactive 
  import { ref, computed, onMounted } from 'vue';

  const toast = useToast();

  const transactions = ref([]);

  onMounted(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (savedTransactions) transactions.value = savedTransactions;
  });

  const total = computed(() => {
    /* `reduce()` reduces array elements into single value (left -> right): 
    `acc` (accumulator) is previous state, `transaction` is current state, 0 is default starting val */
    return transactions.value.reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);
  });

  const income = computed(() => {
    /* `reduce()` reduces array elements into single value (left -> right): 
    `acc` (accumulator) is previous state, `transaction` is current state, 0 is default starting val */
    return transactions.value
      .filter(transaction => transaction.amount > 0)
      .reduce((acc, transaction) => { return acc + transaction.amount; }, 0)
      // Convert to 2 decimal places
      .toFixed(2);
  });

  const expenses = computed(() => {
    /* `reduce()` reduces array elements into single value (left -> right): 
    `acc` (accumulator) is previous state, `transaction` is current state, 0 is default starting val */
    return transactions.value
      .filter(transaction => transaction.amount < 0)
      .reduce((acc, transaction) => { return acc + transaction.amount; }, 0)
      // Convert to 2 decimal places
      .toFixed(2);
  });

  const handleTransactionSubmitted = transactionData => {
    transactions.value.push({
      id: generateUniqueId(),
      text: transactionData.text,
      amount: transactionData.amount
    });
    saveTransactions();
    toast.success('Transaction added successfully')
  }

  const generateUniqueId = () => {
    return Math.floor(Math.random() * 1000000);
  }

  const handleTransactionDeleted = id => {
    transactions.value = transactions.value
      .filter(transaction => transaction.id !== id);
    saveTransactions();
    toast.success('Transaction deleted successfully')
  }

  const saveTransactions = () => {
    localStorage.setItem('transactions', JSON.stringify(transactions.value))
  }
</script>