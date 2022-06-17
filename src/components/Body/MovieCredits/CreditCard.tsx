import React from "react";
import { createDispatchHook } from "react-redux";
import { CreditData } from "../../../utils/types/data.types";

import "./style.css";
interface CreditProps {
  credit: CreditData;
}
const CreditCard = ({ credit }: CreditProps) => {
  return (
    <div className="credit-card ">
      <span className="font-bold text-center text-base leading-tight">
        {credit.name}
      </span>
      <span className="font-light text-center text-sm">{credit.role}</span>
    </div>
  );
};

export default CreditCard;
