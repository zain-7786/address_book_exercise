import { lazy } from 'react';
import { HomePage } from '../Components/HomePage/HomePage';
import Settings from '../Components/Settings/Settings';
import { PATH } from './constants/index';

const HOME = lazy(() => import('../Components/AddressList'));
const DETAIL_MODAL = lazy(() => import('../Components/DetailModal'));
const INFOCARD = lazy(() => import('../Components/InfoCard'));
const SETTING = lazy(() => import('../Components/Settings'));

const appRoutes = [
    {
        path: PATH.HOME,
        component: HomePage,
        exact: true
    },
    {
        path: PATH.SETTINGS,
        component: Settings,
        exact: true
    }
]