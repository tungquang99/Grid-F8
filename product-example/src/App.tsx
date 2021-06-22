import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from "./app/Components/Container";

function App() {
  return (
    <div className="container-lg">
      <h1 className="text-center my-5">Quản lý người dùng</h1>
        <Container/>
    </div>
  );
}

export default App;
