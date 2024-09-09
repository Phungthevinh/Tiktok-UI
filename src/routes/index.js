//Layouts
import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

import { Component } from 'react';
//public Routes
const publicRoutes = [
    { path: '/', Component: Home },
    { path: '/following', Component: Following },
    { path: '/profile', Component: Profile },
    { path: '/upload', Component: Upload, Layout: HeaderOnly },
    { path: '/search', Component: Search, Layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
