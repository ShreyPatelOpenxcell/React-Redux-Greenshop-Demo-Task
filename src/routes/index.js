import { lazy } from 'react';

export const ROUTES = [
    { path: '/', element: lazy(() => import('src/pages/home')) },
    { path: '/aboutus', element: lazy(() => import('src/pages/aboutUs')) },
    { path: '/blogs', element: lazy(() => import('src/pages/blogs')) },
    { path: '/blogDetails/:id', element: lazy(() => import('src/pages/blogDetails')) },
    { path: '/cart', element: lazy(() => import('src/pages/cart')) },
    { path: '/products', element: lazy(() => import('src/pages/products')) },
    //{ path: '/productDetails/:id', element: lazy(() => import('src/pages/productDetails')) },
    { path: '/checkout', element: lazy(() => import('src/pages/checkout')) },
    { path: '/contactus', element: lazy(() => import('src/pages/contactUs')) },
    { path: '*', element: lazy(() => import('src/pages/404')) }
]