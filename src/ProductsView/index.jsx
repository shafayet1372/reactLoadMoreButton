import React from "react";
import { v4 as uuidv4 } from "uuid";
import SingleProductView from "../singleproduct";
export default function Index({ products }) {
  return (
    <div className="row ">
      {products.map((x) => {
        return (
          <div
            className="col-md-3 my-2 d-flex justify-content-center"
            key={uuidv4()}
          >
            <SingleProductView value={x} />
          </div>
        );
      })}
    </div>
  );
}
