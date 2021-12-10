import Home from '../views/pages/home';
import Details from '../views/pages/details';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home,
  '/fav': Favorite,
  '/detail/:id': Details,
};

export default routes;
