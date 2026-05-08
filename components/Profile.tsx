"use client"
import React from "react";
import Link from "next/link";
import GoBackButton from "./BackButton";
import { useRouter } from "next/navigation";
export default function Profile() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/log-in");
  };
  return (
    <>
      {/* preloade */}

      {/* /preload */}
      <div className="header fixed-top bg-surface">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
        <Link href={`/home`} className="right">
          <i className="icon-home2 fs-20" />
        </Link>
      </div>
      <div className="pt-45 pb-16">
        <div className="tf-container">
          <h4>Profile</h4>
          <Link
            href={`/verification`}
            className="mt-16 d-flex justify-content-between align-items-center"
          >
            <div className="box-left">
              <h5 className="mb-8">Verification</h5>
              <span className="text-red">Unverified</span>
            </div>
            <span className="icon-arr-right text-secondary fs-12" />
          </Link>
          <a
            href="#"
            className="mt-16 pb-12 line-bt d-flex justify-content-between align-items-center"
          >
            <p className="text-small">Transaction fee tier</p>
            <span className="text-secondary d-flex gap-8 align-items-center">
              Level 1 <i className="icon-arr-right fs-12 text-secondary" />
            </span>
          </a>
          <ul className="mt-16 pb-12 line-bt">
            <li data-bs-toggle="modal" data-bs-target="#changeProfile">
              <a
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <h5>Profile picture</h5>
                <span className="icon-arr-right text-secondary fs-12" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mt-16 d-flex justify-content-between align-items-center"
              >
                <p className="text-small">UID</p>
                <span className="text-secondary d-flex gap-8 align-items-center">
                  4563783947492974739282
                  <i className="icon-copy fs-16 text-secondary" />
                </span>
              </a>
            </li>
            <li>
              <Link
                href={`/change-name`}
                className="mt-16 d-flex justify-content-between align-items-center"
              >
                <p className="text-small">Name</p>
                <span className="text-secondary d-flex gap-8 align-items-center">
                  Tony Nguyen{" "}
                  <i className="icon-arr-right fs-12 text-secondary" />
                </span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="mt-16 d-flex justify-content-between align-items-center"
              >
                <p className="text-small">Self-introduce</p>
                <span className="text-secondary d-flex gap-12 align-items-center">
                  Add now <i className="icon-arr-right fs-16 text-secondary" />
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mt-16 d-flex justify-content-between align-items-center"
              >
                <p className="text-small">Social media accounts</p>
                <span className="icon-arr-right text-secondary fs-16" />
              </a>
            </li>
            <li>
              <a
                href="#account"
                className="mt-16 d-flex justify-content-between align-items-center"
                data-bs-toggle="modal"
              >
                <p className="text-small">Switch accounts</p>
                <span className="icon-arr-right text-secondary fs-16" />
              </a>
            </li>
          </ul>
          <ul className="mt-16 pb-16 line-bt">
            <li>
              <h5>Setting</h5>
            </li>
            <li>
              <Link
                href={`/option`}
                className="mt-16 d-flex justify-content-between align-items-center"
              >
                <p className="text-small">Option</p>
                <span className="icon-arr-right text-secondary fs-12" />
              </Link>
            </li>
            <li>
              <Link
                href={`/security-center`}
                className="mt-16 d-flex justify-content-between align-items-center"
              >
                <p className="text-small">Security center</p>
                <span className="icon-arr-right text-secondary fs-12" />
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="mt-16 d-flex justify-content-between align-items-center"
              >
                <p className="text-small">Privacy</p>
                <span className="icon-arr-right text-secondary fs-12" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mt-16 d-flex justify-content-between align-items-center"
              >
                <p className="text-small">Authority</p>
                <span className="icon-arr-right text-secondary fs-12" />
              </a>
            </li>
          </ul>
          <span
            className="text-button mt-32 d-inline-block text-red fw-6"
            style={{ cursor: 'pointer' }}
            data-bs-toggle="modal"
            data-bs-target="#logout"
          >
            Log out
          </span>
        </div>
      </div>
      {/* modal logout */}
      <div className="modal fade modalCenter" id="logout">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content modal-sm">
            <div className="p-16 line-bt">
              <h4 className="text-center">Log Out</h4>
              <p className="mt-12 text-center text-large">
                Are you sure you want to sign out?
              </p>
            </div>
            <div className="grid-2">
              <a
                href="#"
                className="line-r text-center text-button fw-6 p-10"
                data-bs-dismiss="modal"
              >
                Cancel
              </a>
              <button 
                className="text-center text-button fw-6 p-10 text-red" 
                style={{backgroundColor:'transparent', border:'none'}}
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal change profile */}
      <div className="modal fade modalCenter" id="changeProfile">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content modal-sm">
            <div className="p-16 line-bt">
              <h4 className="text-center">Change profile picture</h4>
              <p className="mt-2 text-center text-large">
                Your profile picture will be visible to other users and you can
                change your profile picture after 30 days.
              </p>
            </div>
            <div className="grid-2">
              <a
                href="#"
                className="line-r text-center text-button fw-6 p-12"
                data-bs-dismiss="modal"
              >
                Cancel
              </a>
              <a
                href="#"
                className="text-center text-button fw-6 p-12 text-primary"
                data-bs-toggle="modal"
                data-bs-target="#filterPicture"
              >
                Done
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* modal change profile picture*/}
      <div className="modal fade action-sheet" id="filterPicture">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span>Picture</span>
              <span className="icon-cancel" data-bs-dismiss="modal" />
            </div>
            <ul className="mt-20 pb-16">
              <li data-bs-dismiss="modal">
                <div className="d-flex justify-content-between align-items-center gap-8 text-large item-check active">
                  Take a photo <i className="icon icon-check-circle" />
                </div>
              </li>
              <li className="mt-4" data-bs-dismiss="modal">
                <div className="d-flex justify-content-between gap-8 text-large item-check">
                  Select photo from album{" "}
                  <i className="icon icon-check-circle" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* account */}
      <div className="modal fade action-sheet" id="account">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span>Wallet</span>
              <span className="icon-cancel" data-bs-dismiss="modal" />
            </div>
            <ul className="mt-20 pb-16">
              <li data-bs-dismiss="modal">
                <div className="d-flex justify-content-between align-items-center gap-8 text-large item-check active">
                  Account 1 <i className="icon icon-check-circle" />
                </div>
              </li>
              <li className="mt-4" data-bs-dismiss="modal">
                <div className="d-flex justify-content-between gap-8 text-large item-check">
                  Account 2<i className="icon icon-check-circle" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
