import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSumary } from '../../components/ExpensesSumary';

test('should render ExpenseSumary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSumary expenseCount={1} expensesTotal={2350} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSumary with one expense or more', () => {
    const wrapper = shallow(<ExpensesSumary expenseCount={3} expensesTotal={10250} />);
    expect(wrapper).toMatchSnapshot();
});