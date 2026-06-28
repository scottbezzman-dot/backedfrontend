"use client";

import { categoryOptions, timeOptions } from "@/data/filterOptions";
import { useState } from "react";

const FilterModal = () => {
  const [selectedTime, setSelectedTime] = useState(timeOptions[0]);
  const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);
  return (
    <div className="modal fade action-sheet" id="filter">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <span>Filters</span>
            <span className="icon-cancel" data-bs-dismiss="modal" />
          </div>
          <div className="modal-body">
            <div className="text-small text-white">Time</div>
            <ul className="grid-2 rcg-12-16 mt-16">
              {timeOptions.map((option, index) => (
                <li key={index} onClick={() => setSelectedTime(option)}>
                  <a
                    href="#"
                    className={`tf-btn xs line text-secondary item-time ${
                      selectedTime == option ? "active" : ""
                    }`}
                  >
                    {option.text}
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-small text-white mt-16">Categories</div>
            <ul className="grid-2 rcg-12-16 mt-16">
              {categoryOptions.map((option, index) => (
                <li key={index} onClick={() => setSelectedCategory(option)}>
                  <a
                    href="#"
                    className={`tf-btn xs line text-secondary item-category ${
                      selectedCategory == option ? "active" : ""
                    }`}
                  >
                    {option.text}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-16 pt-16 line-t grid-2 gap-16">
              <a
                href="#"
                onClick={() => {
                  setSelectedTime(timeOptions[0]);
                  setSelectedCategory(categoryOptions[0]);
                }}
                className="tf-btn sm secondary fw-4"
                data-bs-dismiss="modal"
              >
                Reset
              </a>
              <a
                href="#"
                className="tf-btn sm primary fw-4"
                data-bs-dismiss="modal"
              >
                Apply
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
