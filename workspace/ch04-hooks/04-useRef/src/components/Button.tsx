import './Button.css';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { 
  children: string;
  // type?: 'button' | 'submit' | 'reset';
  // onClick: () => void;
  bgColor: string;
}

const Button = ({children, type="button", bgColor, onClick:handleClick, ...props}: ButtonProps) => {
  return (
    <button {...props} className="rounded-button" type={type} style={{...props.style, background: bgColor}}
      onClick={handleClick}>{children}</button>
  );
}

export default Button;
