import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from 'themes/GlobalStyle';
import Auth from 'views/Auth/Auth';
import NotFound from 'views/NotFound/NotFound';
import Root from 'views/Root/Root';
import SignIn from 'views/SignIn/SignIn';
import SignUp from 'views/SignUp/SignUp';

import store from 'store/store';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route element={<Auth />}>
          <Route path="/" element={<Root />} />
          <Route path="/boards/:id/:name">
            <Route index element={<Root />} />
            <Route path="tasks" element={<Root />} />
            <Route path="notes" element={<Root />} />
            <Route path="settings" element={<Root />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

export default App;
