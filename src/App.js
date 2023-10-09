import 'bootstrap/dist/css/bootstrap.css';
import './assets/index.scss';
import List from "./Component/list";
function App() {
  return (
    <div className="app">
      <header className='header container'>header</header>
      <main className='main'>
        <List/>
      </main>
      <footer className='footer container'>footer</footer>
    </div>
  );
}

export default App;
