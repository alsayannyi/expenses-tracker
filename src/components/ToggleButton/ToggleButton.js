import React from "react";
import "./toggleBtn.css";

const ToggleButton = ({ showGraphClicked }) => {
  return (
    <div id="app-cover" className="col-12">
      <div
        className="btn-wrapper"
        // selected={selected}
        onClick={showGraphClicked}
      >
        <div className="toggle-button-cover">
          <div className="button-cover">
            <div className="button b2" id="button-17">
              <input type="checkbox" className="checkbox" />
              <div className="knobs">
                <span />
              </div>
              <div className="layer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
