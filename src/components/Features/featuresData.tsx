import { Feature } from "@/types/feature";
import BarChartIcon from "@mui/icons-material/BarChart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WorkIcon from "@mui/icons-material/Work";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <BarChartIcon fontSize="large" />,
    title: "Business Plan Assistance",
    paragraph:
      "We help you craft detailed business plans with accurate financial projections. Our expert guidance ensures your plan stands out to lenders and investors.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: <CheckCircleIcon fontSize="large" />,
    title: "Document Verification Support",
    paragraph:
      "We verify all essential documents, including income proof, identity, and address. Trust us to ensure your paperwork is accurate and ready for submission.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: <WorkIcon fontSize="large" />,
    title: "Loan Application Guidance",
    paragraph:
      "Our team provides step-by-step support in preparing your loan application. We make sure all required documents are properly compiled and submitted on time.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 4,
    icon: <BookmarkAddedIcon fontSize="large" />,
    title: "Registration and Certification Help",
    paragraph:
      "We assist in registering your business and securing necessary certifications like GST and MSME. Our expert support ensures compliance and smooth approval processes.",
    btn: "Learn More",
    btnLink: "/#",
  },
];
export default featuresData;
