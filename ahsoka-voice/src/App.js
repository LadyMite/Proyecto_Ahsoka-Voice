import AchievementList from './components/achievement/AchievementList';
import AchievementAdd from './components/achievement/AchievementAdd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Routes   } from 'react-router-dom';
//import App from './App';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<AchievementList/>}></Route>
            <Route exact path='/añadir' element={<AchievementAdd/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
