import database from '../firebase/firebase';

// ADD_EXPENSE
const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});
  
const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_EXPENSES
const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses')
            .once('value')
            .then((snapshot) => {
                const expenses = [];

                snapshot.forEach((child) => {
                    expenses.push({
                        id: child.key,
                        ...child.val()
                    });
                });

                dispatch(setExpenses(expenses));
            });
    };
};
 
export { addExpense, startAddExpense, removeExpense, editExpense, setExpenses, startSetExpenses };