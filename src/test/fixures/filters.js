import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    startDateId: '0',
    endDateId: '10',
};

const altFilters = {
    text: 'bills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days'),
    startDateId: `${moment(0).valueOf()}`,
    endDateId: `${moment(0).add(3, 'days').valueOf()}`,
};

export { filters, altFilters };