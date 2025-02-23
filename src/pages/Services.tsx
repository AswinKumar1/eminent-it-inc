import { motion } from 'framer-motion';
import { Code, Users, Brain, Shield, Database, Headphones, Cloud, Globe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "IT Staffing",
      description: "Connect with top-tier IT professionals for your projects",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & Machine Learning",
      description: "Implement cutting-edge AI solutions for your business",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security measures",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Services",
      description: "Cloud migration and management solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "IT Support",
      description: "24/7 technical support and maintenance services",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80")',
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
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Comprehensive IT solutions to drive your business forward
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div 
                  className="h-48 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-blue-900/60 group-hover:bg-blue-900/70 transition-colors duration-300"></div>
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-8 left-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="text-blue-600">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 mt-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}