import { lazy } from 'react';

export const ROUTES = [
    { path: '/' , element: lazy(() => import('src/pages/home'))},
    { path: '/aboutus' , element: lazy(() => import('src/pages/aboutUs'))},
    { path: '/blogs' , element: lazy(() => import('src/pages/blogs'))},
    { path: '/cart' , element: lazy(() => import('src/pages/cart'))},
    { path: '/category' , element: lazy(() => import('src/pages/category'))},
    { path: '/checkout' , element: lazy(() => import('src/pages/checkout'))},
    { path: '/contactus' , element: lazy(() => import('src/pages/contactUs'))},
    { path: '*' , element: lazy(() => import('src/pages/404'))}
]