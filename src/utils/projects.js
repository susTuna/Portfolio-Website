import BlueMeterSEA from "../assets/images/bluemetermobilesea.webp";
import FasmawaITB from "../assets/images/fasmawa.webp";
import Nimonspedia from "../assets/images/nimonspedia.webp";
import SideQuestGST from "../assets/images/sidequestgst.webp";

const data = [
  {
    name: "BlueMeterSEA",
    type: "MobileApp",
    url: "https://github.com/sustuna/bluemetermobilesea/releases/latest",
    github: "https://github.com/susTuna/bluemetermobileSEA",
    image: BlueMeterSEA,
    slug: "bluemetersea",
    description:
      "A Flutter-based Android overlay app providing real-time DPS, healing, and damage-taken tracking for Blue Protocol: Star Resonance SEA, including boss HP tracking and a nearby-monster compass. Adapted from the original BlueMeter Mobile project for the SEA server release.",
    tech: ["Flutter", "Kotlin", "Dart", "Android"],
  },
  {
    name: "Nimonspedia",
    type: "Website",
    url: "",
    github:
      "https://github.com/susTuna/milestone-1-tugas-besar-if-3110-web-based-development-k03-01",
    image: Nimonspedia,
    slug: "nimonspedia",
    description:
      "A full-stack e-commerce platform built in pure PHP with a distributed monolithic architecture, featuring auctions, cart, admin dashboard, advanced search, and CI/CD via GitHub Actions, load-tested for backend performance.",
    tech: [
      "PHP",
      "Node.js",
      "React",
      "Redis",
      "Docker",
      "Nginx",
      "GitHub Actions",
    ],
  },
  {
    name: "SideQuestGST",
    type: "WebApp",
    url: "",
    github: "https://github.com/GenshikenITB/SideQuestGST",
    image: SideQuestGST,
    slug: "sidequestgst",
    description:
      "A Discord bot platform with a microservices architecture that automates task assignment and progress tracking for orientation participants, integrating directly with Google Sheets for real-time verification.",
    tech: ["Rust", "Kafka", "Redis", "Discord API", "Google Sheets API"],
  },
  {
    name: "FASMAWA ITB",
    type: "Website",
    url: "",
    github: "",
    image: FasmawaITB,
    slug: "fasmawa-itb",
    description:
      "A facility reservation and asset-tracking platform built for ITB student units, serving 100+ users, with real-time booking management and asset lifecycle tracking.",
    tech: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MinIO",
    ],
  },
];

export function getData() {
  return data;
}
