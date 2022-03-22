import React from "react";
import classes from "./ListItemInfo.module.css";

const ListItemInfo = (props) => {
  const purchaseOrderDetails = props.item.PurchaseOrderDetails;
  console.log(purchaseOrderDetails);
  const jsxCode = purchaseOrderDetails.map((item) => {
    return (
      <tr key={item.PurchaseOrderRowDetailID}>
        <td>{item.PurchaseOrderRowProductSKU} </td>
        <td>{item.PurchaseOrderRowQuantity} </td>
        <td>{item.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount} </td>
        <td>{item.PurchaseOrderRowTotalAmount} </td>
      </tr>
    );
  });

  return (
    <div>
      <table className={classes.tableClass}>
        <thead>
          <tr>
            <th>Product Sku</th>
            <th>Quantity Ordered</th>
            <th>Unit Price</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>{jsxCode}</tbody>
      </table>
    </div>
  );
};

export default ListItemInfo;
