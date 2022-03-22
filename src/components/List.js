import React from "react";
import ListItem from "./ListItem";
import classes from "./List.module.css";

const List = (props) => {
  const contentItems = props.content.mvPurchaseOrders;
  const jsxCode = contentItems
    .slice(0)
    .reverse()
    .map((item) => {
      return <ListItem item={item} key={item.PurchaseOrderId} />;
    });

  return <ul className={classes.list}>{jsxCode}</ul>;
};

export default List;
