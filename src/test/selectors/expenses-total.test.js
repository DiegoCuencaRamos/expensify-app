import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly app up a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(expenses[0].amount)
});

test('shpould correctly add up multiple expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});