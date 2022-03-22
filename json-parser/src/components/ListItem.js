import React from "react";
import classes from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <li className={classes["list-item"]}>
      <h2> {props.name} PurchaseOrderTypeAbbreviation – PurchaseOrderNo </h2>
    </li>
  );
};

export default ListItem;
