import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Search, 
  ClipboardCheck, 
  Users, 
  HandshakeIcon, 
  UserPlus, 
  BarChart, 
  ArrowRight 
} from 'lucide-react';
import { useState } from 'react';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const ProcessStep = ({ icon, title, details, index, isActive, onClick }: ProcessStepProps) => {
  return (
    <motion.div 
      className={`relative ${index < 6 ? 'mb-12 md:mb-0' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Connector Line - Dotted */}
      {index < 6 && (
        <div className="hidden md:block absolute left-1/2 top-24 bottom-0 border-l-2 border-dashed border-blue-300 -translate-x-1/2 z-0"></div>
      )}
      
      <div 
        className={`relative z-10 cursor-pointer transition-all duration-300 ${
          isActive ? 'scale-110' : 'hover:scale-105'
        }`}
        onClick={onClick}
      >
        <div 
          className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
            isActive 
              ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white ring-4 ring-blue-200' 
              : 'bg-white text-blue-600 hover:shadow-lg'
          }`}
        >
          {icon}
        </div>
        <h3 className={`mt-4 text-lg font-semibold text-center transition-colors duration-300 ${
          isActive ? 'text-blue-600' : 'text-gray-800'
        }`}>
          {title}
        </h3>
      </div>
      
      {/* Arrow Connector - Desktop */}
      {index < 6 && (
        <div className="hidden md:flex absolute top-10 left-full z-10 w-full items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="w-12 h-12 flex items-center justify-center"
          >
            <ArrowRight className="w-6 h-6 text-blue-500" />
          </motion.div>
        </div>
      )}
      
      {/* Mobile Arrow */}
      {index < 6 && (
        <div className="flex justify-center my-6 md:hidden">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-blue-500" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Planning & Strategy",
      details: [
        "Understand company's hiring needs, culture, and goals",
        "Define the scope of RPO (full-cycle, partial, or project-based)",
        "Set expectations for timelines, technology, and reporting"
      ]
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Talent Mapping",
      details: [
        "Identify target candidate pools and talent pipelines",
        "Use multiple sourcing methods (job portals, social media, referrals)",
        "Leverage employer branding to attract top talent"
      ]
    },
    {
      icon: <ClipboardCheck className="w-10 h-10" />,
      title: "Screening",
      details: [
        "Review resumes and shortlist candidates",
        "Conduct initial interviews (phone/video screenings)",
        "Administer assessments (technical tests, psychometric evaluations)"
      ]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Interview",
      details: [
        "Coordinate and schedule interviews with hiring managers",
        "Facilitate different interview rounds (technical, behavioral, cultural fit)",
        "Collect feedback and shortlist final candidates"
      ]
    },
    {
      icon: <HandshakeIcon className="w-10 h-10" />,
      title: "Offer Management",
      details: [
        "Extend job offers and handle salary negotiations",
        "Ensure compliance with compensation policies and market benchmarks",
        "Manage counteroffers and candidate expectations"
      ]
    },
    {
      icon: <UserPlus className="w-10 h-10" />,
      title: "Onboarding",
      details: [
        "Assist in paperwork, background checks, and pre-employment formalities",
        "Coordinate onboarding activities and ensure a smooth transition",
        "Provide post-hire support to enhance retention"
      ]
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "Reporting",
      details: [
        "Track key recruitment metrics (time-to-fill, cost-per-hire, quality of hire)",
        "Gather feedback from candidates and hiring managers",
        "Optimize the recruitment process based on insights and performance data"
      ]
    }
  ];

  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-6 md:gap-0 mb-16">
        {steps.map((step, index) => (
          <ProcessStep
            key={index}
            icon={step.icon}
            title={step.title}
            details={step.details}
            index={index}
            isActive={activeStep === index}
            onClick={() => setActiveStep(index)}
          />
        ))}
      </div>
      
      {/* Details Panel */}
      <motion.div 
        className="mt-12 bg-white p-10 rounded-2xl shadow-xl border border-blue-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        key={activeStep}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-5 shadow-md">
            <div className="text-white">
              {steps[activeStep].icon}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{steps[activeStep].title}</h3>
        </div>
        <ul className="space-y-4">
          {steps[activeStep].details.map((detail, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start bg-blue-50 p-4 rounded-lg"
            >
              <span className="text-blue-600 mr-3 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-700 font-medium">{detail}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}