import './App.css';

const App = () => {
  return (
    <div className='container'>
      <nav>
        <h1 className='title'>Pomodoro Timer</h1>
      </nav>
      <div className='child-container'>
        <div className='break'>
          <h3 id='break-label'>Break Length</h3>
          <div className='control'>
            <button class='inline' id='break-decrement'>
              <i className='fas fa-minus'></i>
            </button>
            <h3 class='inline' id='break-length'>
              5
            </h3>
            <button class='inline' id='break-increment'>
              <i className='fas fa-plus'></i>
            </button>
          </div>
        </div>
        <div className='session'>
          <h3 id='session-label'>Session Length</h3>
          <div className='control'>
            <button class='inline' id='session-decrement'>
              <i className='fas fa-minus'></i>
            </button>
            <h3 class='inline' id='session-length'>
              25
            </h3>
            <button class='inline' id='session-increment'>
              <i className='fas fa-plus'></i>
            </button>
          </div>
        </div>
        <div class='timer'>
          <h3 id='timer-label'>Session</h3>
          <h3 id='time-left'>25:00</h3>
          <div className='control'>
            <button id='start_stop'>
              <i className='fas fa-play-circle fa-2x'></i>
              <i className='fas fa-pause-circle fa-2x'></i>
            </button>
            <button id='reset'>
              <i class='fas fa-sync-alt fa-2x'></i>
            </button>
          </div>
        </div>
      </div>
      <footer>Built by Kshitij Girkar</footer>
    </div>
  );
};

export default App;
