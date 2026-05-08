import React from "react";
import Image from "next/image";
import GoBackButton from "@/components/BackButton";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog Details || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const blogItem = blogPosts.filter((elm) => elm.id == id)[0] || blogPosts[0];
  return (
    <>
      <>
        <div className="header absolute">
          <div className="tf-container">
            <div className="d-flex justify-content-between align-items-center mt-12">
              <a href="#" className="box-icon back-btn">
                <GoBackButton />
              </a>
              <a className="box-icon text-secondary">
                <i className="icon-share" />
              </a>
            </div>
          </div>
        </div>
        <div className="wrapper-blog">
          <Image
            alt="images"
            className="banner-blog"
            src={blogItem.src}
            width={780}
            height={600}
          />
        </div>
        <div className="pt-16 pb-16">
          <div className="tf-container">
            <a href="#" className="tag-xs primary round-1">
              Crypto
            </a>
            <h3 className="mt-6">{blogItem.title}</h3>
            <div className="d-flex justify-content-between align-items-center mt-12">
              <ul className="box-user-blog">
                <li className="d-flex align-items-center">
                  <Image
                    alt="img"
                    className="avt"
                    src="/images/avt/avt1.jpg"
                    width={48}
                    height={48}
                  />{" "}
                  <p className="ms-1">
                    {" "}
                    by <span className="text-white"> {blogItem.author}</span>
                  </p>
                </li>
                <li className="text-white d-flex align-items-center">
                  <i className="icon-clock" />
                  &nbsp;5 Min Read
                </li>
              </ul>
              <a href="#" className="tag-xs primary round-1">
                Follow
              </a>
            </div>
            <ul className="d-flex gap-6 mt-12 flex-wrap">
              <li>
                <a href="#" className="list-item-social">
                  <i className="icon icon-fb" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="list-item-social">
                  <i className="icon icon-tw" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="list-item-social">
                  <i className="icon icon-discord" />
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="list-item-social">
                  <i className="icon icon-gmail" />
                  Gmail
                </a>
              </li>
            </ul>
            <h5 className="mt-12">1. Cash Wallets</h5>
            <p className="mt-8 text-large">
              cash wallet is where you keep your valuable cash. If you lose it,
              you lose your money. So you keep it physically secure at all times
              and don’t give it to anyone else.
            </p>
            <p className="mt-8 text-large">
              A digital wallet is used to store valuable digital currency. A
              digital wallet needs a key to open it, but if you lose the key
              someone else might be able to open it without you knowing, so
              losing the key effectively means you have lost the wallet and the
              money it holds.
            </p>
          </div>
        </div>
      </>
    </>
  );
}
