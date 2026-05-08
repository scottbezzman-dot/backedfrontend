import React from "react";

export default function FilterModal2() {
  return (
    <div className="modal fade action-sheet" id="filter">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <span>Filters</span>
            <span
              className="icon-cancel"
              data-bs-dismiss="modal"
              aria-hidden="true"
            />
          </div>
          <div className="modal-body">
            <div className="text-button fw-6 text-white">Time</div>
            <ul className="grid-2 rcg-12-16 mt-16">
              <li>
                <a
                  href="#"
                  className="tf-btn xs line active text-secondary item-time"
                >
                  All
                </a>
              </li>
              <li>
                <a href="#" className="tf-btn xs line text-secondary item-time">
                  Top
                </a>
              </li>
              <li>
                <a href="#" className="tf-btn xs line text-secondary item-time">
                  Meme
                </a>
              </li>
              <li>
                <a href="#" className="tf-btn xs line text-secondary item-time">
                  Hong Kong Concept
                </a>
              </li>
              <li>
                <a href="#" className="tf-btn xs line text-secondary item-time">
                  GameFi
                </a>
              </li>
              <li>
                <a href="#" className="tf-btn xs line text-secondary item-time">
                  NFT
                </a>
              </li>
              <li>
                <a href="#" className="tf-btn xs line text-secondary item-time">
                  Layer 2
                </a>
              </li>
              <li>
                <a href="#" className="tf-btn xs line text-secondary item-time">
                  Storage
                </a>
              </li>
              <li>
                <a href="#" className="tf-btn xs line text-secondary item-time">
                  DeFi
                </a>
              </li>
              <li>
                <a href="#" className="tf-btn xs line text-secondary item-time">
                  Fan Token
                </a>
              </li>
            </ul>
            <div className="text-button fw-6 text-white mt-16">
              Market capitalization ($)
            </div>
            <ul className="grid-2 rcg-12-16 mt-16">
              <li>
                <a
                  href="#"
                  className="tf-btn xs line active text-secondary item-category"
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-btn xs line text-secondary item-category"
                >
                  &gt; 15 Billion
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-btn xs line text-secondary item-category"
                >
                  10-50 Billion
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-btn xs line text-secondary item-category"
                >
                  5-10 Billion
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-btn xs line text-secondary item-category"
                >
                  10-50 Billion
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-btn xs line text-secondary item-category"
                >
                  5-10 Billion
                </a>
              </li>
            </ul>
            <div className="mt-16 pt-16 line-t grid-2 gap-16">
              <a
                href="#"
                className="tf-btn sm secondary"
                data-bs-dismiss="modal"
              >
                Reset
              </a>
              <a href="#" className="tf-btn sm primary" data-bs-dismiss="modal">
                Apply
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
