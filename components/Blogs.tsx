import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";
import GoBackButton from "./BackButton";
import FilterModal from "./FilterModal";

interface BlogPost {
  alt: string;
  src: string;
  author: string;
  date: string;
  title: string;
  id: number;
}

const Blogs: React.FC = () => {
  return (
    <>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
        <h3>Hot News</h3>
        <a
          href="#filter"
          className="right text-secondary"
          data-bs-toggle="modal"
        >
          <i className="icon-funnel" />
        </a>
      </div>
      <div className="pt-45 pb-16">
        <div className="tf-container">
          <ul className="mt-12 grid-2 gap-16">
            {blogPosts.map((post: BlogPost, index: number) => (
              <li key={index}>
                <Link href={`/blog-detail/${post.id}`} className="blog-item">
                  <Image
                    alt={post.alt}
                    src={post.src}
                    width={257}
                    height={234}
                  />
                  <div className="content">
                    <p className="text-xsmall text-secondary title">
                      {post.author} • {post.date}
                    </p>
                    <p className="mt-4">{post.title}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <FilterModal />
    </>
  );
};

export default Blogs;
