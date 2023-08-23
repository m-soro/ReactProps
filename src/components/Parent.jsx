import Child from "./Child";

export default function Parent(props) {
  return (
    <div className="parent">
      <Child lastName={props.lastName} />
      <h1>Parent Component {props.lastName}</h1>
    </div>
  );
}
