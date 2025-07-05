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
  "Environmental Data",
  "Market Analysis",
  "Sustainability",
  "AI",
  "Entrepreneurship"
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
    title: "Effect of Electric Cars on the Market",
    description: "An analysis of how the rise of electric vehicles is transforming the automotive market, impacting sales, infrastructure, and consumer behavior.",
    thumbnail: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600&auto=format&fit=crop",
    category: ["Market Analysis", "Sustainability"],
    tools: ["Python", "Tableau", "Excel"],
    date: "April 2024",
    url: "#project/electric-cars-market"
  },
  {
    id: 3,
    title: "Growth of Startups After the Launch of AI Tools like ChatGPT",
    description: "A data-driven look at the surge in startup formation and funding following the release of advanced AI tools such as ChatGPT, and their impact on innovation.",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop",
    category: ["AI", "Entrepreneurship"],
    tools: ["Python", "Power BI", "Google Trends"],
    date: "June 2024",
    url: "#project/ai-startup-growth"
  }
];
