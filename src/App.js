import 'bootstrap/dist/css/bootstrap.css';
import './assets/index.scss';
import List from "./Component/list";
function App() {
  return (
    <div className="app">
      <header className='header container text-secondary'>
          Trello analogue
      </header>
      <main className='main'>
        <List/>
      </main>
      <footer className='footer container text-secondary'>П-49 Трот Никита, Валов Семен, Угрюмов Максим</footer>
    </div>
  );
}

export default App;
