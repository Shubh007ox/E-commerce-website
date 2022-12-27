import { Switch, Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './components/store/auth-context';
import Layout from './components/Layout/Layout';
import UserProfile from './components/zuseLess/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import One from './pages/About';
import Contact from './pages/Conntact';
import StorePage from './pages/store';
import Product from './pages/Product1';
import Carts from './components/UI/Cart';
function App() {
  const authCtx = useContext(AuthContext);


  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && (<Route path='/auth'>
          <AuthPage />
        </Route>)}
        {/* <Route path='/profile'>
        {authCtx.isLoggedIn && <UserProfile />}
        {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route> */}
        <Route path="/one">
          {authCtx.isLoggedIn && <One />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/contact">
          {authCtx.isLoggedIn && <Contact />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/store" exact>
          {authCtx.isLoggedIn && <StorePage />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path={"/store/:productId"}>
          <Product />
        </Route>
        <Route path="/cart">
          {authCtx.isLoggedIn && <Carts />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
