import { Link } from "react-router-dom";

export default function Example1() {
  return (
    <div id="ExampleSchedule1">
      <h2>ExampleSchedule</h2>
      <p>
        Notice the url has been changed. Try refreshing the page see what
        happens.
      </p>
      <Link to="/">home</Link>
    </div>
  );
}