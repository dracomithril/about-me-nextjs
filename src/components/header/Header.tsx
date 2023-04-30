import Image from "next/image";

type Links = {
  icon: string;
  name: string;
  address: string;
};

const links: Links[] = [
  {
    icon: "./briefcase.svg",
    name: "Experience",
    address: "#experience",
  },
  {
    icon: "./book-open.svg",
    name: "Education",
    address: "#education",
  },
  {
    icon: "./headphones.svg",
    name: "Hobby",
    address: "#hobby",
  },
  {
    icon: "./tool.svg",
    name: "Projects",
    address: "#projects",
  },
];

export const Header = () => {
  return (
    <header className="flex flex-row align-top justify-between w-full p-1">
      <span>Curriculum vitae</span>
      <nav>
        {links.map((el) => (
          <a href={el.address} key={el.name} className="flex-row group mr-2">
            <Image
              src={el.icon}
              alt={el.name}
              className="dark:invert inline"
              width={24}
              height={24}
              priority
            />
            <span className="hidden group-hover:inline">{el.name}</span>
          </a>
        ))}
      </nav>
    </header>
  );
};
