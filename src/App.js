import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AddProduct from './pages/AddProduct';
import NotFound from './pages/NotFound';
import Products from './pages/Products';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Products />
        </Route>
        <Route path="/add-product">
          <AddProduct />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
