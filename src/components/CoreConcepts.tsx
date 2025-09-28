export default function CoreConcepts(props: { title?: string, description?: string, image?: string }) {
  return (
  <li>
    <img src={props.image} alt="Stylized atom" />
    <h3>{props.title}</h3>
    <p>{props.description}</p> 
  </li>
  );
}
