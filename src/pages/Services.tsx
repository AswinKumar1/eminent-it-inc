import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Code, Building, ChevronRight, Briefcase, Factory } from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      id: 'it-staffing',
      icon: <Users className="w-12 h-12" />,
      title: "IT Staffing",
      description: "Connect with top IT talent across various specializations including software development, cybersecurity, data science, and more.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 'non-it-staffing',
      icon: <Briefcase className="w-12 h-12" />,
      title: "Non-IT Staffing",
      description: "Find exceptional talent for roles in finance, healthcare, administration, marketing, and other non-technical positions.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 'offshore-services',
      icon: <Code className="w-12 h-12" />,
      title: "Offshore Staffing Services",
      description: "Access skilled professionals from our global talent pool for your technical and non-technical projects at competitive rates.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const additionalServices = [
    {
      id: 'rpo',
      icon: <Building className="w-8 h-8" />,
      title: "Recruitment Process Outsourcing (RPO)",
      description: "Outsource all or part of your recruitment processes to our expert team"
    },
    {
      id: 'executive-search',
      icon: <Users className="w-8 h-8" />,
      title: "Executive Search",
      description: "Find top-tier leadership talent for your organization's most critical roles"
    },
    {
      id: 'contract-staffing',
      icon: <Factory className="w-8 h-8" />,
      title: "Contract Staffing",
      description: "Flexible staffing solutions for project-based needs and temporary positions"
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

      {/* Main Service Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive staffing solutions designed to meet your specific business requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <div className="text-blue-600">{service.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link 
                    to={`/services/${service.id}`} 
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Learn More
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions to address your unique staffing challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <div className="text-blue-600">{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={`/services/${service.id}`} 
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
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
                <Link 
                  to="/contact" 
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
                >
                  Contact Us Today
                </Link>
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
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
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