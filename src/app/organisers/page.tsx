import React from "react";
import organisers from "@/data/organisers";

interface TeamCardProps {
  img: string | null;
  name: string;
  title: string;
  club: string;
}

function TeamCard({ img, name, title, club }: TeamCardProps) {
  return (
    <div className="rounded-lg bg-gray-100 p-6 text-center shadow-md">
      <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full">
        <img
          src={img || "https://via.placeholder.com/96"}
          alt={name}
          className="h-full w-full object-cover object-top"
        />
      </div>
      <h5 className="text-lg font-medium text-gray-800">{name}</h5>
      <p className="mb-4 text-sm font-semibold text-gray-600">{title}</p>
        <p className="text-sm font-semibold text-gray-600">{club}</p>
      <div className="flex items-center justify-center gap-2">
        <button className="text-gray-500 hover:text-blue-500">
          <i className="fa-brands fa-twitter text-lg"></i>
        </button>
        <button className="text-gray-500 hover:text-blue-500">
          <i className="fa-brands fa-linkedin text-lg"></i>
        </button>
        <button className="text-gray-500 hover:text-blue-500">
          <i className="fa-brands fa-dribbble text-lg"></i>
        </button>
      </div>
    </div>
  );
}

function TeamSection() {
  // Filter organisers into sections
  const presidentSection = organisers.filter((o) =>
    o.role.toLowerCase().includes("president")
  );
  const competitorsDirectorSection = organisers.filter((o) =>
    o.role.toLowerCase().includes("competitions director")
  );
  const industryLeadSection = organisers.filter((o) =>
    o.role.toLowerCase().includes("industry lead")
  );

  // Render a single section
  const renderSection = (title: string, members: typeof organisers) => (
    <div className="mb-16">
      <h2 className="text-xl font-bold text-white lg:text-2xl text-center   ">{title}</h2>
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
        {members.map((member, index) => (
          <TeamCard
            key={index}
            img={member.image}
            name={member.name}
            title={member.role}
            club={member.club}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen py-8 px-8 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-16 text-center lg:mb-28">
          <h1 className="my-2 text-2xl font-bold text-white lg:text-4xl">
            Organisers
          </h1>
        </div>
        {renderSection("President", presidentSection)}
        {renderSection("Competitors Director", competitorsDirectorSection)}
        {renderSection("Industry Lead", industryLeadSection)}
      </div>
    </section>
  );
}

export default TeamSection;
