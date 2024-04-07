interface IItem {
  description: string
}

function Item({description}: IItem) {
  return (
    <li>
      <span>{description}</span>
    </li>
  );
}

export default Item;
