import Link from "next/link";
import { CalendarIcon, StarIcon, ClockIcon, ShieldIcon, UserIcon } from "./icons";

export default function MedicalPracticePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">KC Family Practice</h1>
            <p className="text-xl mb-8 text-blue-100">Compassionate Care for Your Entire Family</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full border border-white/20">
                <ClockIcon className="w-5 h-5 inline mr-2" />
                Same-Day Appointments
              </div>
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full border border-white/20">
                <ShieldIcon className="w-5 h-5 inline mr-2" />
                Accepting New Patients
              </div>
            </div>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Book Appointment Online
            </button>
          </div>
        </div>
      </section>

      {/* Quick Booking Engine */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 -mt-20 relative z-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Schedule Your Visit</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-blue-100 rounded-xl p-6 hover:border-blue-300 transition-colors cursor-pointer">
              <CalendarIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Choose Date & Time</h3>
              <p className="text-gray-600">View real-time availability and select a convenient slot</p>
            </div>
            <div className="border-2 border-blue-100 rounded-xl p-6 hover:border-blue-300 transition-colors cursor-pointer">
              <UserIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Select Provider</h3>
              <p className="text-gray-600">Choose from our experienced medical professionals</p>
            </div>
            <div className="border-2 border-blue-100 rounded-xl p-6 hover:border-blue-300 transition-colors cursor-pointer">
              <ClockIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Instant Confirmation</h3>
              <p className="text-gray-600">Get immediate booking confirmation via email & SMS</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm text-blue-600 font-semibold mb-1">NEXT AVAILABLE</p>
                <p className="text-2xl font-bold">Today at 2:30 PM</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Book This Slot
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reviews Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trusted by Our Community</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-2xl font-bold text-gray-700">4.9/5 from 847 patient reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah Mitchell", rating: 5, text: "Dr. Johnson took the time to really listen to my concerns. The online booking system made it so easy to schedule.", date: "2 days ago" },
              { name: "Michael Chen", rating: 5, text: "Best family practice in Kansas City! The staff is friendly and the wait times are minimal. Highly recommend!", date: "1 week ago" },
              { name: "Jennifer Adams", rating: 5, text: "I've been bringing my whole family here for years. The quality of care is exceptional and they truly care about their patients.", date: "2 weeks ago" },
            ].map((review, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <StarIcon key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="#" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2">
              Read All 847 Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Comprehensive Medical Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Primary Care", desc: "Annual physicals, preventive care, and chronic disease management" },
            { title: "Pediatric Care", desc: "Well-child visits, vaccinations, and developmental screenings" },
            { title: "Women's Health", desc: "Annual exams, prenatal care, and reproductive health services" },
            { title: "Urgent Care", desc: "Same-day appointments for acute illnesses and minor injuries" },
            { title: "Chronic Disease", desc: "Expert management of diabetes, hypertension, and heart disease" },
            { title: "Telehealth", desc: "Virtual visits for convenient care from the comfort of home" },
          ].map((service, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-300 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <ShieldIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Provider Showcase */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Providers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Emily Johnson, MD", specialty: "Family Medicine", experience: "15+ years" },
              { name: "Dr. David Park, DO", specialty: "Internal Medicine", experience: "12+ years" },
              { name: "Dr. Maria Rodriguez, MD", specialty: "Pediatrics", experience: "10+ years" },
            ].map((provider, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {provider.name.split(' ')[1][0]}
                </div>
                <h3 className="text-xl font-bold mb-1">{provider.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{provider.specialty}</p>
                <p className="text-gray-600 text-sm mb-4">{provider.experience} experience</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  View Full Bio →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Contact CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">We Accept Most Insurance Plans</h2>
          <p className="text-xl mb-8 text-blue-100">Including Medicare, Medicaid, and all major providers</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
              Book Appointment
            </button>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-400 transition-colors border-2 border-white/20">
              Call (816) 555-CARE
            </button>
          </div>
          <p className="mt-8 text-blue-100">123 Medical Plaza, Kansas City, MO 64111</p>
        </div>
      </section>
    </main>
  );
}
