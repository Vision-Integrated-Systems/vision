export interface TrainingVideo {
  id: string;
  title: string;
  description: string;
  youtubeId: string; // The ID from the YouTube URL (e.g., dQw4w9WgXcQ)
  duration: string;
  category: string;
  tags: string[];
}

export const trainingCategories = ["Genetec", "Axis", "Crestron", "General"];

export const trainingVideos: TrainingVideo[] = [
  // GENETEC VIDEOS
  {
    id: "gen-01",
    title: "Security Center: Software Installation",
    description: "Security Center software installation. Both server and workstation are covered in this video.",
    youtubeId: "G0AY4mdrBA4",
    duration: "22:34",
    category: "Genetec",
    tags: ["Security Center", "Installation"],
  },
  {
    id: "gen-02",
    title: "Security Center Architecture",
    description: "Server architecture / role-based architecture.",
    youtubeId: "7WjmdRHasao",
    duration: "28:19",
    category: "Genetec",
    tags: ["Security Center", "Architecture"],
  },
  {
    id: "gen-03",
    title: "Customizing How Tiles Are Displayed",
    description: "How to customize the way tiles are displayed in Security Center.",
    youtubeId: "o-DEyYAtWbs",
    duration: "1:12",
    category: "Genetec",
    tags: ["Security Center", "Customization"],
  },
  {
    id: "gen-04",
    title: "Generating Reports",
    description: "How to generate reports in Security Center.",
    youtubeId: "admZ639B4YA",
    duration: "1:25",
    category: "Genetec",
    tags: ["Security Center", "Reports"],
  },

  // AXIS VIDEOS


  // CRESTRON VIDEOS
];