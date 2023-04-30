import { Inter } from "next/font/google";
import aboutMe from "./me.json";
import { BaseInfo } from "@about_me/components/personal_info/BaseInfo";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {
    avatar,
    about_me: summary,
    links,
    name,
    surname,
    start,
    quote,
  } = aboutMe;
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <BaseInfo
        {...{ avatar, summary, links, name, surname, startDate: start, quote }}
      />
    </main>
  );
}
