import React, { useState } from "react";
import classes from "./ListItem.module.css";
import ListItemInfo from "./ListItemInfo";

// thelei state: kai me ena ternary tha kanei render

const ListItem = (props) => {
  const [infoIsShown, setInfoIsShown] = useState(false);

  const stateHandler = () => {
    setInfoIsShown(!infoIsShown);
  };

  return (
    <li className={classes["list-item"]}>
      <div className={classes.container}>
        <h2>
          {props.item.PurchaseOrderTypeAbbreviation} –{" "}
          {props.item.PurchaseOrderNo}
        </h2>
        <button onClick={stateHandler} className={classes["item-btn"]}>
          {" "}
          Info
        </button>
      </div>
      {infoIsShown ? <ListItemInfo item={props.item} /> : <div></div>}
    </li>
  );
};

export default ListItem;
