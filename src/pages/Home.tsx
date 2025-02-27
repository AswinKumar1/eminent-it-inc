import { motion } from 'framer-motion';
import { Users, Briefcase, TrendingUp, ChevronDown, CheckCircle, Clock, UserCheck } from 'lucide-react';
import CountUp from '../components/CountUp';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center"
      >
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Empowering Your
              <br />
              <span className="text-blue-400">Business Success</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Connect with top talent across industries and transform your business with Eminent IT Services
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg text-lg hover:bg-blue-50 transition-colors"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.section>

      {/* 1. WHO WE ARE Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">WHO WE ARE</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Eminent IT Services LLC is a boutique staffing firm serving clients across a wide range of industries,
                including IT, Engineering, Healthcare, Banking &amp; Finance, Accounting, Insurance, Retail,
                Manufacturing, and more. We are dedicated to finding the perfect talent for your business and not just
                IT.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We excel at understanding our clients' business needs, staffing objectives, and the culture they aim
                to cultivate. With over a decade of experience, we recognize the significance of every hire to our clients'
                success. From initial screening to onboarding, we carefully manage and personalize the entire vetting
                process with precision and care to ensure a seamless fit.
              </p>
              <p className="text-xl font-semibold text-blue-600 italic">
                Together, we can achieve greater results
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">WHAT WE DO</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Team meeting" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 md:order-2"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                At Eminent IT Services LLC, we strongly believe that one solution doesn't fit for all. As a self-directed,
                independently funded firm, we have the flexibility to design customized staffing solutions tailored to
                your specific talent challenges &amp; budget.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Built on a foundation of staffing and recruitment expertise, we are passionate about addressing your
                workforce challenges, whether big or small. Our extensive experience sets us apart, allowing us to
                deliver exceptional services that drive your business success.
              </p>
              <p className="text-xl font-semibold text-blue-600 italic">
                We make finding great people easier &amp; faster for you
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. HOW WE WORK Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">HOW WE WORK</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Eminent's personalized approach sets us apart from other staffing firms. We work directly with
                decision-makers and hiring managers to fully understand the nuances of each requirement,
                including your company's culture, expectations, and specific needs that may not be detailed in
                the job description.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team fosters strong relationships with both active and passive talent, giving us access to a
                network of top professionals. These connections allow us to quickly and efficiently match in-
                demand candidates with your business needs. We ensure that every candidate we present has
                been thoroughly vetted to align with your objectives and make a positive impact from day one.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Business meeting" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Contract Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Staffing Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer multiple engagement models to fit your specific business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Contract</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Flexible workforce for project-based needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Access to specialized skills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Scale your team up or down as needed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reduced administrative burden</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <UserCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Contract to Hire</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Evaluate talent before permanent commitment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reduce hiring risks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Seamless transition to permanent roles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Cultural fit assessment</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Full Time</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Long-term talent acquisition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive candidate screening</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Cultural and technical fit focus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reduced time-to-hire</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Reliable, Customizable Talent Partner */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Reliable, Customizable Talent Partner</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed">
                We understand the importance of time &amp; filling every position for our clients. That's why we take full
                responsibility for finding the right talent to meet your needs. We don't just send resumes with keyword
                matchings—we engage in true recruitment by thoroughly understanding your requirements and
                carefully qualifying each candidate.
              </p>
              <p className="text-lg leading-relaxed">
                By identifying the best-fit candidates, we deliver only top-quality professionals who align with your goals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed">
                We know the value of time hence we combine over 16 years of expertise with cutting-edge AI
                technology in our recruiting process, accelerating hiring while maintaining the highest standards of
                quality. Our approach is proactive and efficient, ensuring that no time is wasted.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Bridging Talent and Opportunity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bridging Talent and Opportunity Across Industries</h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:w-2/3"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                As a business, your focus will be on driving growth and achieving your core objectives. Our staffing
                solutions eliminate hiring challenges, allowing you to stay focused on what matters most and maintain
                your competitive edge in the industry.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:w-1/3"
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Business team" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <p className="text-5xl font-bold text-blue-600 mb-2">
                <CountUp end={16} suffix="+" />
              </p>
              <p className="text-xl text-gray-700">Years of Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <p className="text-5xl font-bold text-blue-600 mb-2">
                <CountUp end={500} suffix="+" />
              </p>
              <p className="text-xl text-gray-700">Clients Served</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <p className="text-5xl font-bold text-blue-600 mb-2">
                <CountUp end={5000} suffix="+" />
              </p>
              <p className="text-xl text-gray-700">Candidates Placed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Client List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
            <p className="text-xl text-gray-600">Trusted by leading companies across industries</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1611162618479-ee4d1e0e3cff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1611162616714-b1cdc709f6a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1611162617263-4ec3060a058e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1611162616991-b73a5e9a2354?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            ].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img src={logo} alt={`Client ${index + 1}`} className="max-h-16" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
            <p className="text-xl text-gray-600">What our clients say about us</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Eminent IT Services has been instrumental in helping us find top talent quickly. Their understanding of our industry and company culture is exceptional.",
                name: "Sarah Johnson",
                title: "CTO, TechSolutions Inc.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              },
              {
                quote: "The quality of candidates provided by Eminent IT is consistently high. They've saved us countless hours in the hiring process and delivered exceptional results.",
                name: "Michael Chen",
                title: "HR Director, HealthPlus",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              },
              {
                quote: "Working with Eminent IT has transformed our hiring process. Their personalized approach and attention to detail have made them an invaluable partner.",
                name: "Jessica Williams",
                title: "COO, FinanceWorks",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}