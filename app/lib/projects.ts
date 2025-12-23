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
    id: "corporate-boardroom",
    title: "Corporate Boardroom",
    category: "Audio & Video",
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Complete A/V integration for a modern corporate boardroom, featuring video conferencing and touch-panel control.",
    client: "Nexus Energy Corp",
    duration: "3 Weeks",
    challenge: "The client needed to connect remote teams seamlessly with their executive board. The existing room had poor acoustics, unreliable connection methods, and a clutter of cables on the table that frustrated executives.",
    solution: "We installed a ceiling-mounted beamforming microphone array to capture voice clearly without table clutter. A 98-inch 4K display serves as the visual centerpiece, controlled by a custom-programmed Crestron touch panel that simplifies the entire meeting startup process to a single tap.",
    gearList: ["Crestron NVX", "Shure MXA920 Ceiling Array", "Biamp TesiraFORTÉ", "Sony 98\" Bravia Display", "Zoom Rooms Integration"],
    stats: [
      { label: "Setup Time", value: "< 30s" },
      { label: "Audio Coverage", value: "100%" },
    ]
  },
  {
    id: "university-lecture-hall",
    title: "University Lecture Hall",
    category: "Audio & Video",
    imageSrc: "https://images.unsplash.com/photo-1543269865-0a740d43b91c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Dual-projector setup with lecture capture and voice-lift microphone system for a 200-seat university hall.",
    client: "State University",
    duration: "6 Weeks",
    challenge: "Students in the back rows couldn't hear the professor, and the university needed a way to record lectures for hybrid learning. Lighting conditions varied wildly, making the old projection screens washed out and unreadable.",
    solution: "We implemented a 'voice-lift' system that subtly amplifies the presenter so they sound natural throughout the room. Dual 10,000-lumen laser projectors ensure visibility even with the blinds open, and an automated tracking camera follows the professor for recording.",
    gearList: ["Epson Laser Projectors", "Q-SYS Core 110f", "Sennheiser SpeechLine", "Extron SMP Recording", "Da-Lite Tensioned Screens"],
    stats: [
      { label: "Seat Capacity", value: "200" },
      { label: "Lumen Output", value: "20k" },
    ]
  },
  {
    id: "office-campus-buildout",
    title: "New Office Campus Build-out",
    category: "Structured Cabling",
    imageSrc: "https://images.unsplash.com/photo-1631160312543-f61b1c6d35b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Installed over 1,500 Cat6A drops, 24-strand fiber backbone, and built out three IDF closets for a new corporate campus.",
    client: "FinTech Innovations",
    duration: "4 Months",
    challenge: "A rapidly growing fintech company was moving into a 3-story building. They required 10Gbps connectivity at every desk and a redundant fiber backbone to ensure zero downtime for their trading floor.",
    solution: "We designed a star topology network with a high-density Main Distribution Frame (MDF) and three Intermediate Distribution Frames (IDFs). We ran over 250,000 feet of Belden Cat6A cabling and armored fiber optic uplinks, certifying every single drop with Fluke Versiv testers.",
    gearList: ["Belden Cat6A 10GX", "Corning SM Fiber", "Chatsworth Racks", "Panduit Managers", "Fluke Certified"],
    stats: [
      { label: "Data Drops", value: "1,500+" },
      { label: "Fiber Strands", value: "48" },
    ]
  },
  {
    id: "warehouse-security",
    title: "Warehouse Security",
    category: "Security",
    imageSrc: "https://images.unsplash.com/photo-1534999818448-9B0c346066b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Campus-wide IP surveillance system with over 50 Axis cameras and a centralized access control system for all entry points.",
    client: "Global Logistics Co.",
    duration: "5 Weeks",
    challenge: "Theft and unauthorized access were major concerns for this 100,000 sq ft facility. The perimeter was porous, and night-shift managers had no visibility into the loading docks.",
    solution: "We secured the perimeter with Axis thermal cameras and radar detection. Internal high-bay cameras provide 4K detail of all inventory movements. All doors were fitted with HID readers, integrated into a single pane of glass for easy management by security staff.",
    gearList: ["Axis P-Series Cameras", "Genetec Security Center", "HID Signo Readers", "Altronix Power", "BriefCam Analytics"],
    stats: [
      { label: "Cameras", value: "54" },
      { label: "Storage", value: "60 Days" },
    ]
  },
];