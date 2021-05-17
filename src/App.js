import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
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
        <Route path="/edit-product/:id">
          <EditProduct />
        </Route>
        <Route path="/products/:id">
          <ProductDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
