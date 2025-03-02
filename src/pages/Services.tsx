import { motion } from 'framer-motion';
import { Users, Search, Code, Shield, Database, Headphones, Building, Globe } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function Services() {
  const location = useLocation();
  const rpoRef = useRef<HTMLDivElement>(null);
  const recruitmentRef = useRef<HTMLDivElement>(null);
  const offshoreRef = useRef<HTMLDivElement>(null);

  // Handle scrolling to sections based on hash in URL
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const hash = location.hash.replace('#', '');
        if (hash === 'rpo' && rpoRef.current) {
          rpoRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (hash === 'recruitment' && recruitmentRef.current) {
          recruitmentRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (hash === 'offshore' && offshoreRef.current) {
          offshoreRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure the component is fully rendered
    }
  }, [location]);

  const services = [
    {
      id: 'rpo',
      ref: rpoRef,
      icon: <Building className="w-12 h-12" />,
      title: "Recruitment Process Outsourcing (RPO)",
      description: "Outsource all or part of your recruitment processes to our expert team",
      details: [
        "Acts as an extension of your company's HR or recruitment team",
        "Takes over sourcing, screening, interviewing, and onboarding candidates",
        "Dedicated recruiters allocated based on your specific needs",
        "Scale up/down resources monthly based on business requirements",
        "Ensures hiring practices comply with local laws and regulations"
      ],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 'recruitment',
      ref: recruitmentRef,
      icon: <Search className="w-12 h-12" />,
      title: "Recruitment and Talent Acquisition",
      description: "Comprehensive talent acquisition services from job posting to candidate selection",
      details: [
        "Posts job openings on various platforms and sources qualified candidates",
        "Conducts initial screening interviews and assessments",
        "Performs thorough background checks",
        "Shortlists candidates who match your requirements",
        "Streamlines the entire hiring process"
      ],
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 'offshore',
      ref: offshoreRef,
      icon: <Code className="w-12 h-12" />,
      title: "IT Offshore Staffing Services",
      description: "Access skilled IT professionals for your technical projects and support needs",
      details: [
        "Provides IT/software developers skilled in various programming languages",
        "Offers technically sound professionals for unique software projects",
        "Supplies technical support staff for troubleshooting and maintenance",
        "Assists with network infrastructure management",
        "Supports IT infrastructure management needs"
      ],
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80")',
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
            <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              As one of the best staffing companies, we cater to clients with unique on and offshore solutions tailored to their business needs
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                ref={service.ref}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg">
                    <div className="text-blue-600">{service.icon}</div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  <p className="text-xl text-gray-600">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="flex items-start"
                      >
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className={`rounded-xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'md:order-1' : ''}`}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-[400px] object-cover"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Eminent IT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine industry expertise with personalized service to deliver exceptional staffing solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Industry Expertise",
                description: "Over 16 years of experience in staffing across multiple industries"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Reach",
                description: "Access to talent pools across the globe for your specific requirements"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Assurance",
                description: "Rigorous vetting process to ensure only top candidates are presented"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Custom Solutions",
                description: "Tailored staffing approaches designed for your unique business needs"
              },
              {
                icon: <Headphones className="w-8 h-8" />,
                title: "Dedicated Support",
                description: "Personalized attention and responsive communication throughout the process"
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Scalable Resources",
                description: "Flexible staffing options that grow with your business requirements"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Ready to Transform Your Staffing Strategy?</h2>
              <p className="text-xl text-blue-100">
                Connect with our team today to discuss how our staffing solutions can address your specific business challenges.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="/contact" 
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
                >
                  Contact Us Today
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Business team collaboration" 
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}