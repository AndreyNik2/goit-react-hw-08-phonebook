import RegisterForm from 'components/contactsbook/RegistrationmForm/RegisterForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';


export default function Register() {
  return (
    <HelmetProvider>
      <main>
        <div>
          <Helmet>
            <title>Registration</title>
          </Helmet>
          <RegisterForm />
        </div>
      </main>
    </HelmetProvider>
  );
}
