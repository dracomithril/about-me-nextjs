import Image from "next/image";
import React from "react";

type SocialMediaLinks = {
  title: string;
  url: string;
  icon: string;
};

type BaseInfoProps = {
  avatar: string;
  name: string;
  surname: string;
  quote: string;
  startDate: string;
  summary: string;
  links: SocialMediaLinks[];
};

export const BaseInfo: React.FC<BaseInfoProps> = ({
  avatar,
  name,
  surname,
  links,
  summary,
  quote,
}) => {
  return (
    <div>
      <div className="flex flex-row">
        <Image
          src={avatar}
          alt={`${name} ${surname}`}
          width={200}
          height={200}
          className="rounded-full inline-block"
        />
        <div className="flex flex-col justify-items-center align-middle text-center gap-y-1 p-3">
          <h1 className="text-3xl">{`${name} ${surname}`}</h1>
          <div className="dark:invert flex flex-row gap-1 items-center m-auto">
            {links.map((link) => (
              <a href={link.url} key={link.title}>
                <Image
                  src={`./${link.icon}.svg`}
                  alt={link.title}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
          <p className="pt-6">{summary.replace("$time", "about 10 years")}</p>
        </div>
      </div>
      <p className="m-3">{quote}</p>
    </div>
  );
};
