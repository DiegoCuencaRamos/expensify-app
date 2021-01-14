import React from 'react';
import { ExpensesSumary } from './ExpensesSumary';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './EspenseListFilters';


const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSumary />
        <ExpenseList />
        <ExpenseListFilters />
    </div>
);

export default ExpenseDashboardPage;