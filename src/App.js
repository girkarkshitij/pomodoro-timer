import './App.css';

const App = () => {
  return (
    <div class='container'>
      <h1>Pomodoro Timer</h1>
      <div>
        <h3 id='break-label'>Break Length</h3>
        <button id='break-decrement'>-</button>
        <h3 id='break-length'>5</h3>
        <button id='break-increment'>+</button>
        <h3 id='session-label'>Session Length</h3>
        <button id='session-decrement'>-</button>
        <h3 id='session-length'>25</h3>
        <button id='session-increment'>+</button>
      </div>
      <div>
        <h3 id='timer-label'>Session</h3>
        <h3 id='time-left'>25:00</h3>
      </div>
      <div>
        <button id='start_stop'>Start Stop</button>
        <button id='reset'>Reset</button>
      </div>
      <footer>Built by Kshitij Girkar</footer>
    </div>
  );
};

export default App;
