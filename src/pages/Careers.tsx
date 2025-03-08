import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, Building, ChevronRight, X, Upload, CheckCircle } from 'lucide-react';
import { useState, FormEvent, ChangeEvent } from 'react';

interface JobPosition {
  id: number;
  title: string;
  location: string;
  type: string;
  department: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message: string;
  resume: File | null;
}

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null
  });
  
  const jobPositions: JobPosition[] = [
    {
      id: 1,
      title: "Senior Recruitment Specialist",
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      department: "Talent Acquisition",
      salary: "$80,000 - $100,000",
      description: "We're looking for an experienced Senior Recruitment Specialist to join our growing team. In this role, you'll be responsible for full-cycle recruitment for our clients across various industries, with a focus on technical positions.",
      responsibilities: [
        "Manage full-cycle recruitment process for multiple clients simultaneously",
        "Source and screen candidates using various channels and techniques",
        "Conduct initial interviews and assessments to evaluate candidate fit",
        "Collaborate with hiring managers to understand requirements and provide market insights",
        "Maintain detailed records and provide regular updates to clients",
        "Develop and implement innovative recruitment strategies"
      ],
      requirements: [
        "5+ years of experience in recruitment or talent acquisition",
        "Strong knowledge of technical roles and requirements",
        "Experience with ATS systems and recruitment tools",
        "Excellent communication and interpersonal skills",
        "Bachelor's degree in Human Resources, Business, or related field",
        "Experience in agency or RPO environment preferred"
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Comprehensive health, dental, and vision insurance",
        "401(k) matching program",
        "Flexible work arrangements",
        "Professional development opportunities",
        "Paid time off and holidays"
      ]
    },
    {
      id: 2,
      title: "IT Staffing Consultant",
      location: "Chicago, IL (Hybrid)",
      type: "Full-time",
      department: "IT Staffing",
      salary: "$70,000 - $90,000",
      description: "Join our IT Staffing team to help connect top technical talent with our clients. You'll work closely with both clients and candidates to ensure successful placements in the technology sector.",
      responsibilities: [
        "Develop and maintain relationships with clients in the technology sector",
        "Source, screen, and present qualified IT candidates",
        "Understand technical requirements and translate them into effective job descriptions",
        "Negotiate rates and terms with clients and candidates",
        "Provide market insights and salary benchmarks to clients",
        "Monitor placement success and gather feedback for continuous improvement"
      ],
      requirements: [
        "3+ years of experience in IT staffing or technical recruitment",
        "Understanding of technical roles, skills, and industry trends",
        "Strong sales and relationship-building abilities",
        "Experience with CRM systems and recruitment tools",
        "Bachelor's degree in Computer Science, Business, or related field preferred",
        "Excellent negotiation and communication skills"
      ],
      benefits: [
        "Base salary plus commission structure",
        "Comprehensive benefits package",
        "Flexible work arrangements",
        "Regular training and development opportunities",
        "Team building events and activities",
        "Career advancement opportunities"
      ]
    },
    {
      id: 3,
      title: "RPO Account Manager",
      location: "New York, NY (On-site)",
      type: "Full-time",
      department: "RPO Solutions",
      salary: "$90,000 - $110,000",
      description: "We're seeking an experienced RPO Account Manager to oversee client relationships and ensure the successful delivery of our recruitment process outsourcing services.",
      responsibilities: [
        "Manage client relationships and serve as the primary point of contact",
        "Oversee the delivery of RPO services according to client agreements",
        "Lead a team of recruiters and coordinate their activities",
        "Monitor KPIs and provide regular performance reports to clients",
        "Identify opportunities for service expansion and process improvement",
        "Resolve escalated issues and ensure client satisfaction"
      ],
      requirements: [
        "7+ years of experience in recruitment or staffing, with at least 3 years in RPO",
        "Proven track record of managing client relationships",
        "Experience leading recruitment teams and projects",
        "Strong analytical skills and ability to interpret recruitment metrics",
        "Bachelor's degree in Business, Human Resources, or related field",
        "Excellent presentation and communication skills"
      ],
      benefits: [
        "Competitive salary and performance-based bonuses",
        "Comprehensive benefits package",
        "401(k) with employer matching",
        "Professional development budget",
        "Paid time off and holidays",
        "Employee recognition programs"
      ]
    },
    {
      id: 4,
      title: "Technical Recruiter - Engineering",
      location: "Austin, TX (Remote)",
      type: "Full-time",
      department: "Technical Recruitment",
      salary: "$65,000 - $85,000",
      description: "Join our specialized technical recruitment team focusing on engineering roles. You'll be responsible for sourcing and placing top engineering talent across various industries.",
      responsibilities: [
        "Source and recruit candidates for engineering positions (software, hardware, systems, etc.)",
        "Screen resumes and conduct technical phone interviews",
        "Coordinate with hiring managers to understand technical requirements",
        "Stay updated on engineering trends, technologies, and market rates",
        "Build and maintain a pipeline of qualified engineering candidates",
        "Attend industry events and networking opportunities"
      ],
      requirements: [
        "3+ years of experience in technical recruitment, preferably for engineering roles",
        "Understanding of engineering disciplines, technologies, and terminology",
        "Experience with technical screening and assessment methods",
        "Proficiency with ATS systems and sourcing tools",
        "Bachelor's degree preferred",
        "Strong networking and relationship-building skills"
      ],
      benefits: [
        "Competitive base salary plus placement bonuses",
        "Health, dental, and vision insurance",
        "Remote work flexibility",
        "Professional development opportunities",
        "Paid time off and holidays",
        "Team building events"
      ]
    }
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would use FormData to send the file
      // and other form data to your backend or a service like EmailJS
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('message', formData.message);
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }
      formDataToSend.append('to_email', 'lydia@eminentitinc.com');
      
      // Simulate API call with a timeout
      // In a real implementation, you would use fetch or axios to send the data
      // Example: await fetch('/api/submit-application', { method: 'POST', body: formDataToSend });
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      setFormSubmitted(true);
      
      // Reset form after submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: '',
        resume: null
      });
      
      // Close the form after a delay
      setTimeout(() => {
        setShowApplicationForm(false);
        setFormSubmitted(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openApplicationForm = (jobTitle?: string) => {
    if (jobTitle) {
      setFormData(prev => ({
        ...prev,
        position: jobTitle
      }));
    }
    setShowApplicationForm(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Join Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover exciting career opportunities at Eminent IT Services and be part of a team that's transforming the staffing industry
            </p>
          </div>
        </motion.div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Eminent IT</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a dynamic work environment where your skills and contributions are valued
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Growth Opportunities",
                description: "Continuous learning and advancement paths for all employees",
                icon: <ChevronRight className="w-6 h-6" />
              },
              {
                title: "Collaborative Culture",
                description: "Work with talented professionals in a supportive environment",
                icon: <ChevronRight className="w-6 h-6" />
              },
              {
                title: "Work-Life Balance",
                description: "Flexible arrangements that respect your personal time",
                icon: <ChevronRight className="w-6 h-6" />
              },
              {
                title: "Competitive Benefits",
                description: "Comprehensive packages designed for your wellbeing",
                icon: <ChevronRight className="w-6 h-6" />
              },
              {
                title: "Industry Leadership",
                description: "Be part of a company at the forefront of staffing innovation",
                icon: <ChevronRight className="w-6 h-6" />
              },
              {
                title: "Diverse Projects",
                description: "Work across various industries and challenging assignments",
                icon: <ChevronRight className="w-6 h-6" />
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center text-blue-600">
                  {benefit.icon}
                  <span className="ml-2">{benefit.title}</span>
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-blue-900">
      {/* <section className="py-20 bg-gray-100"> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Explore our current opportunities and find your perfect role
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobPositions.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-blue-500" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Building className="w-4 h-4 mr-2 text-blue-500" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="w-4 h-4 mr-2 text-blue-500" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <Briefcase className="w-10 h-10 text-blue-100 bg-blue-500 p-2 rounded-full" />
                </div>
                <p className="mt-4 text-gray-600 line-clamp-3">{job.description}</p>
                <div className="mt-4">
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
                    View Details
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h3>
              <button 
                onClick={() => setSelectedJob(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                  <span>{selectedJob.location}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-2 text-blue-500" />
                  <span>{selectedJob.type}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Building className="w-5 h-5 mr-2 text-blue-500" />
                  <span>{selectedJob.department}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <DollarSign className="w-5 h-5 mr-2 text-blue-500" />
                  <span>{selectedJob.salary}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Job Description</h4>
                <p className="text-gray-700">{selectedJob.description}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Responsibilities</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {selectedJob.responsibilities.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Requirements</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {selectedJob.requirements.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Benefits</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {selectedJob.benefits.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 flex justify-center">
                <button 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  onClick={() => {
                    setSelectedJob(null);
                    openApplicationForm(selectedJob.title);
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Don't See the Right Fit?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              onClick={() => openApplicationForm()}
            >
              Submit Your Resume
            </motion.button>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">
                {formData.position ? `Apply for ${formData.position}` : 'Submit Your Application'}
              </h3>
              <button 
                onClick={() => setShowApplicationForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              {formSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h4>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest in joining Eminent IT Services. We've received your application and will be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="fullName">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="position">
                        Position <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Position you're applying for"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="experience">
                      Years of Experience <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1 years">0-1 years</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-10 years">5-10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">
                      Cover Letter / Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="resume">
                      Resume <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        required
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                      />
                      <label 
                        htmlFor="resume" 
                        className="cursor-pointer flex flex-col items-center justify-center"
                      >
                        <Upload className="w-10 h-10 text-blue-500 mb-2" />
                        <span className="text-gray-700 font-medium">
                          {formData.resume ? formData.resume.name : 'Click to upload your resume'}
                        </span>
                        <span className="text-gray-500 text-sm mt-1">
                          Accepted formats: PDF, DOC, DOCX
                        </span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`${
                        isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                      } text-white px-8 py-3 rounded-lg font-semibold transition-colors w-full md:w-auto`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}