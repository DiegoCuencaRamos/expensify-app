import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './EspenseListFilters';


const ExpenseDashboardPage = () => (
    <div>
        <ExpenseList />
        <ExpenseListFilters />
    </div>
);

export default ExpenseDashboardPage;