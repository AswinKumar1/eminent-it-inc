import { motion, useAnimation } from 'framer-motion';
import { Users, Briefcase, TrendingUp, ChevronDown, CheckCircle, Clock, UserCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import CountUp from '../components/CountUp';
import ProcessFlow from '../components/ProcessFlow';

// Custom hook for testimonial carousel
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function Home() {
  // Testimonial carousel state
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const whoWeAreSectionRef = useRef<HTMLElement>(null);
  
  // Function to scroll to the "WHO WE ARE" section
  const scrollToWhoWeAre = () => {
    whoWeAreSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const testimonials = [
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
    },
    {
      quote: "We've been able to scale our engineering team rapidly thanks to Eminent IT's recruitment expertise. They truly understand our technical requirements.",
      name: "David Rodriguez",
      title: "VP of Engineering, CloudTech",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Their RPO solution has completely transformed how we approach hiring. The quality of candidates and efficiency of the process is remarkable.",
      name: "Amanda Lee",
      title: "Talent Acquisition Manager, RetailGiant",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  // Auto-advance testimonials
  useInterval(() => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  }, 5000);

  // Client logos with actual company logos
  const clients = [
    {
      name: "Brown Brothers Harriman",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Brown_Brothers_Harriman_Logo_1.svg/1200px-Brown_Brothers_Harriman_Logo_1.svg.png"
    },
    {
      name: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png"
    },
    {
      name: "Intuit",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAkFBMVEX///8kbP8daf9Uh/8AYP9ejv4AYv71+P3K1/3C0v5Wif8AYf////0AY/3s8v/m7v7U3/7Z5f6lvv4xdf8rcv8AXP9Aef9Ce/6Usf+Oq/4WZ/+yx/ySrv8AWv/Y4vywxP5tl/5+pP1Igf3J2ft2n/0lb/9xmv2Wsvtci/1hkPxIg/6guP2Dpv3g6f27zf2lv/xr43x/AAAEeUlEQVR4nO2ba2OiOhCGMSKoJOB1tbFrvW51a7f//98du1aYgUHR2tNzzPt8NJdJHrkkMHgeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3gf7gu8fxXWjGqXph5+lh1mhvtvNeMy6pq6tTNX5pBanggvjX/OOdUT1lEZaqCp82KjBW7bHWRObHuKu9QjzdqFdkJLRYTKTQk0VWo0EjLknB4vjjpuoAFtfIavoqxS+RpZOVCVSNoky0aBX/nYGqyM9j1/3st6gnBe9FWY0BDdgiIx8eC9a24gCiq2QFmYFAlhXOfVsrovzFNB+xr4SKEsNMVvqbkWWZLGKfySIj948Fg4rxa+YrZGndtJKqg67HXEi3ZWk99k+EDBYhOxcvluXdlaxf0cmYah1/Spb+cT+y9K+gPN5hArWQhHVY1plz8IAdkRYOy/KWwyphV1ncy69Z9yJLe+tKc/ebaeB+1bHen6xHwwMoG/i+H5m8wmwOA74m5I2lRemtZfFFKR89xd56URrnXJnBuJnE8fRtE/FhBMd9it62KXU61N+sKN1t3FhWgw+AjFPVedFtZelnJkupSbr5fW2zm+R+GyKGDkkHUVeOf2NZnJjcn/zXMyYqcEIWu1rbEV1Q5W6TfkceK5UlV/laWQmVVfJvXUK5rA71ofohG48e08Wq3Yl9uyOLn4V+khuO3pAdoxqIfTski9owj/l2OqEuTSz17ZAs4qImPOnSM3JJi5rSaCvIuvUKnvPvXbPI6l1ti4PRTXLVMk9S3+7ISogLK0xDh/Q0fZH6dkdWlwSKllJTsrUwz1IFd2S9UllSIP2bzBOyskDi6pdsJuz42gv8yA1ZGrJSIKvIN8vyIOsDyErhsqS+L5YlTbmXLecgi8h6kab8giMrhciyD8KU9Q5HVtoJWdkq6VGvbpMKI8dlzcgO0wq5FiEZn9rch6zC8653qsh6pNvxSXHOEzI+u6IlDsqiMvhpdiinLwLMGy1yTxZ7ElQL8vdD/UKfx/L5OiiLv/GPlvy1SJPl8LDEPydlPbNUOdOiEVrszaXd3YksaYlUTVbMk0/8efp+Ml7x3LDcdF2U5W15LoA1s8k0SaaTWcDTM/nCwVFZNNCHrmDo+4X0k/xrbydl6YdcAoqMXWkcWfw5fClqnY/gqKzXCodWca5uyvL08mzq6rBVaOWoLM87Zyv6U+zfVVnam9bKPuN4710the5dlfWeDLAt/TrBr4s5Ov9fWbtPytp392cdSHfFoCY8uHnnO2QNswxelljUzQrUUJaVZQYHsqwoqzE8J2vf4VN/34CKUjZav5VlypJP6OywRBadww1kdeqNlDY7skhBPRFa6vkmrbARX8zEbdJF92x68L5CZ9cPAmP/YoKgPxczUg4sSe9tuUpM53CDBNxqX9Web3pljWKDuNWbz7bb2bzXSk63on2X1Pvsd77/fe56cgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVOEf9nCDAK06+dAAAAAASUVORK5CYII="
    },
    {
      name: "Walmart",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1280px-Walmart_logo.svg.png"
    },
    {
      name: "ADP",
      logo: "data:image/png;base64,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"
    },
    {
      name: "Verizon Wireless",
      logo: "data:image/png;base64,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"
    },
    {
      name: "Barclays",
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Barclays-Logo.png"
    },
    {
      name: "Comcast",
      logo: "https://1000logos.net/wp-content/uploads/2016/12/Comcast-Logo.jpg"
    },
    {
      name: "Blue Cross Blue Shield",
      logo: "data:image/png;base64,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"
    }
  ];

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
              onClick={scrollToWhoWeAre}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollToWhoWeAre}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.section>

      {/* 1. WHO WE ARE Section */}
      <section ref={whoWeAreSectionRef} className="py-20 bg-white">
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

      {/* NEW: Our RPO Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Staffing Workflow</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive Staffing workflow follows a structured approach to deliver exceptional talent
            </p>
          </motion.div>

          <ProcessFlow />
        </div>
      </section>

      {/* 4. Contract Types Section */}
      <section className="py-20 bg-white">
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                As a business, your focus will be on driving growth and achieving your core objectives. Our staffing
                solutions eliminate hiring challenges, allowing you to stay focused on what matters most and maintain
                your competitive edge in the industry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand that finding the right talent is crucial for your success. Our comprehensive approach
                ensures that we identify candidates who not only have the technical skills required but also align
                with your company culture and values.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-xl h-[400px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Business team" 
                className="w-full h-full object-cover"
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
                <CountUp end={1500} suffix="+" />
              </p>
              <p className="text-xl text-gray-700">Candidates Placed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Client List - UPDATED with actual logos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1.5, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
            <p className="text-xl text-gray-600">Trusted by leading companies across industries</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-16 w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonials - UPDATED with smaller size */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Testimonials</h2>
            <p className="text-xl text-white">What our clients say about us</p>
          </motion.div>

          <div className="relative overflow-hidden">
            {/* Testimonial Carousel */}
            <div className="relative h-[300px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 w-full"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: activeTestimonial === index ? 1 : 0,
                    x: activeTestimonial === index ? 0 : 100,
                    zIndex: activeTestimonial === index ? 10 : 0
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col max-w-3xl mx-auto">
                    <div className="flex-grow">
                      <div className="text-blue-600 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <p className="text-gray-700 italic text-base mb-4">{testimonial.quote}</p>
                    </div>
                    <div className="flex items-center mt-2">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-3 object-cover border-2 border-blue-100"
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

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    activeTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}