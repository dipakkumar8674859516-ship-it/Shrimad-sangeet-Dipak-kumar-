/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  BookOpen, 
  Share2, 
  Users, 
  Lightbulb, 
  Clock, 
  Rocket,
  MapPin,
  Mail,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: <BookOpen className="w-8 h-8 text-orange-500" />,
    title: "Digital Resources",
    desc: "आधुनिक डिजिटल टूल्स और रिसोर्सेस की पूरी जानकारी।"
  },
  {
    icon: <Share2 className="w-8 h-8 text-orange-500" />,
    title: "Social Media Handling",
    desc: "सोशल मीडिया का प्रोफेशनल तरीके से उपयोग करना सीखें।"
  },
  {
    icon: <Users className="w-8 h-8 text-orange-500" />,
    title: "Leadership Supporter",
    desc: "एक बेहतर लीडर बनने के लिए पूरा सपोर्ट और ट्रेनिंग।"
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
    title: "Professional Guidance",
    desc: "करियर में आगे बढ़ने के लिए एक्सपर्ट सलाह।"
  },
  {
    icon: <Clock className="w-8 h-8 text-orange-500" />,
    title: "Part-Time Work",
    desc: "अपनी पढ़ाई या जॉब के साथ खाली समय का सही उपयोग।"
  },
  {
    icon: <Rocket className="w-8 h-8 text-orange-500" />,
    title: "Full-Time Work",
    desc: "डिजिटल क्षेत्र में करियर बनाने का शानदार मौका।"
  }
];

const whoCanJoin = [
  {
    title: "स्टूडेंट (18+)",
    desc: "पढ़ाई के साथ आमदनी और नया स्किल सीखें।",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "होममेकर",
    desc: "घर के काम के साथ अपने खाली समय का उपयोग करें।",
    img: "https://images.unsplash.com/photo-1585842333274-026144a20a3b?auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "जॉब पर्सन",
    desc: "अपनी सैलरी के साथ एक्स्ट्रा इनकम का जरिया बनाएं।",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
  }
];

export default function App() {
  const phoneNumber = "7250358197";
  const whatsappUrl = `https://wa.me/91${phoneNumber}`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Shrimad Sangeet Dipak Kumar
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 text-slate-600 hover:text-orange-600 transition-colors font-medium">
                <Phone size={18} />
                {phoneNumber}
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all shadow-sm hover:shadow-md"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
            <div className="md:hidden">
              <a href={`tel:${phoneNumber}`} className="p-2 text-orange-600">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                🎉 सपना पूरा करने का <span className="text-orange-600">सुनहरा अवसर</span> 🥳
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                उड़ान भरने से लेकर सफलता तक — पूरी गाइडेंस और सपोर्ट के साथ। स्मार्ट वर्क, प्रोफेशनल अप्रोच, और डिजिटल संसाधनों के साथ आगे बढ़ें।
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-lg shadow-green-200 transition-all hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                Join Now (WhatsApp)
              </a>
              <a 
                href={`tel:${phoneNumber}`}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-lg shadow-orange-200 transition-all hover:-translate-y-1"
              >
                <Phone size={24} />
                अभी कॉल करें
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-16 relative"
            >
              <div className="absolute inset-0 bg-orange-200 blur-3xl opacity-20 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
                alt="Digital Work Team" 
                className="rounded-3xl shadow-2xl mx-auto border-8 border-white relative z-10 max-w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smart Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                हार्ड वर्क नहीं, सिर्फ <span className="text-orange-600">स्मार्ट वर्क</span>
              </h2>
              <p className="text-lg text-slate-600 italic border-l-4 border-orange-500 pl-4 py-2 bg-orange-50 rounded-r-lg">
                "मेहनत हर कोई करता है, लेकिन सफलता उसे मिलती है जो सही दिशा में और स्मार्ट तरीके से काम करता है।"
              </p>
              <div className="space-y-4">
                {[
                  "कोई पारंपरिक जॉब का बंधन नहीं",
                  "डिजिटल संसाधनों के साथ सीखें और बढ़ें",
                  "लीडर्स और सपोर्टर्स के लिए बेहतरीन गाइडेंस",
                  "पार्ट टाइम और फुल टाइम दोनों विकल्प उपलब्ध"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                alt="Smart Work" 
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg hidden md:block border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Growth Opportunity</p>
                    <p className="font-bold text-slate-900">100% Support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">हमारी मुख्य सेवाएं (Services)</h2>
            <p className="text-slate-600">डिजिटल युग में आपकी सफलता के लिए हमारे पास सब कुछ है</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
              >
                <div className="mb-6 bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">कौन जुड़ सकता है? (Who Can Join)</h2>
            <p className="text-slate-600">यह अवसर सभी के लिए खुला है जो आगे बढ़ना चाहते हैं</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whoCanJoin.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-orange-500 rounded-full scale-105 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <img 
                    src={person.img} 
                    alt={person.title} 
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:border-orange-100 transition-all"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{person.title}</h3>
                <p className="text-slate-600">{person.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="py-20 bg-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">ग्रोथ और सफलता की ओर बढ़ें</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-left">
              <p className="text-white text-lg italic mb-6">
                "यहाँ मुझे केवल काम नहीं, बल्कि एक प्रोफेशनल माहौल और सही गाइडेंस मिली जिसने मेरी लाइफ बदल दी।"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-400 rounded-full"></div>
                <div>
                  <p className="text-white font-bold">संतोष</p>
                  <p className="text-orange-200 text-sm">टीम मेंबर</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-left">
              <p className="text-white text-lg italic mb-6">
                "डिजिटल वर्क आज की जरूरत है, और दीपक जी का सपोर्ट सिस्टम बहुत ही जबरदस्त है।"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-400 rounded-full"></div>
                <div>
                  <p className="text-white font-bold">प्रियंका</p>
                  <p className="text-orange-200 text-sm">होममेकर</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-sm">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">संपर्क करें (Contact Us)</h2>
              <p className="text-slate-600">हम आपकी सहायता के लिए हमेशा तैयार हैं</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-orange-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Location</p>
                  <p className="text-slate-600">Bhagalpur, Bihar</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-orange-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Call Us</p>
                  <a href={`tel:${phoneNumber}`} className="text-slate-600 hover:text-orange-600 transition-colors">
                    {phoneNumber}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-100"
              >
                <MessageCircle size={24} />
                अभी WhatsApp पर मैसेज करें
              </a>
              <a 
                href={`tel:${phoneNumber}`}
                className="w-full bg-white hover:bg-slate-50 text-slate-900 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all border border-slate-200"
              >
                <Phone size={24} />
                अभी कॉल करें
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Shrimad Sangeet Dipak Kumar
              </h3>
              <p className="text-slate-400 max-w-md leading-relaxed">
                हमारा उद्देश्य आपको सही डिजिटल संसाधन और प्रोफेशनल गाइडेंस देकर आत्मनिर्भर बनाना है। स्मार्ट वर्क के साथ अपने सपनों को सच करें।
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-orange-500" />
                  Bhagalpur, Bihar
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-orange-500" />
                  {phoneNumber}
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Shrimad Sangeet Dipak Kumar. सर्वाधिकार सुरक्षित।</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
