"use client";

import GoBackButton from "./BackButton";

export default function ChangeName() {
  return (
    <>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
        <h3>Name</h3>
      </div>
      <div className="pt-45 pb-16">
        <div className="tf-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <fieldset className="mt-16">
              <label className="mb-8">Name</label>
              <input type="text" defaultValue="Tony Nguyen" />
            </fieldset>
            <ul className="mt-20">
              <li className="d-flex gap-8">
                <i className="icon-round-check xs bg-white flex-shrink-0" />
                <p className="text-large">
                  Your name will be visible to all users. bnaj can change his
                  nickname 3 times before the end of the year. The limit will be
                  reset every year. Super/Diamond Advertisers are not allowed to
                  change their nicknames.
                </p>
              </li>
              <li className="mt-16 d-flex gap-8">
                <i className="icon-round-check xs bg-white flex-shrink-0" />
                <p className="text-large">
                  It will take a few minutes for us to review and approve the
                  new global name or nickname
                </p>
              </li>
              <li className="mt-16 d-flex gap-8">
                <i className="icon-round-check xs bg-white flex-shrink-0" />
                <p className="text-large">
                  When creating a nickname, please make sure it is free from
                  vulgar language, the official name of Avicoin (ie the name of
                  the product) and the names of other trading platforms.
                </p>
              </li>
            </ul>
            <button className="mt-40 tf-btn lg">Done</button>
          </form>
        </div>
      </div>
    </>
  );
}
