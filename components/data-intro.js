import { useState } from "react";

export default function DataIntro({ changeHandler }) {
  const [unit, setUnit] = useState('metric');
  const [period, setPeriod] = useState('7days');

  return (
    <div className="row">
      <div className="item intro">
        <div className="row">
          <div className="item control-container">
            <div className="content">
              <div className="row">
                <div className="item control">
                  <div>Units</div>
                </div>
                <div className="item control">
                  <select 
                    id="data-unit" 
                    onChange={(event) => {
                      setUnit(event.target.value); 
                      changeHandler(event);
                    }}
                    value={unit}>
                    <option value="metric">Metric</option>
                    <option value="imperial">Imperial</option>                    
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="item control-container">
            <div className="content">
              <div className="row">
                <div className="item control">
                  <div>Period</div>
                </div>
                <div className="item control">
                  <select id="data-period" onChange={changeHandler}>
                    <option value="7days">7 Days Forecast</option>
                    <option value="today">Forecast for Today</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
