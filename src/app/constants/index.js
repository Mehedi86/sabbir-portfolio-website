import { FaHtml5, FaImage, FaHeadset, FaWordpress, FaExpand, FaRocket } from "react-icons/fa"

export const timelineData = {
  education: [
    {
      title: "Computer Science",
      subtitle: "Cambridge University / 2004 - 2007",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
    },
    {
      title: "Bachelor Degree",
      subtitle: "University of Tokyo / 2008 - 2010",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
    },
    {
      title: "Master Degree",
      subtitle: "Harvard University / 2012 - 2015",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
    }
  ],
  experience: [
    {
      title: "Software Engineer",
      subtitle: "Adobe / 2015 - 2017",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
    },
    {
      title: "Back-End Developer",
      subtitle: "Google / 2017 - 2018",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
    },
    {
      title: "UI/UX Designer",
      subtitle: "Discord / 2019 - Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
    }
  ]
}

export const services = [
  {
    id: 1,
    icon: <FaHtml5 size={48} className="text-[#DCC5B2]" />,
    title: "Design Trends",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    id: 2,
    icon: <FaImage size={48} className="text-[#DCC5B2]" />,
    title: "PSD Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    id: 3,
    icon: <FaHeadset size={48} className="text-[#DCC5B2]" />,
    title: "Customer Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    id: 4,
    icon: <FaWordpress size={48} className="text-[#DCC5B2]" />,
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    id: 5,
    icon: <FaExpand size={48} className="text-[#DCC5B2]" />,
    title: "Fully Responsive",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    id: 6,
    icon: <FaRocket size={48} className="text-[#DCC5B2]" />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Ariana Patel",
    role: "Project Manager",
    company: "VisionEdge Solutions",
    review: "An incredible tool that streamlined our workflow. The dashboard is clean, fast, and super intuitive!",
  },
  {
    id: 2,
    name: "Liam Anderson",
    role: "Frontend Developer",
    company: "CodeCrafters Studio",
    review: "Love how smooth everything runs. The UI is responsive, and the overall experience feels premium.",
  },
  {
    id: 3,
    name: "Nora Williams",
    role: "Freelance Designer",
    company: "CreativeFlow",
    review: "This platform helped me deliver client projects faster than ever. Beautiful design and great usability.",
  },
  {
    id: 4,
    name: "Ethan Walker",
    role: "Data Analyst",
    company: "Insight Analytics",
    review: "The insights I get from this are just outstanding. It has boosted my productivity significantly.",
  },
  {
    id: 5,
    name: "Clara Nguyen",
    role: "Startup Founder",
    company: "Nova Labs",
    review: "A must-have platform for any growing business. I’ve seen a noticeable improvement in efficiency.",
  },
  {
    id: 6,
    name: "Benjamin Scott",
    role: "Content Strategist",
    company: "ThinkForward Media",
    review: "Easy to use, reliable, and well-supported. It’s now part of my daily routine at work.",
  }
];

export const skills = [
  { title: "HTML/CSS", percent: 95 },
  { title: "React JS", percent: 90 },
  { title: "Web Design", percent: 80 },
  { title: "Express.js", percent: 95 },
  { title: "JavaScript", percent: 90 },
  { title: "TypeScript", percent: 80 },
];
