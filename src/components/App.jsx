import ContactsBook from "./contactsbook/Contactsbook";



export const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: '#303235',
      }}>
      <ContactsBook/>
    </div>
  );
};
