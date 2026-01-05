function Title(props: {title: string}){
// function Title({title}: {title: string}){
  return (
    <div>
      <h1>{props.title}</h1>
      <hr />
    </div>
  );
}

export default Title;