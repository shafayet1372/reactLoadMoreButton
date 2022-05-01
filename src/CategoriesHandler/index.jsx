import React from "react";
import { v4 as uuidv4 } from "uuid";
export default function Index({ categoris, getCategory, categoryHandler }) {
  console.log(categoris);
  return (
    <div className="row">
      <div className="col-md-4 col-lg-4 col-sm-4">
        <form action="">
          <select
            className="form-control-sm form-control"
            id="exampleFormControlSelect2"
            value={getCategory}
            onChange={categoryHandler}
          >
            <option value="select all">all</option>
            {categoris.map((x) => (
              <option key={uuidv4()} value={x}>
                {x}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
}
