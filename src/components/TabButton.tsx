export default function TabButton(props: { children?: string, onSelect: any, isSelected: boolean }) {
    // function handleClick() {
    //     alert(`You clicked the ${props.children} button!`);
    // }
  return (
    <li><button className={props.isSelected ? "active" : '' } onClick={props.onSelect}>{props.children}</button></li>
  );
}