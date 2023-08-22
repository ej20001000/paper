import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div id="stats"></div>
      <div id="main">
        <div className="container">
          <div className="canvas-wrapper">
            <canvas id="output"></canvas>
            <video id="video" playsinline>
            </video>
          </div>
          <div id="scatter-gl-container-left"></div>
        </div>
        <div id="scatter-gl-container-right"></div>
      </div>
    </>

  );
}

export default App;
