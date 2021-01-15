import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixures/expenses';
import ExpenseForm from '../../components/ExpenseForm';

let startEditExpense, startSetExpenses, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startSetExpenses = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
            startEditExpense={startEditExpense} 
            startSetExpenses={startSetExpenses} 
            history={history}
            expense={expenses[0]}
        />
    );
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[0]);
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle startSetExpenses', () => {
    wrapper.find('button').simulate('click');
    expect(startSetExpenses).toHaveBeenLastCalledWith({ id: expenses[0].id });
    expect(history.push).toHaveBeenLastCalledWith('/');
});