import {
  GraduationCap,
  UsersRound,
  Plane,
  BriefcaseBusiness,
} from "lucide-react";

export const company = {
  name: "Global Connect Consultancy",
  shortName: "Global Connect",
  email: "globalconnectconsultancy01@gmail.com",
  address: "",
  map: "",
};

export const services = [
  {
     slug: "study-visa",
  title: "Study Visa",
  icon: GraduationCap,
    label: "Education abroad",
    description:
      "Explore international education opportunities, choose the right course and get guidance with university applications and student visa documentation.",
    intro:
      "The right study journey starts with a thoughtful plan. From choosing a course to organizing your documents, get guidance at every stage.",
    points: [
      "Course and destination counselling",
      "University and college application guidance",
      "Visa documentation assistance",
      "Interview and pre-departure preparation",
    ],
    steps: [
      "Discuss your goals and background",
      "Explore eligible education options",
      "Prepare admission and visa documents",
      "Review the application and next steps",
    ],
    gradient: "from-sky-500 to-blue-700",
  },
  {
    slug: "family-visa",
    title: "Family Visa",
    icon: UsersRound,
    label: "Reunite with loved ones",
    description:
      "Get guidance on family visa options, eligibility requirements and documentation to help you plan your journey to reunite with loved ones.",
    intro:
      "Being close to your loved ones matters. We help you understand available family visa categories and organize the supporting paperwork.",
    points: [
      "Initial eligibility discussion",
      "Relationship documentation guidance",
      "Application checklist assistance",
      "Progress and next-step guidance",
    ],
    steps: [
      "Explain your family situation",
      "Review relevant visa category",
      "Gather supporting evidence",
      "Prepare and review documents",
    ],
    gradient: "from-indigo-500 to-violet-700",
  },
  {
    slug: "tourist-visa",
    title: "Tourist Visa",
    icon: Plane,
    label: "Travel with confidence",
    description:
      "Planning a holiday or visiting loved ones? Get support with tourist visa requirements, application documents and travel preparation.",
    intro:
      "Make travel planning easier with support on required documents and application steps for your intended destination.",
    points: [
      "Destination-specific document checklist",
      "Travel itinerary guidance",
      "Application form assistance",
      "Appointment and interview preparation",
    ],
    steps: [
      "Share your travel plan",
      "Understand destination requirements",
      "Arrange travel documents",
      "Prepare your application",
    ],
    gradient: "from-cyan-500 to-teal-600",
  },
  {
    slug: "business-visa",
    title: "Business Visa",
    icon: BriefcaseBusiness,
    label: "International opportunities",
    description:
      "Explore international business opportunities with guidance on business visa applications, documentation, meetings and professional travel.",
    intro:
      "For international meetings and business visits, well-prepared documents help you approach the process with confidence.",
    points: [
      "Purpose-of-visit documentation",
      "Invitation and supporting letter guidance",
      "Application requirements overview",
      "Appointment preparation",
    ],
    steps: [
      "Share the purpose of travel",
      "Confirm the relevant visa type",
      "Organize business documents",
      "Review submission steps",
    ],
    gradient: "from-blue-500 to-indigo-700",
  },
];

export const destinations = [
  { name: "Canada", flag: "https://flagcdn.com/ca.svg", subtitle: "Study and explore" },
  { name: "Australia", flag: "https://flagcdn.com/au.svg", subtitle: "New experiences" },
  { name: "United States", flag: "https://flagcdn.com/us.svg", subtitle: "Global opportunities" },
  { name: "Germany", flag: "https://flagcdn.com/de.svg", subtitle: "Explore your options" },
  { name: "Poland", flag: "https://flagcdn.com/pl.svg", subtitle: "Discover new paths" },
  { name: "Malta", flag: "https://flagcdn.com/mt.svg", subtitle: "Plan your journey" },
];

export const faqs = [
  {
    q: "What services does Global Connect Consultancy offer?",
    a: "Global Connect Consultancy provides guidance for Study Visas, Tourist Visas, Family Visas and Business Visas to help individuals plan their international journeys.",
  },
  {
    q: "How can I apply for a visa?",
    a: "You can contact our consultancy to discuss your travel goals. Our team will guide you through the visa requirements, documentation and application process.",
  },
  {
    q: "What documents are required for a visa application?",
    a: "Documents vary depending on the visa type and destination. Generally, applicants may need a valid passport, photographs, financial documents and supporting paperwork.",
  },
  {
    q: " How long does the visa application process take?Is visa approval guaranteed?",
    a: "Visa processing times depend on the destination country, visa category and individual application. We help you understand the expected timelines and requirements.",
  },
];

// Starter editorial articles; replace with your own approved content before launch.
export const posts = [
  {
    slug: "study-abroad-planning-checklist",
    category: "Study Abroad",
    date: "Guide",
    title: "A practical checklist before planning to study abroad",
    excerpt:
      "Start with your goals, destination research, finances, and a clear document checklist.",
    body: [
      "Decide what you want to study and identify countries that match your academic and career goals.",
      "Check official institution and visa sources for entry conditions, tuition, financial evidence and timelines.",
      "Keep digital and printed copies of your academic documents, ID and application communications organized.",
    ],
  },
  {
    slug: "organizing-visa-documents",
    category: "Visa Tips",
    date: "Guide",
    title: "How to organize your visa application documents",
    excerpt:
      "Small preparation habits can make an application easier to review and manage.",
    body: [
      "Create a destination-specific checklist using official guidance for the relevant visa category.",
      "Make sure names and dates are consistent across documents and verify any required translations.",
      "Review official submission instructions before uploading or presenting documents.",
    ],
  },
  {
    slug: "questions-for-visa-consultation",
    category: "Consultation",
    date: "Guide",
    title: "Questions to ask during your first visa consultation",
    excerpt:
      "Know what information to bring and what to clarify in the first conversation.",
    body: [
      "Be prepared to discuss your intended travel dates, purpose of travel and relevant background.",
      "Ask which visa categories may apply, what supporting evidence is required and where to find official requirements.",
      "Clarify costs, expected steps and the fact that approvals are determined by visa authorities.",
    ],
  },
];

export function whatsappUrl(
  text = "Hello Global Connect Consultancy, I would like to know more about your visa services.",
) {
  if (!company.phone) return "";
  return `https://wa.me/${company.phone.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}
