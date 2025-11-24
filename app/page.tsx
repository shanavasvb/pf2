'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaBars, 
  FaTimes, 
  FaArrowUp,
  FaPlay,
  FaStar,
  FaFire,
  FaHeart
} from 'react-icons/fa';
import Lightbox from 'yet-another-react-lightbox';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'yet-another-react-lightbox/styles.css';

export default function CreatorHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
    alert('Thanks for reaching out! Let\'s create something amazing together! 🚀');
    reset();
  };

  const navItems = ['Home', 'About', 'Experience', 'Collaborations', 'Portfolio', 'Films', 'Contact'];

  const portfolioImages = [
    { src: '/portfolio/2.jpeg', alt: 'Model shot 1' },
    { src: '/portfolio/3.jpeg', alt: 'Model shot 2' },
    { src: '/portfolio/4.jpeg', alt: 'Model shot 3' },
    { src: '/portfolio/1.jpeg', alt: 'Model shot 4' },
    { src: '/portfolio/2.jpeg', alt: 'Model shot 5' },
    { src: '/portfolio/1.jpeg', alt: 'Model shot 6' },

  ];

  const collaborations = [
    {
      name: 'Lulu Wedding Utsav',
      description: 'Wedding campaign collab 💍',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
      icon: '💐'
    },
    {
      name: 'Naturals Salon',
      description: 'Beauty & grooming content ✨',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
      icon: '💇'
    },
    {
      name: 'Instax India',
      description: 'Messy Onam Sadhya collab 📸',
      image: 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=600',
      icon: '📷'
    },
    {
      name: 'Lapinoz Pizza',
      description: 'Cheesy social media magic 🍕',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600',
      icon: '🍕'
    },
    {
      name: 'Iha Designs',
      description: 'Fashion & individuality 👗',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea0f50e5?w=600',
      icon: '👗'
    },
    {
      name: 'Goloco BLR',
      description: 'Food & lifestyle vibes 🌟',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600',
      icon: '🍜'
    },
  ];

  const films = [
    {
      title: 'Love at First Date',
      description: '5 Lakh+ Views 🔥',
      thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600',
      type: 'Short Film',
      views: '500K+'
    },
    {
      title: 'Bhool - Music Video',
      description: 'Emotional masterpiece 💔',
      thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600',
      type: 'Music Video',
      views: '200K+'
    },
    {
      title: 'Movieman Studios',
      description: 'Behind the scenes interviews 🎬',
      thumbnail: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600',
      type: 'Interview',
      views: '150K+'
    },
    {
      title: 'Bali Travel Vlog',
      description: 'Paradise adventures ✈️',
      thumbnail: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600',
      type: 'Vlog',
      views: '300K+'
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white min-h-screen">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-purple-500/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-5">
            <motion.button
              onClick={() => scrollToSection('home')}
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SHYAMA ✨
            </motion.button>

            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-pink-400 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full" />
                </motion.button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-2xl text-pink-400"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-purple-500/30"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left text-lg font-semibold uppercase tracking-wider text-gray-300 hover:text-pink-400 transition-colors py-2"
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <section id="home" className="min-h-screen flex items-center py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 -right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 -left-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-500/30 mb-6"
              >
                <FaFire className="text-pink-400" />
                <span className="text-sm font-semibold uppercase tracking-wider">Content Creator • Model • Influencer</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Shyama
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light"
              >
                Creating Digital Magic ✨<br />
                <span className="text-pink-400 font-semibold">Open for Collabs</span>
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  onClick={() => scrollToSection('portfolio')}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-bold uppercase text-sm tracking-wider shadow-2xl shadow-pink-500/50"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(236, 72, 153, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  🎨 View My Work
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500 rounded-full text-white font-bold uppercase text-sm tracking-wider"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  💌 Let's Collab
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 mt-8"
              >
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm font-semibold">5L+ Total Views</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaHeart className="text-pink-400" />
                  <span className="text-sm font-semibold">100K+ Engagements</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl"
                  animate={{
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="absolute inset-2 rounded-3xl overflow-hidden border-4 border-white/10">
                  <img
                    src="/portfolio/1.jpeg"
                    alt="Shyama"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl px-6 py-3 shadow-2xl"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-black text-white">5M+</div>
                    <div className="text-xs font-bold text-white/80">TOTAL VIEWS</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block text-6xl mb-4"
            >
              👋
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Hey, I'm Shyama!
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your friendly neighborhood creator mixing social media magic, modeling, and authentic storytelling
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  I'm a <span className="text-pink-400 font-bold">model</span>, <span className="text-purple-400 font-bold">content creator</span>, 
                  and <span className="text-indigo-400 font-bold">social media manager</span> who believes in creating 
                  visuals that don't just look good—they <span className="text-yellow-400 font-bold">connect</span>.
                </p>
                <p>
                  From campaigns and brand collabs to short films and YouTube content, I bring 
                  <span className="text-pink-400 font-bold"> creativity</span> and <span className="text-purple-400 font-bold">authenticity</span> to 
                  every project.
                </p>
                <motion.div
                  className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-2xl p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-xl font-bold text-white italic">
                    "Blending creativity, strategy, and storytelling to shape digital experiences that matter."
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                '/portfolio/3.jpeg',
                '/portfolio/4.jpeg',
              ].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`aspect-[3/4] rounded-2xl overflow-hidden ${index === 1 ? 'mt-8' : ''}`}
                  whileHover={{ scale: 1.05, rotate: index === 0 ? -2 : 2 }}
                >
                  <img
                    src={src}
                    alt={`About ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience 💼
            </h2>
            <p className="text-xl text-gray-300">Brands I've helped grow their digital presence</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                company: 'Angross Gifts',
                role: 'Social Media Manager',
                points: [
                  'Managed YouTube, Pinterest, Instagram & website',
                  'Created viral content (videos, graphics, posts)',
                  'Produced high-quality ASMR & presentation videos'
                ]
              },
              {
                company: 'Denzo Fashion',
                role: 'Social Media Manager',
                points: [
                  'Created engaging platform-specific content',
                  'Collaborated with marketing & product teams',
                  'Stayed ahead of social media trends & algorithms',
                  'Developed winning social media strategies'
                ]
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-6 sm:p-8"
                whileHover={{ scale: 1.02, borderColor: 'rgba(236, 72, 153, 0.5)' }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{job.company}</h3>
                    <div className="inline-block px-4 py-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-sm font-bold">
                      {job.role}
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-pink-400 mt-1"></span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="collaborations" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Brand Collabs 🤝
            </h2>
            <p className="text-xl text-gray-300">Amazing brands I've partnered with</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {collaborations.map((collab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                whileHover={{ y: -10 }}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={collab.image}
                    alt={collab.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-4xl mb-3"
                    >
                      {collab.icon}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{collab.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-200">{collab.description}</p>
                  </div>
                  <motion.div
                    className="absolute inset-0 border-4 border-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Creator Portfolio 📸
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From traditional to contemporary, here's a glimpse into my diverse modeling and content creation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group relative"
                onClick={() => {
                  setLightboxIndex(index);
                  setLightboxOpen(true);
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <motion.div
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold"
                  >
                    View Full Size
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="films" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Films & Content 🎬
            </h2>
            <p className="text-xl text-gray-300">
              From short films to vlogs, here's where I bring stories to life
            </p>
          </motion.div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1536: { slidesPerView: 4 },
            }}
            className="!pb-16"
          >
            {films.map((film, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                    <img
                      src={film.thumbnail}
                      alt={film.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-pink-500/50">
                        <FaPlay className="text-white text-xl ml-1" />
                      </div>
                    </motion.div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-xs font-bold">
                        {film.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-bold flex items-center gap-1">
                        <FaPlay className="text-pink-400" />
                        {film.views}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                    {film.title}
                  </h3>
                  <p className="text-sm text-gray-400">{film.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section id="contact" className="py-20 sm:py-28 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block text-6xl mb-4"
            >
              💌
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Let's Create Magic!
            </h2>
            <p className="text-xl text-gray-300">
              Got a collaboration idea? Let's make it happen! 🚀
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Your Name ✨"
                  className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all text-white placeholder-gray-400"
                />
                {errors.name && (
                  <p className="text-pink-400 text-sm mt-2 ml-2">{errors.name.message as string}</p>
                )}
              </div>
              <div>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email',
                    },
                  })}
                  type="email"
                  placeholder="Your Email 📧"
                  className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all text-white placeholder-gray-400"
                />
                {errors.email && (
                  <p className="text-pink-400 text-sm mt-2 ml-2">{errors.email.message as string}</p>
                )}
              </div>
            </div>

            <div>
              <input
                {...register('company')}
                type="text"
                placeholder="Brand / Company (Optional) 🏢"
                className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all text-white placeholder-gray-400"
              />
            </div>

            <div>
              <textarea
                {...register('message', { required: 'Message is required' })}
                rows={6}
                placeholder="Tell me about your amazing project idea! 💡"
                className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all resize-none text-white placeholder-gray-400"
              />
              {errors.message && (
                <p className="text-pink-400 text-sm mt-2 ml-2">{errors.message.message as string}</p>
              )}
            </div>

            <motion.button
              type="submit"
              className="w-full px-8 py-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl text-white font-bold uppercase text-sm tracking-wider shadow-2xl shadow-pink-500/50"
              whileHover={{ scale: 1.02, boxShadow: '0 25px 50px rgba(236, 72, 153, 0.6)' }}
              whileTap={{ scale: 0.98 }}
            >
              🚀 Send Message
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 mt-16"
          >
            {[
              { icon: FaInstagram, href: 'https://instagram.com', color: 'from-pink-500 to-purple-500' },
              { icon: FaYoutube, href: 'https://youtube.com', color: 'from-red-500 to-pink-500' },
              { icon: FaLinkedin, href: 'https://linkedin.com', color: 'from-blue-500 to-cyan-500' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${social.color} rounded-2xl text-white text-2xl shadow-xl`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="py-12 border-t border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-2">© 2024 Shyama. All rights reserved.</p>
          <p className="text-sm text-gray-500">
            Social Media Manager · Content Creator · Model · Digital Influencer
          </p>
        </div>
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-pink-500/50 z-50"
            whileHover={{ scale: 1.1, boxShadow: '0 25px 50px rgba(236, 72, 153, 0.7)' }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="text-white text-xl" />
          </motion.button>
        )}
      </AnimatePresence>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={portfolioImages}
      />
    </div>
  );
}