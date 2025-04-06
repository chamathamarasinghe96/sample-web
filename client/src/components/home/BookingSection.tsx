import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { Appointment } from '@shared/schema';

const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const bookingMutation = useMutation({
    mutationFn: (newAppointment: Omit<Appointment, "id">) => {
      return apiRequest('POST', '/api/appointments', newAppointment);
    },
    onSuccess: () => {
      toast({
        title: "Appointment Scheduled",
        description: "Thank you for choosing Chama Salon! We'll confirm your appointment shortly.",
        variant: "success",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: ''
      });
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: error.message || "There was an error booking your appointment. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    bookingMutation.mutate({
      clientName: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceType: formData.service,
      appointmentDate: formData.date,
      appointmentTime: formData.time,
      notes: formData.notes,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Booking Form */}
          <div className="lg:w-3/5 p-8 md:p-12">
            <h2 className="font-serif text-3xl font-bold text-[#be185d] mb-6">Book Your Appointment</h2>
            <p className="text-gray-600 mb-8">
              Ready for your transformation? Schedule your visit with our expert team and experience the luxury you deserve.
            </p>
            
            <form id="booking-form" className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition" 
                    type="text" 
                    id="name" 
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition" 
                    type="email" 
                    id="email" 
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition" 
                    type="tel" 
                    id="phone" 
                    placeholder="(123) 456-7890"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="service">
                    Service Type
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition appearance-none bg-white" 
                    id="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    <option>Haircut & Styling</option>
                    <option>Color Services</option>
                    <option>Facial & Skincare</option>
                    <option>Nail Services</option>
                    <option>Makeup Application</option>
                    <option>Bridal Services</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="date">
                    Preferred Date
                  </label>
                  <input 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition" 
                    type="date" 
                    id="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="time">
                    Preferred Time
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition appearance-none bg-white" 
                    id="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Select time</option>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="notes">
                  Additional Notes <span className="text-gray-500">(Optional)</span>
                </label>
                <textarea 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition" 
                  id="notes" 
                  rows={3} 
                  placeholder="Tell us any special requests or needs"
                  value={formData.notes}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="w-full py-3 bg-[#db2777] hover:bg-[#be185d] text-white rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#ec4899] focus:ring-opacity-50 flex items-center justify-center group"
                  disabled={bookingMutation.isPending}
                >
                  <span className="font-medium mr-2">
                    {bookingMutation.isPending ? 'Scheduling...' : 'Schedule Appointment'}
                  </span>
                  <i className="fas fa-calendar-check transition-transform duration-300 group-hover:translate-x-1"></i>
                </button>
              </div>
            </form>
          </div>
          
          {/* Salon Info */}
          <div className="lg:w-2/5 bg-gradient-to-br from-[#db2777] to-[#9d174d] text-white p-8 md:p-12 flex flex-col">
            <h3 className="font-serif text-2xl font-bold mb-6">Chama Salon</h3>
            
            <div className="space-y-6 mb-auto">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-4"></i>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p>123 Beauty Lane, Suite 200<br/>New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="fas fa-clock mt-1 mr-4"></i>
                <div>
                  <h4 className="font-medium mb-1">Hours</h4>
                  <p>Monday - Friday: 9am - 7pm<br/>Saturday: 9am - 6pm<br/>Sunday: 10am - 4pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-4"></i>
                <div>
                  <h4 className="font-medium mb-1">Contact</h4>
                  <p>(212) 555-0123<br/>hello@chamasalon.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition" aria-label="Pinterest">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition" aria-label="TikTok">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
