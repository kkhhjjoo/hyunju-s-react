const btnBg = {
  gray: 'bg-gray-500',
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  white: 'bg-white-500',
} as const; //모든 속성이 readonly가 되고 각 속성의 타입이 string이 아니라 리터럴로 추론됨

const btnColor = {
  black: 'text-black',
  red: 'text-red',
  blue: 'text-blue',
  white: 'text-white'
} as const;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  // color?: string;
  // bg?: string;
  //typeof btnBg: btnBg의 타입을 반환
  //keyof typeof btnBg: btnBg의 타입의 키들을 유니온으로 반환
  color?: keyof typeof btnColor;
  bg?: keyof typeof btnBg;
}

function Button({ children, type = 'button', bg = 'gray', color = 'black', ...rest }: ButtonProps) {
  console.log(bg, btnBg[bg], `bg-${bg}-500`); //`bg-${bg}-500`이건 안됨
  return (
    <button type={ type } className={`${btnBg[bg]} border border-black/30 ${btnColor[color]} py-2 px-4 text-center no-underline inline-block text-base my-1 mx-0.5 cursor-pointer rounded-md`} { ...rest }>{ children }</button>
  );
}

export default Button;