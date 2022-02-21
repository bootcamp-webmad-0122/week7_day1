import './App.css'
import Button from './components/Button/Button';
import Navbar from './components/Navbar/Navbar'
import StudentCard from './components/StrudentCard/StudentCard';
import Player from 'react-player'


function App() {
  return (
    <>
      <Navbar />
      <h1>Hola soy mi App</h1>
      <hr />

      <Button
        aspect="black"
        text="Conócenos"
        link="/conocenos"
      />

      <Button
        aspect="corporative"
        text="Ir a la web"
        link="https://www.ironhack.com"
      />

      <Button
        aspect="transparent"
        text="Ver campus"
        link="/nuestros-campuses"
      />

      <h2>Nuestros alumnxs</h2>

      <StudentCard
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.1279061671.1642032000"
        name="Sara García"
        age="33"
        details={{ campus: 'Madrid', cohort: 'Web dev', year: 2022 }}
      />

      <StudentCard
        image="https://ichef.bbci.co.uk/news/976/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg"
        name="Raúl Whatever"
        age="33"
        details={{ campus: 'Madrid', cohort: 'Web dev', year: 2022 }}
      />

      <StudentCard
        image="https://media.gettyimages.com/photos/closeup-smiling-male-leader-wearing-eyeglasses-picture-id1179627340?s=612x612"
        name="Iñigo Orbiso"
        age="33"
        details={{ campus: 'Madrid', cohort: 'Web dev', year: 2022 }}
      />

      <StudentCard
        image="https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-isolated-gray-background-joyful-cheerful-men-crossed-hands-studio-shot-172868988.jpg"
        name="Manu Leon"
        age="33"
        details={{ campus: 'Madrid', cohort: 'Web dev', year: 2022 }}
      />

      <hr />

      <h2>Y ahora un vídeo!</h2>
      <Player url="https://www.youtube.com/watch?v=l8-cCnDDriI" playing="true" muted="true" />

    </>

  )
}

export default App;
