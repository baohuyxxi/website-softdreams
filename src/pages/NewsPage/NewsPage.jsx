import React, { useState } from "react";
import FramePage from "~/components/FramePage/FramePage";
import posts from "~/mock/Posts.js";
import Pagination from "~/components/Pagination/Pagination";

export default function NewsPage() {
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Tính tổng số trang
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Cắt bài viết theo trang hiện tại
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <FramePage>
      <div className="w-full">
        {/* Banner */}
        <section id="sds_banner" className="w-full">
          <img
            src="http://softdreams.vn/wp-content/uploads/2023/11/Group-2609280-1-1.png"
            alt="Banner"
            className="w-full object-cover"
          />
        </section>

        {/* Posts */}
        <section id="showall_posts" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
              {currentPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
                >
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-56 object-cover"
                    />
                  </a>
                  <div className="p-4">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 mb-2">
                        {post.title}
                      </h2>
                    </a>
                    <p className="text-gray-600 text-sm mb-3">{post.desc}</p>
                    <div className="text-sm text-gray-500">{post.date}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </section>
      </div>
    </FramePage>
  );
}


