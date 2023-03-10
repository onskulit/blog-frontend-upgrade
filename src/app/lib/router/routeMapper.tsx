import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/about';
import { MainPage } from 'pages/main';
import { AppRoutes, RoutePath } from 'shared/lib/router';
import { NotFoundPage } from 'pages/notFoundPage';

export const routeMapper: Record<AppRoutes, RouteProps> = {
    main: { path: RoutePath.main, element: <MainPage /> },
    about: { path: RoutePath.about, element: <AboutPage /> },
    notFound: { path: RoutePath.notFound, element: <NotFoundPage /> },
};
