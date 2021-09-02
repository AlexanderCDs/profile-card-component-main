/** 
* @author: Alexander Chi
* @description:
* @date: 01/Septiembre/2021
**/   
import './App.scss';
import {CardProfile} from './components/cards';
import pattern from './assets/svgs/bg-pattern-card.svg';
import victor from './assets/images/image-victor.jpg';

function App() {
  return (
    <div className="container">
      <div className="content">
        <CardProfile 
          pattern={pattern}
          photo={victor}
          name={`Victor Crest`}
          years={`26`}
          city={`London`}
          followers={`80K`}
          likes={`803K`}
          photos={`1.4K`}/>
      </div>
    </div>
  );
}

export default App;
