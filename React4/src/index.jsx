import ReactDOM from 'react-dom';
import React from 'react';
import UsersList from './UsersList.jsx.js';

import './index.scss';

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'One',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Two',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Three',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Four',
  },
  {
    id: 'id-4',
    age: 21,
    name: 'Five',
  },
  {
    id: 'id-5',
    age: 17,
    name: 'Six',
  },
  {
    id: 'id-6',
    age: 18,
    name: 'Seven',
  },
  {
    id: 'id-7',
    age: 45,
    name: 'Eight',
  },
  {
    id: 'id-8',
    age: 45,
    name: 'Nine',
  },
  {
    id: 'id-9',
    age: 45,
    name: 'Ten',
  },
  {
    id: 'id-10',
    age: 45,
    name: 'Eleven',
  },
  {
    id: 'id-11',
    age: 45,
    name: 'Twentee',
  },
  {
    id: 'id-12',
    age: 32,
    name: 'Thirty',
  },
];

ReactDOM.render(<UsersList users={users} />, document.getElementById('root'));
