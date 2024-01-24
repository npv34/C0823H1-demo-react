import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarApp from "./layout/Navbar/NavbarApp";
import UserList from "./components/users/UserList/UserList";
function App() {
  return (
    <>
        <div className="container">
            <NavbarApp />
            <UserList/>
        </div>
    </>
  );
}

export default App;
