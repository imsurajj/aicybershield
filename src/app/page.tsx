'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
  import { motion } from 'framer-motion'

// Navbar Component
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">CyberShield</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#get-started"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={handleLinkClick}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'border-t border-gray-200' : ''}`}
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-600 hover:text-blue-600 transition-colors px-4"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="#get-started"
                className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                onClick={handleLinkClick}
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="pt-32 pb-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500 rounded-full mb-8">
            <span className="text-sm font-medium text-white">
              AI-Powered Security Platform
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6">
          Secure Your Digital Future with AI Cybersecurity
          </h1>
          
          <p className="text-xl text-gray-800 mb-10">
            Next-gen cybersecurity with AI-driven threat detection, breach notification, and risk assessment for your digital assets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link 
              href="/demo"
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              Get Started Free
            </Link>
            <Link 
              href="/demo"
              className="w-full sm:w-auto px-8 py-3 border border-gray-500 text-gray-800 rounded-lg hover:border-gray-400 transition-colors text-center"
            >
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '98%', label: 'Detection Rate' },
              { number: '24/7', label: 'Monitoring' },
              { number: '10k+', label: 'Threats Blocked' },
              { number: '500+', label: 'Enterprise Clients' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Features Section
function Features() {
  const features = [
    {
      title: 'AI-Powered Detection',
      description: 'Advanced machine learning algorithms detect and prevent threats in real-time',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      title: 'Smart Monitoring',
      description: '24/7 intelligent system monitoring with automated alerts',
      icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
    },
    {
      title: 'Automated Response',
      description: 'Instant automated responses to security threats',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Security Training',
      description: 'Personalized security awareness training for your team',
      icon: 'M12 14l9-5-9-5-9 5 9 5z'
    },
    {
      title: 'Compliance Ready',
      description: 'Built-in compliance with major security standards',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive security analytics and reporting',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Next-Generation Security
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced security features powered by artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/get-started"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>Get Started Now</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechCorp',
      image: '/avatars/avatar1.jpg',
      quote: 'CyberShield has transformed our security infrastructure. The AI-driven approach has reduced our incident response time by 70%.'
    },
    {
      name: 'Michael Chen',
      role: 'Security Lead at DataFlow',
      image: '/avatars/avatar2.jpg',
      quote: 'The automated threat detection is incredible. We\'ve blocked numerous sophisticated attacks that traditional systems missed.'
    },
    {
      name: 'Emma Davis',
      role: 'CEO at CloudSecure',
      image: '/avatars/avatar3.jpg',
      quote: 'Implementing CyberShield was the best decision we made. Our security posture has never been stronger.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-black mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            See what our clients say about their experience with CyberShield
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4" />
                <div>
                  <h3 className="font-semibold text-black">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-800">{testimonial.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Section
function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  
  const plans = [
    {
      name: 'Starter',
      monthlyPrice: '$99',
      yearlyPrice: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'AI-Powered Threat Detection',
        '24/7 Monitoring',
        'Basic Reports',
        'Email Support',
        'Up to 5 Users'
      ]
    },
    {
      name: 'Professional',
      monthlyPrice: '$299',
      yearlyPrice: '$239',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Everything in Starter',
        'Advanced AI Analytics',
        'Priority Response',
        'API Access',
        'Up to 20 Users'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Custom Integration',
        'Dedicated Support',
        'Custom Features',
        'Unlimited Users'
      ]
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-black mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your security needs
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-blue-600' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-blue-600 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div
                className={`absolute w-5 h-5 bg-white rounded-full top-1 transition-transform ${
                  isAnnual ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-blue-600' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-1.5 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-white rounded-lg p-8 ${
                plan.popular ? 'ring-2 ring-blue-500 shadow-lg' : 'shadow'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-black mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-black">
                  {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                {plan.period && (
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                )}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-800">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTA() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Secure Your Digital Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that trust CyberShield for their security needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Get Started Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-white text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-black font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Security</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Enterprise</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-black font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-600 transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-black font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">API Reference</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Guides</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-black font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Privacy</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Terms</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Security</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Status</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-black font-semibold">CyberShield</span>
            </div>
            <div className="flex space-x-6">
              {['twitter', 'facebook', 'linkedin', 'github'].map((social) => (
                <Link key={social} href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <span className="sr-only">{social}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8">
            {new Date().getFullYear()} CyberShield. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
