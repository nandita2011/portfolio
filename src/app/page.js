"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle, 
  Shield, 
  Clock, 
  Users, 
  Baby, 
  Stethoscope, 
  MapPin, 
  Mail,
  ArrowRight,
  Menu,
  X,
  Heart,
  Syringe,
  Calendar
} from 'lucide-react';

/* --- REUSABLE COMPONENTS --- */

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">{title}</h2>
    <div className="h-1 w-20 bg-teal-500 mx-auto mb-4"></div>
    {subtitle && <p className="text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

// Updated Button to accept onClick and other props
const ButtonPrimary = ({ children, className = "", ...props }) => (
  <button 
    className={`bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg ${className}`}
    {...props}
  >
    {children}
  </button>
);

const ButtonSecondary = ({ children, className = "", ...props }) => (
  <button 
    className={`bg-white hover:bg-teal-50 text-teal-600 border-2 border-teal-600 font-semibold py-3 px-8 rounded-full transition-all ${className}`}
    {...props}
  >
    {children}
  </button>
);

/* --- MAIN SECTIONS --- */

// 1. Navbar (Fixed Links)
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false); // Close mobile menu if open
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Area */}
        <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => scrollToSection('home')}
        >
            <div className="bg-teal-100 p-2 rounded-full">
                <Stethoscope className="text-teal-600 w-6 h-6" />
            </div>
            <div className="font-bold text-xl md:text-2xl text-slate-800">
                Dr. Debashree <span className="text-teal-600">Priyadarshini</span>
            </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-slate-700">
          <button onClick={() => scrollToSection('home')} className="hover:text-teal-600">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-teal-600">About</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-teal-600">Services</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-teal-600">Clinic Info</button>
        </div>

        {/* Call to Action */}
        <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700 transition-colors"
        >
            Book Appointment
        </button>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg absolute w-full left-0">
           <button onClick={() => scrollToSection('home')} className="text-left text-slate-700 py-2 border-b">Home</button>
           <button onClick={() => scrollToSection('about')} className="text-left text-slate-700 py-2 border-b">About</button>
           <button onClick={() => scrollToSection('services')} className="text-left text-slate-700 py-2 border-b">Services</button>
           <button onClick={() => scrollToSection('contact')} className="bg-teal-600 text-white w-full py-2 rounded-md mt-2">Book Appointment</button>
        </div>
      )}
    </nav>
  );
};

// 2. Hero Section (Added ID)
const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative bg-teal-50 min-h-[600px] flex items-center pt-20 md:pt-0">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-200 text-teal-800 text-l font-semibold mb-6">
             Specialist in Pediatrics & General Medicine
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Expert Healthcare < br/> for Your.... <br/>
            <span className="text-teal-600">Child & Family</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
            Dr. Debashree Priyadarshini < br/>(Assistant Professor, IMS & SUM Hospital) < br/>provides compassionate, evidence-based medical care with over 16 years of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonPrimary onClick={scrollToContact} className="flex items-center justify-center gap-2">
               <Calendar className="w-5 h-5" /> Book Consultation
            </ButtonPrimary>
            <ButtonSecondary onClick={scrollToContact} className="flex items-center justify-center gap-2">
               <Phone className="w-5 h-5" /> +91 7008288862
            </ButtonSecondary>
          </div>
          <p className="mt-4 text-sm text-slate-500 flex items-center gap-2">
             <Clock className="w-4 h-4 text-teal-500" /> Clinic Hours: 6:00 PM - 9:00 PM (Mon-Sat)
          </p>
        </div>
        <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-teal-200 rounded-full filter blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>
            <img 
              src="/assets/photo.jpeg" 
              alt="Doctor treating child" 
              className="relative z-10 w-full rounded-3xl shadow-2xl border-4 border-white"
            />
        </div>
      </div>
    </div>
  );
};

// 3. Trust Indicators
const KeyFeatures = () => {
  const features = [
    { icon: <Shield className="w-8 h-8 text-teal-600" />, title: "16+ Years Exp", desc: "Trusted Medical Professional" },
    { icon: <Baby className="w-8 h-8 text-teal-600" />, title: "Child Specialist", desc: "Expert Pediatric Care" },
    { icon: <Users className="w-8 h-8 text-teal-600" />, title: "Family Medicine", desc: "Care for All Ages" },
    { icon: <Heart className="w-8 h-8 text-teal-600" />, title: "Personalized", desc: "Patient-Centric Approach" },
  ];

  return (
    <div className="bg-white py-12 relative z-20 shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4 hover:bg-slate-50 rounded-lg transition-colors">
              <div className="mb-3 bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg text-slate-800">{feature.title}</h3>
              <p className="text-slate-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 4. Services Offered (Added ID)
const Services = () => {
  const services = [
    { title: "General Pediatrics", icon: <Baby className="w-6 h-6"/>, desc: "Complete diagnosis and treatment for common childhood illnesses like viral fever, cough, and cold." },
    { title: "Growth & Development", icon: <CheckCircle className="w-6 h-6"/>, desc: "Monitoring height, weight, and developmental milestones to ensure your child is growing healthy." },
    { title: "Vaccination/Immunization", icon: <Syringe className="w-6 h-6"/>, desc: "Routine vaccination schedules for infants and children to protect against serious diseases." },
    { title: "Newborn Care", icon: <Heart className="w-6 h-6"/>, desc: "Specialized guidance for new parents on feeding, sleep cycles, and newborn hygiene." },
    { title: "Adolescent Health", icon: <Users className="w-6 h-6"/>, desc: "Addressing health concerns, nutrition, and hormonal changes in growing teenagers." },
    { title: "General Consultation", icon: <Stethoscope className="w-6 h-6"/>, desc: "Primary care and health management for adults and family members." },
  ];

  return (
    <div id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading title="Medical Services" subtitle="Comprehensive healthcare services tailored to your family's needs." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="bg-teal-100 text-teal-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 5. About Doctor (Added ID)
const AboutDoctor = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 rounded-tl-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-100 rounded-br-3xl -z-10"></div>
            <img 
                src="assets/photo.jpeg" 
                alt="Dr Debashree Priyadarshini" 
                className="w-full rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Meet Dr. Debashree Priyadarshini
            </h2>
            <h3 className="text-teal-600 font-semibold text-lg mb-6">MBBS, MD (Pediatrics)</h3>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              Dr. Debashree Priyadarshini is a distinguished Pediatrician and General Physician based in Bhubaneswar. She currently serves as an <strong>Assistant Professor</strong> at the prestigious <strong>IMS & SUM Hospital</strong>.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              With a deep commitment to child health and academic excellence, she has published numerous research papers on pediatric critical care. At her private clinic in Chandrasekharpur, she offers personalized attention to every patient, ensuring accurate diagnosis and effective treatment plans.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                    <CheckCircle className="text-teal-500 mr-2 w-5 h-5" />
                    <span className="text-slate-700">16+ Years Experience</span>
                </div>
                <div className="flex items-center">
                    <CheckCircle className="text-teal-500 mr-2 w-5 h-5" />
                    <span className="text-slate-700">Faculty at IMS & SUM</span>
                </div>
                <div className="flex items-center">
                    <CheckCircle className="text-teal-500 mr-2 w-5 h-5" />
                    <span className="text-slate-700">Published Researcher</span>
                </div>
                <div className="flex items-center">
                    <CheckCircle className="text-teal-500 mr-2 w-5 h-5" />
                    <span className="text-slate-700">Rated 5.0 Stars (Justdial)</span>
                </div>
            </div>

            <ButtonPrimary onClick={scrollToContact}>Book an Appointment</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

// 6. Clinic Details / Location (Added ID)
const ClinicInfo = () => {
    return (
      <div id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                   <h2 className="text-3xl font-bold mb-6">Visit Our Clinic</h2>
                   <p className="text-slate-300 mb-8">
                       Conveniently located in Chandrasekharpur, we provide a clean, safe, and child-friendly environment for your consultation.
                   </p>
                   
                   <div className="space-y-6">
                        <div className="flex items-start">
                            <MapPin className="w-6 h-6 text-teal-400 mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg">Address</h4>
                                <p className="text-slate-300">Riddhi Siddhi, plot- 250, <br/>opposite Bijaya care homes, Prachi Enclave, <br/>Rail Vihar,   Chandrasekharpur, Bhubaneswar, Odisha 751016</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <Clock className="w-6 h-6 text-teal-400 mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg">Consultation Hours</h4>
                                <p className="text-slate-300">Monday - Saturday: 6:00 PM - 9:00 PM</p>
                                <p className="text-slate-300">Sunday: 9:00 AM - 9:00 PM</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Phone className="w-6 h-6 text-teal-400 mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg">Contact</h4>
                                <p className="text-slate-300">+91  70082 88862</p>
                            </div>
                        </div>
                   </div>
               </div>
               
               <div className="h-80 bg-slate-800 rounded-xl overflow-hidden relative border border-slate-700">
                   <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                       <p className="text-slate-400 flex flex-col items-center">
                           <MapPin className="w-12 h-12 mb-2 text-teal-500" />
                           <span>Map Loaded Here</span>
                       </p>
                   </div>
               </div>
           </div>
        </div>
      </div>
    );
};

// 7. Testimonials
const Testimonials = () => {
  return (
    <div className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <SectionHeading title="What Parents Say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { text: "Dr. Debashree is very calm and listens to the problems patiently. My daughter recovered very fast under her medication.", author: "Sasmita Das", role: "Mother" },
            { text: "Excellent diagnosis. She doesn't prescribe unnecessary medicines. Very happy with the consultation.", author: "Rahul Mohanty", role: "Father" },
            { text: "Best pediatrician in Chandrasekharpur area. She explains the growth chart very well.", author: "Priya S.", role: "Parent" },
          ].map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative">
              <div className="text-teal-200 absolute top-4 left-4">
                 <MessageCircle className="w-8 h-8 opacity-20" />
              </div>
              <p className="text-slate-700 italic mb-6 relative z-10">"{t.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.author[0]}
                </div>
                <div className="ml-3">
                  <p className="font-bold text-slate-900 text-sm">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 8. Footer
const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="font-bold text-2xl text-slate-800 mb-2">Dr. Debashree <span className="text-teal-600">Priyadarshini</span></div>
          <p className="text-sm text-slate-500">Regd No. 1642/11/2 (Odisha Medical Council)</p>
        </div>
        
        <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-teal-600 transition-colors"><MessageCircle className="w-6 h-6"/></a>
            <a href="#" className="text-slate-500 hover:text-teal-600 transition-colors"><Mail className="w-6 h-6"/></a>
        </div>
      </div>
      <div className="text-center text-slate-400 text-xs mt-10">
        <p>&copy; 2025 Dr. Debashree Priyadarshini Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
};

// MAIN APP COMPONENT
const HomePage = () => {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white">
      <Navbar />
      <Hero />
      <KeyFeatures />
      <AboutDoctor />
      <Services />
      <ClinicInfo />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;