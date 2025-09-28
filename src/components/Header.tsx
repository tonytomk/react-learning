const reactDescription = ['Fundamentl', 'Crucilal','Core']
import reactImage from '../assets/react-core-concepts.png';
import './Header.css';
export default function Header() {
  const description = reactDescription[getRandomInt(2)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * (max+ 1));
}
