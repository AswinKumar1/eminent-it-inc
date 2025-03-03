import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  Users, 
  Code, 
  Building, 
  Briefcase, 
  Factory, 
  CheckCircle, 
  ArrowLeft,
  Globe,
  Clock,
  Shield,
  Zap,
  Award,
  Layers
} from 'lucide-react';
import { useEffect } from 'react';
import ProcessFlow from '../components/ProcessFlow';

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: JSX.Element;
  image: string;
  benefits: {
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
  features: string[];
  showProcessFlow?: boolean;
}

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const services: Record<string, ServiceDetail> = {
    'it-staffing': {
      id: 'it-staffing',
      title: 'IT Staffing Solutions',
      subtitle: 'Connect with top IT talent across various specializations',
      description: 'Our IT staffing services provide businesses with access to highly skilled technology professionals across a wide range of specializations. Whether you need software developers, cybersecurity experts, data scientists, or IT project managers, we have the expertise to find the perfect match for your requirements. We understand the unique challenges of the tech industry and work closely with you to identify candidates who not only have the technical skills but also align with your company culture and project goals.',
      icon: <Users className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      benefits: [
        {
          title: 'Technical Expertise',
          description: 'Access to professionals with specialized skills in the latest technologies',
          icon: <Code className="w-6 h-6" />
        },
        {
          title: 'Faster Hiring',
          description: 'Reduce time-to-hire with our pre-screened candidates and streamlined process',
          icon: <Clock className="w-6 h-6" />
        },
        {
          title: 'Flexible Staffing',
          description: 'Scale your team up or down based on project requirements',
          icon: <Layers className="w-6 h-6" />
        },
        {
          title: 'Quality Assurance',
          description: 'Rigorous technical assessments ensure candidates meet your standards',
          icon: <Shield className="w-6 h-6" />
        }
      ],
      features: [
        'Full-time placement for permanent positions',
        'Contract staffing for project-based needs',
        'Contract-to-hire options to evaluate fit before committing',
        'Technical screening and skill verification',
        'Industry-specific expertise across various tech sectors',
        'Ongoing support throughout the hiring process'
      ]
    },
    'non-it-staffing': {
      id: 'non-it-staffing',
      title: 'Non-IT Staffing Solutions',
      subtitle: 'Find exceptional talent for roles in finance, healthcare, administration, and more',
      description: 'Our Non-IT staffing services help businesses find exceptional talent across a wide range of industries and functions. From finance and accounting to healthcare, administration, marketing, and human resources, we connect you with qualified professionals who can drive your business forward. Our comprehensive recruitment approach ensures that we understand both the technical requirements of the role and the soft skills needed for success in your organization.',
      icon: <Briefcase className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      benefits: [
        {
          title: 'Industry Expertise',
          description: 'Specialized recruiters with deep knowledge of various sectors',
          icon: <Building className="w-6 h-6" />
        },
        {
          title: 'Comprehensive Screening',
          description: 'Thorough evaluation of skills, experience, and cultural fit',
          icon: <CheckCircle className="w-6 h-6" />
        },
        {
          title: 'Reduced Turnover',
          description: 'Better candidate matching leads to higher retention rates',
          icon: <Award className="w-6 h-6" />
        },
        {
          title: 'Cost Efficiency',
          description: 'Streamlined recruitment process saves time and resources',
          icon: <Zap className="w-6 h-6" />
        }
      ],
      features: [
        'Executive and management recruitment',
        'Administrative and support staff placement',
        'Finance and accounting professionals',
        'Healthcare staffing solutions',
        'Sales and marketing talent acquisition',
        'Human resources personnel placement'
      ]
    },
    'offshore-services': {
      id: 'offshore-services',
      title: 'Offshore Staffing Services',
      subtitle: 'Access skilled professionals from our global talent pool at competitive rates',
      description: 'Our Offshore Staffing Services provide businesses with access to a global talent pool of skilled professionals at competitive rates. We help you build dedicated offshore teams that work as an extension of your in-house staff, allowing you to scale operations efficiently while maintaining quality. Our comprehensive offshore staffing solutions cover everything from team setup and infrastructure to ongoing management and support, ensuring a seamless integration with your existing processes.',
      icon: <Code className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      benefits: [
        {
          title: 'Cost Savings',
          description: 'Significant reduction in operational and labor costs',
          icon: <Zap className="w-6 h-6" />
        },
        {
          title: 'Global Talent Access',
          description: 'Tap into international pools of specialized skills',
          icon: <Globe className="w-6 h-6" />
        },
        {
          title: 'Scalability',
          description: 'Easily scale your team up or down based on business needs',
          icon: <Layers className="w-6 h-6" />
        },
        {
          title: 'Round-the-Clock Operations',
          description: 'Leverage time zone differences for 24/7 productivity',
          icon: <Clock className="w-6 h-6" />
        }
      ],
      features: [
        'Dedicated development teams',
        'IT support and maintenance services',
        'Quality assurance and testing',
        'Back-office operations',
        'Data processing and management',
        'Customer support services'
      ]
    },
    'rpo': {
      id: 'rpo',
      title: 'Recruitment Process Outsourcing (RPO)',
      subtitle: 'Outsource all or part of your recruitment processes to our expert team',
      description: 'Our Recruitment Process Outsourcing (RPO) solutions provide a strategic approach to talent acquisition by taking ownership of the entire recruitment function or specific components of it. We work as an extension of your HR team, implementing customized recruitment strategies that align with your business goals and company culture. Our RPO services are designed to improve quality of hire, reduce time-to-fill, and optimize recruitment costs while providing valuable insights and analytics to enhance your overall talent acquisition strategy.',
      icon: <Building className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      benefits: [
        {
          title: 'Strategic Partnership',
          description: 'We function as an extension of your HR department',
          icon: <Users className="w-6 h-6" />
        },
        {
          title: 'Scalable Solutions',
          description: 'Flexible resources that adapt to your hiring volumes',
          icon: <Layers className="w-6 h-6" />
        },
        {
          title: 'Process Optimization',
          description: 'Streamlined recruitment workflows and best practices',
          icon: <Zap className="w-6 h-6" />
        },
        {
          title: 'Data-Driven Insights',
          description: 'Comprehensive reporting and analytics on recruitment metrics',
          icon: <Award className="w-6 h-6" />
        }
      ],
      features: [
        'End-to-end recruitment process management',
        'Employer branding and candidate experience enhancement',
        'Sourcing and talent pipeline development',
        'Interview scheduling and coordination',
        'Offer management and onboarding support',
        'Recruitment technology implementation and optimization'
      ],
      showProcessFlow: true
    },
    'executive-search': {
      id: 'executive-search',
      title: 'Executive Search',
      subtitle: 'Find top-tier leadership talent for your organization\'s most critical roles',
      description: 'Our Executive Search service is designed to identify and attract high-caliber leadership talent for your organization\'s most strategic positions. We understand that executive hires have a significant impact on company performance and culture, which is why our approach combines deep industry knowledge, extensive networks, and a thorough assessment methodology. Our executive search consultants work closely with you to understand your organization\'s unique challenges, culture, and leadership requirements to find executives who will drive your business forward.',
      icon: <Users className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      benefits: [
        {
          title: 'Access to Top Talent',
          description: 'Connections to passive candidates not available through traditional channels',
          icon: <Award className="w-6 h-6" />
        },
        {
          title: 'Confidentiality',
          description: 'Discreet approach for sensitive leadership transitions',
          icon: <Shield className="w-6 h-6" />
        },
        {
          title: 'Thorough Assessment',
          description: 'Comprehensive evaluation of leadership capabilities and cultural fit',
          icon: <CheckCircle className="w-6 h-6" />
        },
        {
          title: 'Market Insights',
          description: 'Valuable intelligence on industry trends and compensation benchmarks',
          icon: <Globe className="w-6 h-6" />
        }
      ],
      features: [
        'C-suite and senior executive recruitment',
        'Board member selection',
        'Succession planning support',
        'Leadership assessment and development',
        'Competitive market analysis',
        'Executive onboarding guidance'
      ]
    },
    'contract-staffing': {
      id: 'contract-staffing',
      title: 'Contract Staffing',
      subtitle: 'Flexible staffing solutions for project-based needs and temporary positions',
      description: 'Our Contract Staffing services provide businesses with flexible workforce solutions to address short-term projects, seasonal demands, or specialized skill requirements. We offer access to a diverse pool of pre-screened professionals who can quickly integrate into your team and deliver results. Whether you need to fill temporary gaps, scale for a specific initiative, or bring in specialized expertise, our contract staffing solutions give you the agility to adapt to changing business needs without the long-term commitment of permanent hires.',
      icon: <Factory className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      benefits: [
        {
          title: 'Workforce Flexibility',
          description: 'Quickly scale your team up or down based on project demands',
          icon: <Layers className="w-6 h-6" />
        },
        {
          title: 'Reduced Overhead',
          description: 'Minimize costs associated with full-time employees',
          icon: <Zap className="w-6 h-6" />
        },
        {
          title: 'Specialized Skills',
          description: 'Access to niche expertise for specific project requirements',
          icon: <Code className="w-6 h-6" />
        },
        {
          title: 'Try Before You Hire',
          description: 'Evaluate potential permanent employees in a working environment',
          icon: <CheckCircle className="w-6 h-6" />
        }
      ],
      features: [
        'Short-term and long-term contract placements',
        'Project-based staffing solutions',
        'Temporary-to-permanent arrangements',
        'Payroll and compliance management',
        'Performance monitoring and feedback',
        'Contract extensions and renewals'
      ]
    }
  };

  const service = serviceId ? services[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The service you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/services" 
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back to Services Button - Fixed Position */}
      <div className="fixed top-24 left-4 z-40 md:left-8">
        <Link 
          to="/services" 
          className="flex items-center justify-center bg-white text-blue-600 p-2 md:px-4 md:py-2 rounded-full shadow-lg hover:bg-blue-50 transition-all group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden md:inline ml-2 font-medium">Back to Services</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url("${service.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
              <div className="text-blue-600">{service.icon}</div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {service.subtitle}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our {service.title.toLowerCase()} can transform your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <div className="text-blue-600">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start bg-blue-50 p-6 rounded-lg"
              >
                <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section (only for RPO) */}
      {service.showProcessFlow && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our RPO Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A structured approach to deliver exceptional recruitment results
              </p>
            </motion.div>
            
            <ProcessFlow />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our {service.title.toLowerCase()} can help your business thrive.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Contact Us Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}