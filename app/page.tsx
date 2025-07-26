"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import NeosLogo from "@/public/neoslogo.png"
import Customer from "@/public/customer.png"
import Certificate from "@/public/certificate.png"
import {
  Phone,
  Mail,
  Download,
  Send,
  CheckCircle,
  Building2,
  Laptop,
  Monitor,
  PenTool,
  Sparkles,
  Printer,
  Shirt,
  GraduationCap,
  Tent,
  MessageCircle,
  Globe,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NEOSLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    setIsVisible({
      hero: true,
      about: true,
      services: true,
      clients: true,
      certifications: true,
      contact: true,
    })
  }, [])

  const servicesData = [
    {
      icon: Building2,
      title: "Office Furniture",
      items: [
        "Executive Table",
        "Executive Chairs",
        "Cabinets",
        "Racks",
        "Sofa Set",
        "Coffee Table",
        "Showcase Cabinet",
        "Books Cabinet",
      ],
    },
    {
      icon: Laptop,
      title: "IT Items & Services",
      items: [
        "All-in-One Computer",
        "Desktop Computer",
        "Laptops",
        "Network Routers",
        "Printers",
        "Toner / Cartridge",
        "Keyboard & Mouse",
        "CCTV Camera",
      ],
    },
    {
      icon: Monitor,
      title: "Electronics Items",
      items: [
        "Air Conditioner",
        "Refrigerator",
        "Television",
        "Water Purifier (RO)",
        "Ceiling Fan",
        "Water Dispenser",
        "Induction Oven",
        "Washing Machine",
      ],
    },
    {
      icon: PenTool,
      title: "Stationery Items",
      items: [
        "Pen, Pencil, Rubbers",
        "White Papers",
        "Box Files",
        "Envelope",
        "Stapler",
        "Highlighter",
        "Calculator",
        "Paper Clips",
      ],
    },
    {
      icon: Sparkles,
      title: "Housekeeping Items",
      items: [
        "Dustbin",
        "Vacuum Cleaner",
        "Mop with Stick",
        "Phenyl",
        "Disinfectors",
        "Buckets & Mugs",
        "Handwash & Sanitizer",
        "Dusters",
      ],
    },
    {
      icon: Printer,
      title: "Printing Service",
      items: [
        "Signages",
        "Banners, Flyers",
        "Question Sheets",
        "Books & Diaries",
        "Medals & Mementos",
        "Name Boards",
        "Custom Printed Clothing",
        "Customised Gift Items",
        "Golden Bule",
      ],
    },
    {
      icon: Shirt,
      title: "Clothing / Uniform",
      items: [
        "NCC",
        "Shirt & Pant",
        "Shoes / Boot",
        "Gloves",
        "Kamarbandh",
        "Scarf",
        "Hackle",
        "Barret Cap",
        "Leather Belt",
      ],
    },
    {
      icon: GraduationCap,
      title: "Schoolhouse Supplies",
      items: [
        "Desk and Chair",
        "Whiteboard & Smartboard",
        "Lab Equipment",
        "Bookcases",
        "Podiums",
        "Computer Desks",
        "Storage Cabinets",
        "Student Lockers",
      ],
    },
    {
      icon: Tent,
      title: "Camp Supply & Service",
      items: [
        "Tent & Sleeping Bag",
        "Cooking Utensils",
        "First Aid Kit",
        "Hiking Boots",
        "Grocery Items",
        "Cooking Service",
      ],
    },
  ]

  const clients = [
    "Ministry of Defense",
    "Embarkation of HQ",
    "Marine House",
    "National Cadet Corps",
    "MCO Sealdah",
    "DRDO, Baruipur",
    "IIT Kharagpur",
    "Kendriya Vidyalaya",
    "CMERI, Durgapur",
    "Botanical Survey of India",
    "Positional Astronomy",
    "BEML, Taratalla",
    "Food Corporation of India",
    "National Food Laboratory",
    "Enforcement Directorate",
    "CENTRAL INSTITUTE OF PLASTICS ENGINEERING & TECHNOLOGY (CIPET, Haldia)",
    "India Post, Yogayng Bhawan",
    "India Telecom, Sikkim",
  ]

  const certifications = [
    "Certificate of Incorporation",
    "Certificate of Recognition",
    "GST Registration",
    "UDYAM Registration Certificate",
    "ISO Certified",
    "Income Tax Certificates",
    "Company PAN Card",
    "Trade License",
    "EPFO Registration",
    "P-Tax Enrolment",
    "Labour License",
    "P-Tax Enrolment Certificate",
    "Start-up Bengal",
    "Shops & Establishment",
    "P-Tax Registration",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Image 
                  src={NeosLogo}
                  width={40}
                  height={40}
                  alt="Neos Logo"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">NEOS</h1>
                <p className="text-xs text-gray-600">Facility Management</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#clients" className="text-gray-700 hover:text-primary transition-colors">
                Clients
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors">
                Contact
              </Link>
              <Badge variant="outline" className="text-primary border-primary">
                GST: 19AAHCN4014D1ZR
              </Badge>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                <Link href="#about" className="text-gray-700 hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#services" className="text-gray-700 hover:text-primary transition-colors">
                  Services
                </Link>
                <Link href="#clients" className="text-gray-700 hover:text-primary transition-colors">
                  Clients
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors">
                  Contact
                </Link>
                <Badge variant="outline" className="text-primary border-primary w-fit">
                  GST: 19AAHCN4014D1ZR
                </Badge>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-secondary via-secondary-700 to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <Image
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="NEOS Facility Management"
          fill
          className="object-cover opacity-30"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-4">NEOS FACILITY MANAGEMENT</h1>
              <p className="text-xl md:text-2xl mb-2 text-blue-100">PRIVATE LIMITED</p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-2">
                  CIN: U72200WB2021PTC242805
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-2">GST: 19AAHCN4014D1ZR</Badge>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-200">
              Your Trusted Government Supplier on GeM
            </h2>

            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              ISO-certified, government-registered supplier providing comprehensive facility management solutions to
              government bodies, institutions, and procurement officers across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-3 text-lg group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-secondary px-8 py-3 text-lg bg-transparent"
              >
                <Download className="mr-2 w-5 h-5" />
                Company Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">About NEOS</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  NEOS Facility Management Private Limited is a trusted name in government procurement, established with
                  a commitment to excellence and reliability. We specialize in providing comprehensive facility
                  management solutions to government bodies, educational institutions, and public sector organizations.
                </p>
                <p>
                  Our company is built on the foundation of trust, quality, and timely delivery. With our strong
                  presence on the Government e-Marketplace (GeM), we have successfully served numerous prestigious
                  clients including the Ministry of Defence, DRDO, and IIT Kharagpur.
                </p>
                <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary">
                  <p className="font-semibold text-primary flex items-center">
                    <Globe className="mr-2 w-5 h-5" />
                    Listed on Government e-Marketplace (GeM)
                  </p>
                  <p className="text-sm text-primary-700 mt-1">
                    Verified supplier with proven track record in government procurement
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=500&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="NEOS Team"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-5 bg-secondary text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-primary-300" />
                  <div>
                    <p className="font-semibold">GeM Verified</p>
                    <p className="text-sm text-blue-200">Trusted Supplier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive facility management solutions tailored for government and institutional needs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {servicesData.map((service, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left hover:no-underline group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-secondary">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.items.length} items available</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="ml-16 grid grid-cols-2 md:grid-cols-3 gap-3">
                      {service.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="bg-gray-50 p-3 rounded-lg hover:bg-primary-50 hover:border-primary border border-transparent transition-colors"
                        >
                          <p className="text-sm font-medium text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Clients Section with Infinite Scroll */}
      <section id="clients" className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Prestigious Customers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving prestigious government organizations and institutions across India
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow min-w-[280px]"
                >
                  <div className="text-center">
                    <Image
                      src={Customer}
                      alt={client}
                      width={120}
                      height={80}
                      className="mx-auto mb-3 opacity-70"
                    />
                    <p className="text-sm font-medium text-gray-700">{client}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section with Infinite Scroll */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Accreditations & Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified, compliant, and committed to excellence in government procurement
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right">
              {[...certifications, ...certifications].map((cert, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-4 bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow min-w-[280px] border border-primary-100"
                >
                  <div className="text-center">
                    <Image
                      src={Certificate}
                      alt={cert}
                      width={120}
                      height={80}
                      className="mx-auto mb-3"
                    />
                    <p className="text-sm font-medium text-secondary">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to partner with us? Get in touch for all your facility management needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary mb-4">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Company Address</h3>
                    <p className="text-gray-600">
                      NEOS Facility Management Private Limited
                      <br />
                      [Your Complete Address]
                      <br />
                      West Bengal, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Phone Numbers</h3>
                    <p className="text-gray-600">
                      +91 [Your Phone Number]
                      <br />
                      +91 [Alternative Number]
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@neosfacility.com
                      <br />
                      procurement@neosfacility.com
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-secondary hover:bg-secondary-700 flex-1">
                      <Phone className="mr-2 w-4 h-4" />
                      Call Now
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary-50 flex-1 bg-transparent"
                    >
                      <Download className="mr-2 w-4 h-4" />
                      Download Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary mb-4">Send Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <Input
                        placeholder="Your full name"
                        className="border-gray-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                      <Input
                        placeholder="Your organization"
                        className="border-gray-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-gray-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <Input
                        placeholder="+91 Your phone number"
                        className="border-gray-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                    <Input
                      placeholder="Which service are you interested in?"
                      className="border-gray-300 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea
                      placeholder="Please describe your requirements in detail..."
                      className="border-gray-300 min-h-[120px] focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary-600 text-lg py-3">
                    <Send className="mr-2 w-5 h-5" />
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">NEOS</h3>
                  <p className="text-sm text-blue-200">Facility Management</p>
                </div>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                Your trusted partner in government procurement and facility management solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal Information</h4>
              <div className="space-y-2 text-sm text-blue-200">
                <p>CIN: U72200WB2021PTC242805</p>
                <p>GST: 19AAHCN4014D1ZR</p>
                <p>UDYAM Registration</p>
                <p>Labour License Compliant</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link href="#about" className="text-blue-200 hover:text-white transition-colors block">
                  About Us
                </Link>
                <Link href="#services" className="text-blue-200 hover:text-white transition-colors block">
                  Our Services
                </Link>
                <Link href="#clients" className="text-blue-200 hover:text-white transition-colors block">
                  Our Clients
                </Link>
                <Link href="#contact" className="text-blue-200 hover:text-white transition-colors block">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-blue-200">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 [Your Number]
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@neosfacility.com
                </p>
                <p className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  GeM Verified Supplier
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary-700 mt-8 pt-8 text-center">
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} NEOS Facility Management Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 shadow-lg animate-bounce">
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
