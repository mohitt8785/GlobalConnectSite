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
      "Explore international education options with guidance on course selection, applications and visa documents.",
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
      "Understand family visa pathways, documentation and the application journey for eligible relatives.",
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
      "Prepare for short trips, holidays and family visits with clear travel visa application guidance.",
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
      "Plan business travel with guidance for meetings, events, professional visits and application paperwork.",
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
  { name: "Canada", flag: "🇨🇦", subtitle: "Study and explore" },
  { name: "Australia", flag: "🇦🇺", subtitle: "New experiences" },
  { name: "United States", flag: "🇺🇸", subtitle: "Global opportunities" },
  { name: "Germany", flag: "🇩🇪", subtitle: "Explore your options" },
  { name: "Poland", flag: "🇵🇱", subtitle: "Discover new paths" },
  { name: "Malta", flag: "🇲🇹", subtitle: "Plan your journey" },
];

export const faqs = [
  {
    q: "Which visa services do you offer?",
    a: "We provide guidance for Study, Family, Tourist and Business Visa applications. The requirements depend on the destination and your circumstances.",
  },
  {
    q: "How do I get started?",
    a: "Contact our team with your preferred destination, travel purpose and background. We can help explain the next steps and relevant documentation.",
  },
  {
    q: "Do you help with university applications?",
    a: "Our study visa guidance includes support with exploring courses, universities or colleges, and preparing application documents.",
  },
  {
    q: "Is visa approval guaranteed?",
    a: "No. All applications are assessed by the relevant visa authorities. We focus on accurate guidance and organized documentation.",
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
