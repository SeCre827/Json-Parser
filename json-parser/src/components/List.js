import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  const contentItems = props.content.mvPurchaseOrders;
  console.log(typeof contentItems);
  console.log(contentItems);
  return (
    <ul>
      <ListItem name={"1: "} />
      <ListItem name={"2: "} />
    </ul>
  );
};

export default List;
