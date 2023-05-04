import moment from 'moment';

export const getCurrentDate = (): string => moment().format('MMMM Do YYYY');
