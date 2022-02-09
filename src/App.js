import nodeImage from './image/node.png';
import pythonImage from './image/python.png';
import unityImage from './image/unity.png';
import gitImage from './image/git.png';
import './App.css';

function App() {
  return (
    <div className="grid-bottom">
      <div>
      </div>
      <div className="grid-bottom-in">
        <div>
          <img src={nodeImage} className="App-logo" alt="description of image" />
        </div>
        <div>
          <h1>test</h1>
        </div>
        <div>
          <h1>test</h1>
        </div>
        <div>
          <img src={pythonImage} className="App-logo" alt="description of image" />
        </div>
        <div>
          <img src={unityImage} className="App-logo" alt="description of image" />
        </div>
        <div>
          <h1>test</h1>
        </div>
        <div>
          <h1>test</h1>
        </div>
        <div>
          <img src={gitImage} className="App-logo" alt="description of image" />
        </div>


      </div>
      <div>
      </div>


    </div>
  )
}

export default App;
