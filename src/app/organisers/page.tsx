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
    <div className="group relative mx-auto w-48 rounded-lg bg-black shadow-md overflow-hidden">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={img || "https://via.placeholder.com/96"}
          alt={name}
          className="h-full w-full object-cover object-top transition-opacity duration-300 group-hover:opacity-50"
        />
      </div>

      {/* Info */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-0 bg-opacity-0 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h5 className="text-xl font-semibold text-white">{name}</h5>
        <p className="mb-2 text-sm font-semibold text-white text-center break-words w-full max-w-[180px]">{title}</p>
        
        <img
          src={club}
          alt={`${name}'s club`}
          className="h-8 w-20 mt-2" // Adjust size as needed
        />
        
        {/* <p className="text-sm font-semibold text-white">{club}</p> */}
      </div>
    </div>
  );
}

function TeamSection() {
  return (
    <section className="min-h-screen py-8 px-8 lg:py-28">
      <div className="container mx-auto max-w-screen-sm">
        <div className="mb-16 text-center lg:mb-28">
          <h1 className="my-2 text-2xl font-bold text-white lg:text-4xl">
            Organisers
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-6 justify-center sm:grid-cols-2 lg:grid-cols-3">
          {organisers.map((member, index) => (
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
    </section>
  );
}

export default TeamSection;
