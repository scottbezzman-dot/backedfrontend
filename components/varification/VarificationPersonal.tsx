"use client";

import GoBackButton from "../BackButton";

export default function VarificationPersonal() {
  return (
    <>
      <>
        <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
          <a href="#" className="left back-btn">
            <GoBackButton />
          </a>
          <h3>Identity verification</h3>
        </div>
        <div className="pt-45 pb-90">
          <div className="tf-container">
            <ul className="mt-4 tabs-line">
              <li className="active" />
              <li />
            </ul>
            <h3 className="mt-12">Enter your personal information</h3>
            <p className="mt-8 text-small">
              Make sure your information shows up exactly as it does on your ID.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-20">
              <fieldset>
                <label className="label-ip">
                  <p className="mb-8 text-small">Name</p>
                  <input type="text" placeholder="Tony Nguyen" />
                </label>
              </fieldset>
              <fieldset className="mt-20">
                <label className="label-ip">
                  <p className="mb-8 text-small">Middle name (optional)</p>
                  <input type="text" placeholder="Enter your middle name" />
                </label>
              </fieldset>
              <fieldset className="mt-20">
                <label className="label-ip">
                  <p className="mb-8 text-small">Last name</p>
                  <input type="text" placeholder="Enter your last name" />
                </label>
              </fieldset>
              <fieldset className="mt-20">
                <label className="label-ip">
                  <p className="mb-8 text-small">Country/region of residence</p>
                  <div className="select-wrapper">
                    <select className="tf-select">
                      <option>USA</option>
                      <option>ENG</option>
                      <option>INDIA</option>
                    </select>
                  </div>
                </label>
              </fieldset>
              <fieldset className="mt-20">
                <label className="label-ip">
                  <p className="mb-8 text-small">Type of identification (ID)</p>
                  <div className="select-wrapper">
                    <select className="tf-select">
                      <option>Select ID type</option>
                      <option>ID card</option>
                      <option>Passport</option>
                    </select>
                  </div>
                </label>
              </fieldset>
              <fieldset className="mt-20">
                <label className="label-ip">
                  <p className="mb-8 text-small">ID number</p>
                  <input type="text" placeholder="ID number" />
                </label>
              </fieldset>
              <div className="menubar-footer footer-fixed bg-surface">
                <div className="inner-bar">
                  <button className="tf-btn lg primary">Next</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  );
}
