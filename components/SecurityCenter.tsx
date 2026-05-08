import React from "react";
import Link from "next/link";
import GoBackButton from "./BackButton";
export default function SecurityCenter() {
  return (
    <>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
        <h3>Security center</h3>
      </div>
      <div className="pt-45 pb-16">
        <div className="tf-container">
          <h4 className="mt-4">Verification method</h4>
          <ul className="pt-16 pb-16 line-bt">
            <li>
              <div className="d-flex justify-content-between align-items-center">
                <a href="#" className="left-inner">
                  <p className="text-small">2-factor authentication</p>
                  <p className="mt-4 text-secondary">
                    Send verification code for secure login.
                  </p>
                </a>
                <input
                  className="tf-switch-check"
                  type="checkbox"
                  defaultValue="checkbox"
                  name="check"
                />
              </div>
            </li>
            <li className="mt-16">
              <a
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <p className="text-small">Authentication app</p>
                <div className="text-secondary d-flex gap-8 align-items-center">
                  <span>Unlinked </span>
                  <i className="icon-arr-right fs-12 text-secondary" />
                </div>
              </a>
            </li>
            <li className="mt-16">
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-small text-white">Phone number</p>
                <input
                  className="tf-switch-check"
                  type="checkbox"
                  defaultValue="checkbox"
                  name="check"
                  defaultChecked
                />
              </div>
            </li>
            <li className="mt-16">
              <a
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <p className="text-small">Email</p>
                <div className="text-secondary d-flex gap-8 align-items-center">
                  <span>Unlinked </span>
                  <i className="icon-arr-right fs-12 text-secondary" />
                </div>
              </a>
            </li>
          </ul>
          <h4 className="mt-16">Advanced security</h4>
          <ul className="pt-16 pb-16 line-bt">
            <li>
              <a
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <div className="left-inner">
                  <p className="text-small">Anti-phishing code online</p>
                  <p className="mt-4 text-secondary text-xsmall">
                    Add a unique code for Avicoin to authenticate.
                  </p>
                </div>
                <i className="icon-arr-right fs-12 text-secondary" />
              </a>
            </li>
            <li className="pt-16">
              <a
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <div className="left-inner">
                  <p className="text-small">App lock</p>
                  <p className="mt-4 text-secondary text-xsmall">
                    Set face ID and pattern lock settings.
                  </p>
                </div>
                <i className="icon-arr-right fs-12 text-secondary" />
              </a>
            </li>
            <li className="pt-16">
              <a
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <div className="left-inner">
                  <p className="text-small">Channel verification</p>
                  <p className="mt-4 text-secondary text-xsmall">
                    Verify a source officially represents Avicion.
                  </p>
                </div>
                <i className="icon-arr-right fs-12 text-secondary" />
              </a>
            </li>
          </ul>
          <h4 className="mt-16">Account management</h4>
          <ul className="pt-16 pb-16">
            <li>
              <Link
                href={`/change-password`}
                className="d-flex justify-content-between align-items-center"
              >
                <p className="text-small">Change the password</p>
                <i className="icon-arr-right fs-12 text-secondary" />
              </Link>
            </li>
            <li
              className="mt-16"
              data-bs-toggle="modal"
              data-bs-target="#equipment"
            >
              <a
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <p className="text-small">Equipment management</p>
                <i className="icon-arr-right fs-12 text-secondary" />
              </a>
            </li>
            <li className="mt-16">
              <Link
                href={`/account-freeze`}
                className="d-flex justify-content-between align-items-center"
              >
                <p className="text-small">Freeze/close account</p>
                <i className="icon-arr-right fs-12 text-secondary" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* modal equipment */}
      <div className="modal fade modalRight" id="equipment">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
              <span className="left" data-bs-dismiss="modal" aria-hidden="true">
                <i className="icon-left-btn" />
              </span>
              <h3>Equipment management</h3>
            </div>
            <div className="overflow-auto pt-45 pb-16">
              <div className="tf-container">
                <ul className="mt-4">
                  <li>
                    <div className="d-flex gap-12">
                      <i className="icon-mobile" />
                      <div className="content pb-8 line-bt flex-grow-1">
                        <h5>iPhone(iOS)</h5>
                        <p className="text-small mt-4">Last place: USA</p>
                        <p className="text-small mt-4">IP: 123.45.67.890</p>
                        <p className="text-small mt-4">
                          Last seen: 2023-01-01 10:51:43
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-12 pb-12 line-bt pl-32">
                    <h5>History</h5>
                    <div className="mt-4 d-flex gap-8">
                      <div className="flex-grow-1">
                        <p className="text-small">Location</p>
                        <p className="text-small">USA</p>
                      </div>
                      <div>
                        <p className="text-small">IP</p>
                        <p className="text-small">123.45.67.890</p>
                      </div>
                      <div>
                        <p className="text-small">Date and time</p>
                        <p className="text-small">2023-01-01 10:51:43</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
