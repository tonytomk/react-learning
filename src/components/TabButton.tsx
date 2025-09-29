type TabButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: string;
  isSelected: boolean;
};

export default function TabButton({ children, isSelected, ...rest }: TabButtonProps) {
    // function handleClick() {
    //     alert(`You clicked the ${children} button!`);
    // }
  return (
    <li><button className={isSelected ? "active" : '' } {...rest}>{children}</button></li>
  );
}