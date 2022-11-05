import { DiAndroid, DiTerminal } from "react-icons/di";
import { SiJava, SiFirebase, SiGit } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "android",
    Component: DiAndroid,
    title: "Android",
    Description: () => <>Experience with Android Apps, ROMs & Kernels</>,
  },
  {
    slug: "flutter",
    Component: RiFlutterFill,
    title: "Linux/Windows",
    Description: () => <>Experience with Various Windows & Linux Penetartion Testing Distros</>,
  },
  {
    slug: "java",
    Component: SiJava,
    title: "C/Python",
    Description: () => <>Experience with Programming Languages</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => <>Experience with writing shell scripts</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Tools",
    Description: () => <>Experience of Various HAcking Tools</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Experience with git commands and features</>,
  },
];
