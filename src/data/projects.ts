export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string[];
  tools: string[];
  date: string;
  url: string;
}

export const projectCategories = [
  "All",
  "Business Analytics",
  "Data Science",
  "Data Storytelling",
  "Environmental Data"
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Analysis of Rental Market Post LA Fires.",
    description: "Interactive deep-dive into rent movements in LA County before vs. after the January 7 2025 wildfires.",
    thumbnail: "https://media.istockphoto.com/id/587794546/photo/night-long-exposure-photograph-of-the-santa-clarita-wildfire.webp?a=1&b=1&s=612x612&w=0&k=20&c=bF_dhRx2hITiL_OnivgDEhLc5iljxOiqVb4BKxzVWOI=",
    category: ["Environmental Data", "Data Storytelling"],
    tools: ["D3.js", "Python", "Pandas"],
    date: "March 2023",
    url: "#project/climate-trends"
  },
  {
    id: 2,
    title: "COVID-19 Global Impact Dashboard",
    description: "Interactive visualization of COVID-19 data showing spread patterns, vaccination rates, and economic impacts across countries.",
    thumbnail: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=600&auto=format&fit=crop",
    category: ["Data Storytelling", "Social Analysis"],
    tools: ["D3.js", "Tableau", "Python"],
    date: "October 2022",
    url: "#project/covid-dashboard"
  }
];
