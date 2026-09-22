import { createRootRoute } from '@tanstack/react-router';
import { Route as IndexRoute } from './routes/index';
import { Route as PrivacyRoute } from './routes/privacy';
import { Route as RootRoute } from './routes/__root';

const routeTree = RootRoute.addChildren([IndexRoute, PrivacyRoute]);
export { routeTree };
