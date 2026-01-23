export interface Project {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  client: string;
  duration: string;
  challenge: string;
  solution: string;
  gearList: string[];
  stats: { label: string; value: string }[];
}

export const projects: Project[] = [
 {
    id: "port-houston",
    title: "Port Houston Administration Building",
    category: "Integrated Systems",
    imageSrc: "/projects/port-houston.webp",
    description: "A comprehensive technology fit-out for the new Port Houston headquarters, encompassing structured cabling, A/V collaboration spaces, and a hardened security infrastructure.",
    client: "Harvey Cleary / Port Houston Authority",
    duration: "6 Months",
    challenge: "Port Houston required a seamless transition to their new headquarters in the Historic Fifth Ward. The challenge was to deliver a unified technology experience that supported hybrid collaboration for staff while adhering to strict maritime security standards for physical access and surveillance.",
    solution: "We executed a complete low-voltage scope, installing a robust Cat6A structured cabling backbone to support all building systems. For security, we deployed a comprehensive video and access control system. The meeting spaces were fitted with Cisco Video Bar Pros and native Teams Rooms integration, all automated by Crestron RMC4 processors for a consistent, one-touch user experience.",
    gearList: ["Cisco Video Bar Pro", "Teams Rooms Integration", "Crestron RMC4", "Genetec Security Center", "Axis Communications", "Panduit Cat6A"],
    stats: [
      { label: "Data Drops", value: "2,200+" },
      { label: "Security Devices", value: "150+" },
    ]
  },
];