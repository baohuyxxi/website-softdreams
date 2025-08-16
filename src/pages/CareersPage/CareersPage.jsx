import React, { useState } from "react";
import FramePage from "~/components/FramePage/FramePage";
import jobs from "~/mock/Jobs.js";
import Pagination from "~/components/Pagination/Pagination";
import WhySoftdreams from "~/components/WhySoftdreams/WhySoftdreams";
import RecruitmentProcess from "~/components/RecruitmentProcess/RecruitmentProcess";
import Activities from "~/components/Activities/Activities";
import RecruitmentFAQ from "~/components/RecruitmentFAQ/RecruitmentFAQ";

export default function CareersPage() {
  const jobsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  return (
    <FramePage>
      <div className="w-full">
        {/* Banner */}
        <section id="careers_banner" className="w-full">
          <img
            src="https://softdreams.vn/wp-content/uploads/2023/11/tuyen-dung-softdreams.png"
            alt="Tuyển dụng"
            className="w-full object-cover"
          />
        </section>

        {/* Job List */}
        <section id="jobs" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Cơ Hội Nghề Nghiệp Tại SoftDreams
            </h1>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
              {currentJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
                >
                  <a href={job.link} target="_blank" rel="noopener noreferrer">
                    <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 mb-2">
                      {job.title}
                    </h2>
                  </a>
                  <p className="text-gray-600 text-sm mb-3">{job.desc}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>📍 {job.location}</span>
                    <span>⏱ {job.type}</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-400">{job.date}</div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </section>

        {/* Why Softdreams */}
        <WhySoftdreams />

        {/* Recruitment Process */}
        <RecruitmentProcess />

        {/* Activities */}
        <Activities />

        {/* Recruitment FAQ */}
        <RecruitmentFAQ />
      </div>
    </FramePage>
  );
}
