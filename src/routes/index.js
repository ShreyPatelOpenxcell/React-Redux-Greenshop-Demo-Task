import { lazy } from 'react';

export const ROUTES = [
    { path: '/aboutUs', element: lazy(() => import('src/pages/aboutUs')) },
    { path: '/blogs', element: lazy(() => import('src/pages/blogs')) },
    { path: '/blogDetails/:id', element: lazy(() => import('src/pages/blogDetails')) },
    { path: '/cart', element: lazy(() => import('src/pages/cart')) },
    { path: '/products', element: lazy(() => import('src/pages/products')) },
    { path: '/login', element: lazy(() => import('src/pages/login')) },
    { path: '/register', element: lazy(() => import('src/pages/register')) },
    { path: '/forgotPassword', element: lazy(() => import('src/pages/forgotPassword')) },
    { path: '/productDetails/:id', element: lazy(() => import('src/pages/productDetails')) },
    { path: '/checkout', element: lazy(() => import('src/pages/checkout')) },
    { path: '/contactUs', element: lazy(() => import('src/pages/contactUs')) },
    { path: '*', element: lazy(() => import('src/pages/404')) }
]