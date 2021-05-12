import { Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound';
import AddProduct from './pages/AddProduct';
import Layout from './components/UI/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <p>fo eoldal</p>
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
