import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '', 
        sortBy: 'date', 
        startDate: moment().startOf('month'),
        startDateId: `${moment().startOf('month').valueOf()}`,
        endDate: moment().endOf('month'),
        endDateId: `${moment().endOf('month').valueOf()}`
    });
});

test('should set sort by amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should setsort by date', () => {
    const currentState = {
        text: '', 
        sortBy: 'amount', 
        startDate: undefined,
        startDateId: undefined,
        endDate: undefined,
        endDateId: undefined
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'text' });
    expect(state.text).toBe('text');
});

test('should set stratDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment().startOf('month') });
    expect(state.startDate).toEqual(moment().startOf('month'));
});

test('should set endDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment().endOf('month') });
    expect(state.endDate).toEqual(moment().endOf('month'));
});