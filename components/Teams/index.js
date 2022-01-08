import Image from "next/image";
import Founder from "../../public/img/teams/1.jpg";
import Ves from "../../public/img/teams/cape-ves.jpeg";
import Cdiaz from "../../public/img/teams/cape-cdiaz.jpeg";
import Stoner from "../../public/img/teams/cape-stoner.jpeg";

const teams = [
  {
    name: "CAPE | Mikael",
    position: "Founder",
    pfp: Founder,
  },
  {
    name: "CAPE | Stoner",
    position: "Moderator",
    pfp: Stoner,
  },
  {
    name: "CAPE | Ves",
    position: "Moderator",
    pfp: Ves,
  },
  {
    name: "CAPE | Cdiaz",
    position: "Moderator",
    pfp: Cdiaz,
  },
];

export default function Teams() {
  return (
    <div
      className="px-12 md:px-20 py-8 md:py-16 mx-auto max-w-[90rem]"
      id="team"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300">
            Meet Cyborg Ape Team
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-500">
            Hi everyone! So we are a cyborg ape team.
          </p>
        </div>
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teams.map((person) => (
              <div key={person.name}>
                <Image
                  className="w-full rounded-xl"
                  src={person.pfp}
                  width={500}
                  height={500}
                  alt=""
                />
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-300">{person.position}</p>
                    <p className="font-medium text-sm text-gray-500">
                      {person.name}
                    </p>
                  </div>
                  <div className="flex space-x-3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
