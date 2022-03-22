import React from "react";
import classes from "./ListItem.module.css";

const ListItem = (props) => {
  console.log(props.item);
  return (
    <li className={classes["list-item"]}>
      <h2>
        {props.item.PurchaseOrderTypeAbbreviation} –{" "}
        {props.item.PurchaseOrderNo}
      </h2>
    </li>
  );
};

export default ListItem;
