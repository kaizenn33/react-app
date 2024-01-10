import { Fragment } from "react";
function ListGroup() {
  return (
    <Fragment>
        <h1>List</h1>
        <ul className="list-group">
          <li className="list-group-item">Item One</li>
          <li className="list-group-item">Item Two</li>
          <li className="list-group-item">Item Three</li>
        </ul>
    </Fragment>
  );
}
export default ListGroup;
