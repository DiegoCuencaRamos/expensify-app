import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// load a locale
numeral.register('locale', 'es', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: '€'
    }
});

// switch between locales
numeral.locale('es');

export const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__subtitle">{numeral(amount / 100).format('0,0[.]00 $')}</span>   
        </div>
        <h3 className="list-item__data">{moment(createdAt).format('MMMM Do, YYYY')}</h3>
    </Link>
);

export default ExpenseListItem;