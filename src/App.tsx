/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronLeft as ChevronLeftIcon, 
  ChevronRight as ChevronRightIcon, 
  Briefcase, 
  FileText, 
  GraduationCap, 
  Star as StarIcon, 
  Mail as MailIcon, 
  Phone as PhoneIcon, 
  MapPin,
  Globe,
  MessageCircle
} from "lucide-react";

const SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=2070",
    tagline: "PREMIUM RECRUITMENT SERVICES",
    title: "Start Your Career Abroad",
    description: "Connecting skilled professionals with prestigious employers across the globe. Your journey to international success begins here."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109c055?auto=format&fit=crop&q=80&w=2070",
    tagline: "GLOBAL OPPORTUNITIES",
    title: "Explore New Horizons",
    description: "Unlock your potential with career placements in Europe, Asia, and the Middle East. We bridge the gap between talent and opportunity."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
    tagline: "TRUSTED PARTNERSHIPS",
    title: "Your Gateway to Success",
    description: "With over 20 years of experience, we provide seamless transitions for professionals seeking to elevate their careers internationally."
  }
];

const NavLink = ({ href, children, active = false }: { href: string, children: React.ReactNode, active?: boolean }) => (
  <a 
    href={href} 
    className={`font-headline font-bold transition-colors duration-300 pb-1 ${
      active 
        ? "text-brand-red border-b-2 border-brand-red" 
        : "text-brand-charcoal opacity-80 hover:text-brand-red"
    }`}
  >
    {children}
  </a>
);

const ServiceCard = ({ icon: Icon, title, description, features, colorClass }: { icon: any, title: string, description: string, features: string[], colorClass: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div className={`w-14 h-14 rounded-lg ${colorClass} flex items-center justify-center mb-6`}>
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-headline font-bold mb-3">{title}</h3>
    <p className="text-brand-charcoal/70 font-body leading-relaxed mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-2 text-sm text-brand-charcoal/70 font-body">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

const DestinationCard = ({ image, country, region, tag }: { image: string, country: string, region: string, tag: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="group relative h-96 rounded-xl overflow-hidden shadow-sm cursor-pointer"
  >
    <img 
      src={image} 
      alt={country} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    <div className="absolute bottom-0 left-0 p-6 w-full">
      <span className="text-brand-highest font-label text-xs tracking-widest uppercase mb-1 block">{region}</span>
      <h4 className="text-2xl font-headline font-bold text-white mb-2">{country}</h4>
      <p className="text-white/70 text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">{tag}</p>
    </div>
  </motion.div>
);

const TestimonialCard = ({ name, location, text, featured = false }: { name: string, location: string, text: string, featured?: boolean }) => (
  <div className={`bg-white p-10 rounded-xl flex flex-col items-center text-center shadow-sm ${featured ? 'scale-105 z-10 ring-1 ring-brand-red/10' : ''}`}>
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
      ))}
    </div>
    <p className="text-brand-charcoal/70 font-body italic mb-8 leading-relaxed">"{text}"</p>
    <div>
      <div className="font-headline font-bold text-brand-charcoal">{name}</div>
      <div className="text-sm text-brand-charcoal/60 font-label">{location}</div>
    </div>
  </div>
);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 glass-nav shadow-sm">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
          <div className="text-xl font-bold text-brand-charcoal font-headline tracking-tight">
            New Athugalpura Agencies
          </div>
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#" active>Home</NavLink>
            <NavLink href="#">About Us</NavLink>
            <NavLink href="#">Countries</NavLink>
            <NavLink href="#">Our Services</NavLink>
            <NavLink href="#">FAQ</NavLink>
            <NavLink href="#">Contact</NavLink>
          </div>
          <button className="bg-brand-red text-white px-6 py-2 rounded-lg font-headline font-bold hover:bg-brand-red-dark transition-all transform active:scale-95">
            Apply Now
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-brand-charcoal">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img 
              className="w-full h-full object-cover opacity-60" 
              src={SLIDES[currentSlide].image} 
              alt={SLIDES[currentSlide].title}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/80 to-transparent" />
          </motion.div>
        </AnimatePresence>
        
        <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-center items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-gold font-label tracking-widest uppercase mb-4 block">
                {SLIDES[currentSlide].tagline}
              </span>
              <h1 className="text-white font-headline text-5xl md:text-7xl font-bold leading-tight max-w-3xl mb-6 tracking-tight">
                {SLIDES[currentSlide].title.split(' ').slice(0, -1).join(' ')} <br />
                <span className="text-brand-highest">{SLIDES[currentSlide].title.split(' ').slice(-1)}</span>
              </h1>
              <p className="text-white/80 text-xl max-w-xl mb-10 font-body">
                {SLIDES[currentSlide].description}
              </p>
              <div className="flex gap-4">
                <button className="bg-brand-red px-8 py-4 text-white font-headline font-bold rounded-lg hover:bg-brand-red-dark transition-all flex items-center gap-2 group">
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-white/30 backdrop-blur-md px-8 py-4 text-white font-headline font-bold rounded-lg hover:bg-white/10 transition-all">
                  Explore Jobs
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-10 right-8 flex items-center gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <div className="flex gap-2 z-10">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentSlide === i ? "w-8 bg-brand-highest" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="py-32 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-brand-red font-label font-bold tracking-widest uppercase block mb-4">The Global Attaché</span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8 text-brand-charcoal leading-tight">
                Bridging Aspirations and <br />International Excellence
              </h2>
              <p className="text-brand-charcoal/70 text-lg leading-relaxed mb-8 font-body">
                New Athugalpura Agencies is a premier recruitment agency dedicated to empowering professionals through global career placements. With over two decades of heritage, we provide a sophisticated gateway for those seeking to elevate their professional trajectory in the world's most dynamic economies.
              </p>
              <button className="text-brand-red font-headline font-bold flex items-center gap-2 border-b-2 border-brand-red/20 hover:border-brand-red transition-all pb-1">
                Learn more about our heritage
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface-low p-10 rounded-xl relative overflow-hidden group hover:bg-surface-high transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-bl-full" />
                <div className="text-5xl font-headline font-extrabold text-brand-red mb-2">20+</div>
                <div className="text-brand-charcoal/60 font-label uppercase tracking-wider text-sm">Years Experience</div>
                <p className="mt-4 text-brand-charcoal/60 text-sm font-body">A legacy of trust and premium placement services since inception.</p>
              </div>
              <div className="bg-surface-low p-10 rounded-xl relative overflow-hidden group hover:bg-surface-high transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full" />
                <div className="text-5xl font-headline font-extrabold text-brand-gold mb-2">15K+</div>
                <div className="text-brand-charcoal/60 font-label uppercase tracking-wider text-sm">Successful Placements</div>
                <p className="mt-4 text-brand-charcoal/60 text-sm font-body">Transforming lives through international career opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-surface-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="text-4xl font-headline font-bold text-brand-charcoal mb-4 tracking-tight">Expert Consulting Services</h2>
            <p className="text-brand-charcoal/70 text-lg">Comprehensive support tailored for the modern international professional.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Briefcase}
              title="Global Job Placement"
              description="Access exclusive roles in construction, hospitality, and healthcare across Europe and Asia."
              features={["Industry specific screening", "Contract verification"]}
              colorClass="bg-brand-red/10 text-brand-red"
            />
            <ServiceCard 
              icon={FileText}
              title="Visa Assistance"
              description="Our experts navigate complex immigration laws to ensure your documentation is seamless."
              features={["Fast-track processing", "Legal advisory support"]}
              colorClass="bg-brand-gold/10 text-brand-gold"
            />
            <ServiceCard 
              icon={GraduationCap}
              title="Skill Development"
              description="Comprehensive training programs designed to meet international labor standards."
              features={["Language proficiency", "Safety certifications"]}
              colorClass="bg-brand-red/10 text-brand-red"
            />
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-32 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-headline font-bold text-brand-charcoal mb-16 text-center tracking-tight">Explore Key Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DestinationCard 
              image="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800"
              country="Japan"
              region="East Asia"
              tag="Skilled Labor & Tech Hub"
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
              country="Dubai (UAE)"
              region="Middle East"
              tag="Hospitality & Construction"
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1551047358-31ad5e3234eb?auto=format&fit=crop&q=80&w=800"
              country="Kuwait"
              region="Middle East"
              tag="Engineering & Skilled Trades"
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1516646255117-f9f933680173?auto=format&fit=crop&q=80&w=800"
              country="Qatar"
              region="Middle East"
              tag="Oil, Gas & Infrastructure"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-surface-high">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-headline font-bold text-brand-charcoal mb-16 text-center tracking-tight">Voices of Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Kamal Perera"
              location="Dubai, UAE"
              text="The visa process was remarkably smooth. I am now working as a site engineer in Dubai thanks to New Athugalpura Agencies. Highly professional!"
            />
            <TestimonialCard 
              name="Sunethra Silva"
              location="Tokyo, Japan"
              text="I was skeptical about overseas recruitment, but this agency guided me every step of the way to Japan. Their transparency is unmatched in the industry."
              featured
            />
            <TestimonialCard 
              name="Asanka Jayakody"
              location="Kuwait City, Kuwait"
              text="Excellent service. They found me a role that perfectly matched my skills in Kuwait. The pre-departure training was extremely helpful."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-low pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="text-lg font-bold text-brand-red font-headline mb-6">New Athugalpura Agencies</div>
              <p className="text-brand-charcoal/70 font-body text-sm leading-relaxed mb-6">
                Professional overseas recruitment and consultancy services with a focus on trust and excellence.
              </p>
              <div className="flex gap-4">
                <Globe className="w-5 h-5 text-brand-red cursor-pointer hover:scale-110 transition-transform" />
                <Briefcase className="w-5 h-5 text-brand-red cursor-pointer hover:scale-110 transition-transform" />
                <MapPin className="w-5 h-5 text-brand-red cursor-pointer hover:scale-110 transition-transform" />
              </div>
            </div>
            
            <div>
              <h4 className="font-headline font-bold text-brand-charcoal mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
              <ul className="space-y-4">
                {["Home", "About Us", "Our Services", "Countries"].map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-brand-charcoal/70 hover:text-brand-red transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-headline font-bold text-brand-charcoal mb-6 uppercase tracking-wider text-xs">Support</h4>
              <ul className="space-y-4">
                {["FAQ", "Contact", "Terms of Service", "Privacy Policy"].map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-brand-charcoal/70 hover:text-brand-red transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-headline font-bold text-brand-charcoal mb-6 uppercase tracking-wider text-xs">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-brand-charcoal/70 font-body">
                  <MailIcon className="w-5 h-5 text-brand-red" />
                  info@athugalpura.com
                </div>
                <div className="flex items-start gap-3 text-sm text-brand-charcoal/70 font-body">
                  <PhoneIcon className="w-5 h-5 text-brand-red" />
                  +94 37 123 4567
                </div>
                <div className="flex items-start gap-3 text-sm text-brand-charcoal/70 font-body">
                  <MapPin className="w-5 h-5 text-brand-red" />
                  No. 456, Main Road, Kurunegala, Sri Lanka
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-brand-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-brand-charcoal/50 font-body">© 2024 New Athugalpura Agencies. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="text-xs text-brand-charcoal/50">Licence No: 1234</span>
              <span className="text-xs text-brand-charcoal/50">Approved by SLBFE</span>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/94371234567"
        target="_blank"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg z-[100]"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
    </div>
  );
}
