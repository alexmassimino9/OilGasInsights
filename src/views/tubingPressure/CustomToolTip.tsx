import React from "react";
import { TooltipProps } from "recharts";

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      >
        <p>{`Time: ${label}`}</p>
        <p
          style={{ color: payload[0].color }}
        >{`Tubing Pressure: ${payload[0].value} psi`}</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
