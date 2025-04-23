
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      id: 1,
      name: "Jennifer A.",
      role: "Interior Designer",
      content: "The quality of the marble alternatives from MarbleAlt is truly exceptional. My clients can't tell the difference from real marble, but they love the lower maintenance and cost.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80",
    },
    {
      id: 2,
      name: "Michael T.",
      role: "Homeowner",
      content: "We renovated our kitchen with MarbleAlt's countertops and couldn't be happier. The durability is amazing, and it looks just as good as the real thing without the steep price tag.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80",
    },
    {
      id: 3,
      name: "Sarah L.",
      role: "Renovation Contractor",
      content: "As a contractor, I appreciate the ease of installation and the consistently positive reactions from my clients when I use MarbleAlt products. Great value for the quality.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-marble-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">{t("testimonials.title")}</h2>
          <p className="text-marble-600 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-lg shadow-md relative"
            >
              <div className="mb-6">
                <svg className="h-10 w-10 text-marble-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-marble-700 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-marble-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
