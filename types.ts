// Fix: Import React to make JSX types available.
import type React from "react";

export enum PortfolioCategory {
  ALL = "All",
  BIRTHDAY = "Birthday Flyers",
  WEBINAR = "Webinar Designs",
  BANNER = "Banner Designs",
  BRAND = "Brand Identity",
  PROGRAM = "Program Designs",
  NEWMONTH = "New Month Designs",
  CAROUSEL = "Carousel Designs",
  MORE = "More Designs",
  VIDEO = "Video/AI Ads",
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  // Fix: Use React.ReactElement instead of JSX.Element to resolve namespace error.
  icon: React.ReactElement;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
}

export interface PortfolioItem {
  id: number;
  category: PortfolioCategory;
  title: string;
  imageUrl: string;
  description: string; // Added description field for unique item details
  isVideo?: boolean;
  videoUrl?: string;
  isLandscape?: boolean;
}
