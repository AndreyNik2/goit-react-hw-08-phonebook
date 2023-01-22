
import LoginForm from 'components/contactsbook/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';


export default function Login() {
  return (
    <HelmetProvider>
      <main>
        <div>
          <Helmet>
            <title>Login</title>
          </Helmet>
          <LoginForm />
        </div>
      </main>
    </HelmetProvider>
  );
}
