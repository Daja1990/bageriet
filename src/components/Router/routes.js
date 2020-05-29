import Forside from '../Pages/Forside/Forside';
import Kontakt from '../Pages/Kontakt/Kontakt';
import Produkter from '../Pages/Produkter/Produkter';
import Login from '../Pages/Login/Login';

const routes = [
    {
        name: 'Forside',
        path: '/',
        exact: true,
        component: Forside
    },
    {
        name: 'Produkter',
        path: '/Produkter',
        exact: true,
        component: Produkter
    },
    {
        name: 'Kontakt',
        path: '/Kontakt',
        exact: true,
        component: Kontakt
    },
    {
        name: 'Login',
        path: '/Login',
        exact: true,
        component: Login
    }
];

export default routes;