import React from "react";

interface TeamCardProps {
  img: string;
  name: string;
  title: string;
}

function TeamCard({ img, name, title }: TeamCardProps) {
  return (
    <div className="rounded-lg bg-gray-100 p-6 text-center shadow-md">
      <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover object-top"
        />
      </div>
      <h5 className="text-lg font-medium text-gray-800">{name}</h5>
      <p className="mb-4 text-sm font-semibold text-gray-600">{title}</p>
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

const presidentSection = [
  {
    img: "https://www.material-tailwind.com/img/avatar1.jpg",
    name: "Chris",
    title: "WDCC Co-President",
  },
  {
    img: "https://www.material-tailwind.com/img/avatar9.jpg",
    name: "Kimberly",
    title: "WDCC Co-President",
  },
  {
    img: "https://www.material-tailwind.com/img/avatar10.jpg",
    name: "Oorja",
    title: "SESA President",
  },
  {
    img: "https://www.material-tailwind.com/img/avatar11.jpg",
    name: "Varsh",
    title: "SESA Vice-President",
  },
];

const competitorsDirectorSection = [
  {
    img: "https://www.material-tailwind.com/img/avatar2.jpg",
    name: "Name",
    title: "WDCC Competitors Director",
  },
  {
    img: "https://www.material-tailwind.com/img/avatar5.jpg",
    name: "Name",
    title: "WDCC Competitors Director",
  },
  {
    img: "https://www.material-tailwind.com/img/avatar5.jpg",
    name: "Name",
    title: "WDCC Competitors Director",
  },
];

const industryLeadSection = [
  {
    img: "https://www.material-tailwind.com/img/avatar4.jpg",
    name: "Name",
    title: "SESA Industry Lead",
  },
  {
    img: "https://www.material-tailwind.com/img/avatar6.jpg",
    name: "Name",
    title: "SESA Industry Lead",
  },
  {
    img: "https://www.material-tailwind.com/image/avatar7.svg",
    name: "Names",
    title: "SESA Industry Lead",
  },
];

function TeamSection() {
  const renderSection = (title: string, members: typeof presidentSection) => (
    <div className="mb-16">
      <h2 className="text-xl font-bold text-white lg:text-2xl">{title}</h2>
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
        {members.map((member, index) => (
          <TeamCard
            key={index}
            img={member.img}
            name={member.name}
            title={member.title}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen py-8 px-8 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-16 text-center lg:mb-28">
          {/* <h6 className="text-lg font-medium text-gray-700">Meet the Team</h6> */}
          <h1 className="my-2 text-2xl font-bold text-white lg:text-4xl">
            Organisers
          </h1>
          {/* <p className="mx-auto max-w-4xl text-gray-500">
            From visionary leadership to creative talent and technical wizards,
            each team member plays a pivotal role in delivering exceptional
            service and innovative solutions.
          </p> */}
        </div>
        {renderSection("President", presidentSection)}
        {renderSection("Competitors Director", competitorsDirectorSection)}
        {renderSection("Industry Lead", industryLeadSection)}
      </div>
    </section>
  );
}

export default TeamSection;
