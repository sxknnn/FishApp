import './globals.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import {Home} from './_root/pages';
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from './_root/RootLayout';

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
          {/* <Route path="/" element={<Navigate to="/sign-in" replace />} /> */}
        </Route>

      {/*Private*/}
      <Route element={<RootLayout />}>
      <Route index element={< Home />} />
      </Route>
      </Routes>

    </main>

  )
}

export default App;
