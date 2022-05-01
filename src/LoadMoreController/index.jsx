import React from "react";
import { useState } from "react";
export default function Index({
  loadHandler,
  loadComplete,
  totalData,
  totalResult,
}) {
  let [showSpinner, setSpinner] = useState(false);

  let submitLoadMore = () => {
    setSpinner((p) => true);
    setTimeout(() => {
      loadHandler();
      setSpinner((p) => false);
    }, 1200);
  };
  return (
    <div className="row my-2">
      <div className="col-md-12">
        <div className="d-flex flex-wrap  justify-content-between align-items-center border border-info-2">
          <div className="d-flex flex wrap align-items-center">
            <p className="m-0 p-2">
              showing results {totalResult} of {totalData}
            </p>
          </div>
          <div>
            {!loadComplete && (
              <button className="btn btn-dark " onClick={submitLoadMore}>
                {showSpinner ? (
                  <div class="spinner-border spinner-border-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Load more"
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
