import { Link } from 'react-router-dom';

export const navBarConfig = [
  {
    key: 1,
    component: Link,
    description: 'New Question',
    className: 'navbarItem',
    to: '/new-question',
    needsAuth: true,
  },
  {
    key: 2,
    component: Link,
    description: 'Navbar Item 01',
    className: 'navbarItem',
    to: '/',
    needsAuth: true,
  },
  {
    key: 3,
    component: Link,
    description: 'Navbar Item 02',
    className: 'navbarItem',
    to: '/',
    needsAuth: false,
  },
];