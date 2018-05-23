import moment from "moment/moment";

export default [{
    id: '1',
    description: 'Rent',
    note: '',
    amount: 200,
    createdAt: 0
}, {
    id: '2',
    description: 'Internet',
    note: '',
    amount: 400,
    createdAt: moment(0).subtract(3, 'days').valueOf()
}, {
    id: '3',
    description: 'Spotify',
    note: '',
    amount: 100,
    createdAt: moment(0).add(5, 'days').valueOf()
}];

