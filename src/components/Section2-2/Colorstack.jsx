import React from "react";
import { stack } from "../../data/stackSkills";

const Colorstack = () => {
  return (
    <div className="color-stack grid">
      <div className="grayish-orange">
        <div className="front flex">
          <i className="fa-solid fa-music fa-3x"></i>

          <label>main-bg-color</label>
        </div>
        <div className="back flex">
          <label>
            <p>
              <span>light grayish-orange</span>
              <br />
              <span>#e7ddcf</span>
            </p>
          </label>
        </div>
      </div>

      <div className="red-Tangelo">
        <div className="front flex">
          <i className="fa-solid fa-music fa-3x"></i>
          <label>main-point-color</label>
        </div>
        <div className="back flex">
          <label>
            <p>
              <span>Vivid Red-Tangelo</span>
              <br />
              #dd6013
            </p>
          </label>
        </div>
      </div>
      <div className="main-fonts">
        <h2>Main fonts</h2>
        <p>Aa 012345</p> <label>123</label>
        <p>Aa 012345</p> <label>123</label>
      </div>
      <div className="stack flex">
        <h2>Using Stacks</h2>
        {stack.map((stack, i) => {
          return (
            <div className="stack-item" key={i}>
              <img src={stack.url} alt="" />
              <label>{stack.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Colorstack;
