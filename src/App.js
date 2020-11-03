
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';
import Widgets from './Widgets';

function App() {
  const [{user},dispatch]=useStateValue();
  return (
    //BEM naming conversion
    <div className="App">
      {!user?(<Login/>):(
        <>
        <Header/>
      
        <div class="app__body">
          <Sidebar/>
          <Feed/>
          <Widgets />
        </div>
      </>
      )}
    </div>
    
      
  );
}

export default App;
