import { Link } from "react-router-dom";

interface IItem {
  description: string;
  route: string;
}

function Item({ description, route }: IItem) {
  return (
    <li>
      <Link to={route}>
        <span>{description}</span>
      </Link>
    </li>
  );
}

export default Item;
