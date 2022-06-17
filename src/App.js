import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio
          nombreApellido='Shawn Wang'
          pais='Singapore'
          imagen='Shawn'
          cargo='Software Engineer'
          empresa='Amazon'
          testimonio='It&apos;s scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.' 
        />
        <Testimonio
          nombreApellido='Sarah Chima'
          pais='Nigeria'
          imagen='Sarah'
          cargo='Software Engineer'
          empresa='ChatDesk'
          testimonio='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.' 
        />
        <Testimonio
          nombreApellido='Emma Bostian'
          pais='Sweden'
          imagen='Emma'
          cargo='Software Engineer'
          empresa='Spotify'
          testimonio='I&apos;ve always struggled with learning JavaScript. I&apos;ve taken many courses but freeCodeCamp&apos;s course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.' 
        />
      </div>
    </div>
  );
}

export default App;
