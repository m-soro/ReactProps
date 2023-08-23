import Parent from "./Parent";
export default function GrandParent(props) {
  return (
    <div className="grand-parent">
      <Parent lastName={props.lastName} />
      <h1>GrandParent Component {props.lastName}</h1>
    </div>
  );
}
