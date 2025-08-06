import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, { message: "Vorname muss mindestens 2 Zeichen haben" }),
  lastName: z.string().min(2, { message: "Nachname muss mindestens 2 Zeichen haben" }),
  email: z.string().email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein" }),
  phone: z.string().min(10, { message: "Bitte geben Sie eine gültige Telefonnummer ein" }),
  subject: z.string().min(5, { message: "Betreff muss mindestens 5 Zeichen haben" }),
  services: z.array(z.string()).min(1, { message: "Bitte wählen Sie mindestens einen Service aus" }),
  showroomDate: z.date().optional(),
  message: z.string().min(10, { message: "Nachricht muss mindestens 10 Zeichen haben" }),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "Sie müssen den Datenschutzhinweisen zustimmen"
  })
});

type FormData = z.infer<typeof formSchema>;

const Kontakt = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      services: [],
      message: "",
      privacyConsent: false
    }
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast({
      title: "Beratungstermin angefragt",
      description: "Wir melden uns in Kürze bei Ihnen.",
    });
  };

  const serviceOptions = [
    { id: "3d-badplanung", label: "3D-Badplanung (Bad, Wellness, Sauna)" },
    { id: "sanitaerverkauf", label: "Sanitärverkauf" },
    { id: "fliesenverkauf", label: "Fliesenverkauf" },
    { id: "sonstiges", label: "Sonstiges" }
  ];

  // Function to check if date is Tuesday-Saturday
  const isAvailableDate = (date: Date) => {
    const day = date.getDay();
    return day >= 2 && day <= 6; // Tuesday (2) to Saturday (6)
  };
  return (
    <div className="min-h-screen bg-luxury-black">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-3">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(90deg, hsl(var(--luxury-gold) / 0.3) 1px, transparent 1px),
                linear-gradient(0deg, hsl(var(--luxury-gold) / 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-luxury-black/40 to-luxury-black/80 z-10"></div>
          <div className="absolute inset-0 image-placeholder bg-luxury-gray/20"></div>
          
          <div className="relative z-20 container mx-auto px-4 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-luxury-white mb-8 tracking-tight leading-tight">
                  Lassen Sie uns<br />
                  <span className="text-luxury-gold">sprechen</span>
                </h1>
                <div className="w-16 h-px bg-luxury-gold mb-6"></div>
                <p className="text-lg sm:text-xl text-luxury-text/80 mb-8 font-light">
                  Ihr Traumbad beginnt mit einem Gespräch. Kontaktieren Sie uns für eine 
                  unverbindliche Beratung in unserem Mainzer Showroom.
                </p>
              </div>
              
              {/* Contact Form */}
              <div className="relative">
                <div className="bg-luxury-black/90 backdrop-blur-sm p-8 border border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors duration-300">
                  <h3 className="text-2xl font-light text-luxury-white mb-6 tracking-wider">BERATUNGSTERMIN ANFRAGEN</h3>
                  <div className="w-12 h-px bg-luxury-gold mb-6"></div>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-luxury-white text-base font-light">
                                Vorname <span className="text-luxury-gold">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="bg-luxury-gray/10 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60 focus:border-luxury-gold/50 text-base h-12"
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-luxury-white text-base font-light">
                                Nachname <span className="text-luxury-gold">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="bg-luxury-gray/10 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60 focus:border-luxury-gold/50 text-base h-12"
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-luxury-white text-base font-light">
                              E-Mail <span className="text-luxury-gold">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                {...field}
                                className="bg-luxury-gray/10 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60 focus:border-luxury-gold/50 text-base h-12"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      {/* Phone */}
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-luxury-white text-base font-light">
                              Telefonnummer <span className="text-luxury-gold">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                {...field}
                                className="bg-luxury-gray/10 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60 focus:border-luxury-gold/50 text-base h-12"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      {/* Subject */}
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-luxury-white text-base font-light">
                              Betreff <span className="text-luxury-gold">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-luxury-gray/10 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60 focus:border-luxury-gold/50 text-base h-12"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      {/* Services */}
                      <FormField
                        control={form.control}
                        name="services"
                        render={() => (
                          <FormItem>
                            <FormLabel className="text-luxury-white text-base font-light mb-4 block">
                              Welche Services interessieren Sie? <span className="text-luxury-gold">*</span>
                            </FormLabel>
                            <div className="space-y-3">
                              {serviceOptions.map((service) => (
                                <FormField
                                  key={service.id}
                                  control={form.control}
                                  name="services"
                                  render={({ field }) => {
                                    return (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(service.id)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...field.value, service.id])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) => value !== service.id
                                                    )
                                                  )
                                            }}
                                            className="border-luxury-gold/50 data-[state=checked]:bg-luxury-gold data-[state=checked]:text-luxury-black"
                                          />
                                        </FormControl>
                                        <FormLabel className="text-luxury-text text-base font-light leading-6">
                                          {service.label}
                                        </FormLabel>
                                      </FormItem>
                                    )
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      {/* Date Picker */}
                      <FormField
                        control={form.control}
                        name="showroomDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-luxury-white text-base font-light">
                              Wunschtermin für den Showroom Besuch (Di-Sa)
                            </FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-full pl-3 text-left font-normal h-12 bg-luxury-gray/10 border-luxury-gray/30 text-luxury-white hover:bg-luxury-gray/20 hover:text-luxury-white hover:border-luxury-gold/50",
                                      !field.value && "text-luxury-text/60"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP", { locale: de })
                                    ) : (
                                      <span>Datum wählen</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0 bg-luxury-black border-luxury-gold/30" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date < new Date() || !isAvailableDate(date)
                                  }
                                  initialFocus
                                  className="pointer-events-auto bg-luxury-black text-luxury-white"
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      {/* Message */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-luxury-white text-base font-light">
                              Ihre Nachricht <span className="text-luxury-gold">*</span>
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                rows={4}
                                placeholder="Beschreiben Sie kurz Ihr Badprojekt..."
                                className="bg-luxury-gray/10 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60 focus:border-luxury-gold/50 text-base"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      {/* Privacy Consent */}
                      <FormField
                        control={form.control}
                        name="privacyConsent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 border border-luxury-gold/20 p-4 rounded">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="border-luxury-gold/50 data-[state=checked]:bg-luxury-gold data-[state=checked]:text-luxury-black mt-1"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-luxury-white text-sm font-light leading-relaxed">
                                <strong>Datenschutzhinweis:</strong> <span className="text-luxury-gold">*</span>
                              </FormLabel>
                              <p className="text-luxury-text/80 text-sm font-light leading-relaxed">
                                Ihre Angaben werden mit SSL-Verschlüsselung übertragen. Mit der Verarbeitung meiner personenbezogenen Daten nach Maßgabe der Datenschutzhinweise bin ich einverstanden.
                              </p>
                            </div>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black text-lg py-6 font-light tracking-wider h-auto"
                      >
                        BERATUNGSTERMIN ANFRAGEN
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="relative h-16 bg-luxury-black">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto px-8">
              <div className="h-px bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Kontaktinformationen */}
        <section className="py-16 sm:py-24 bg-luxury-black relative">
          {/* Blueprint grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(90deg, hsl(var(--luxury-gold) / 0.2) 1px, transparent 1px),
                linear-gradient(0deg, hsl(var(--luxury-gold) / 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-8 relative">
            {/* Technical title section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-luxury-gold"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white tracking-wider">KONTAKT</h2>
                <div className="w-12 h-px bg-luxury-gold"></div>
              </div>
              <p className="text-luxury-text/80 font-light">Drei Wege zu Ihrem Traumbad</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Showroom */}
              <div className="bg-luxury-gray/5 border border-luxury-gold/20 p-8 hover:border-luxury-gold/40 transition-colors duration-300">
                <h3 className="text-xl font-light text-luxury-white mb-6 tracking-wider">SHOWROOM BESUCHEN</h3>
                <div className="w-8 h-px bg-luxury-gold mb-6"></div>
                <div className="space-y-4 text-luxury-text">
                  <div>
                    <p className="text-luxury-gold text-sm mb-1 tracking-wide">ADRESSE</p>
                    <p className="font-light">Mombacher Straße 67<br />55122 Mainz</p>
                  </div>
                  <div>
                    <p className="text-luxury-gold text-sm mb-1 tracking-wide">ÖFFNUNGSZEITEN</p>
                    <p className="font-light">Mo-Fr: 9:00 - 18:00 Uhr<br />Sa: 9:00 - 16:00 Uhr<br />So: Nach Vereinbarung</p>
                  </div>
                  <div>
                    <p className="text-luxury-gold text-sm mb-1 tracking-wide">PARKEN</p>
                    <p className="font-light">Kostenfreie Parkplätze<br />direkt vor dem Showroom</p>
                  </div>
                </div>
              </div>

              {/* Direktkontakt */}
              <div className="bg-luxury-gray/5 border border-luxury-gold/20 p-8 hover:border-luxury-gold/40 transition-colors duration-300">
                <h3 className="text-xl font-light text-luxury-white mb-6 tracking-wider">DIREKTKONTAKT</h3>
                <div className="w-8 h-px bg-luxury-gold mb-6"></div>
                <div className="space-y-4 text-luxury-text">
                  <div>
                    <p className="text-luxury-gold text-sm mb-1 tracking-wide">GESCHÄFTSFÜHRER</p>
                    <p className="font-light">Axel Fröhlich</p>
                  </div>
                  <div>
                    <p className="text-luxury-gold text-sm mb-1 tracking-wide">TELEFON</p>
                    <p className="font-light">+49 6131 123456</p>
                  </div>
                  <div>
                    <p className="text-luxury-gold text-sm mb-1 tracking-wide">E-MAIL</p>
                    <p className="font-light">info@axel-froehlich.de</p>
                  </div>
                  <div>
                    <p className="text-luxury-gold text-sm mb-1 tracking-wide">NOTFALL-SERVICE</p>
                    <p className="font-light">+49 172 1234567<br />24/7 für Stammkunden</p>
                  </div>
                </div>
              </div>

              {/* Online-Shop */}
              <div className="bg-luxury-gray/5 border border-luxury-gold/20 p-8 hover:border-luxury-gold/40 transition-colors duration-300">
                <h3 className="text-xl font-light text-luxury-white mb-6 tracking-wider">ONLINE-SHOP</h3>
                <div className="w-8 h-px bg-luxury-gold mb-6"></div>
                <div className="space-y-4 text-luxury-text">
                  <p className="font-light">
                    Entdecken Sie unser Sortiment an hochwertigen Badprodukten 
                    in unserem Online-Shop.
                  </p>
                  <a 
                    href="https://froehlich-bad.de" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-luxury-gold hover:text-luxury-white transition-colors duration-300 tracking-wide"
                  >
                    → froehlich-bad.de
                  </a>
                  <p className="text-sm font-light">
                    Versandkostenfrei ab 500€<br />
                    Persönliche Beratung inklusive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architectural Divider */}
        <div className="relative h-16 bg-luxury-black overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto px-8">
              <div className="flex items-center">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-luxury-gold/20"></div>
                <div className="mx-4 w-2 h-2 bg-luxury-gold/50 rotate-45"></div>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-luxury-gold/20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Anfahrt */}
        <section className="py-16 sm:py-24 bg-luxury-dark/30">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-luxury-gold"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white tracking-wider">ANFAHRT & LAGE</h2>
                <div className="w-12 h-px bg-luxury-gold"></div>
              </div>
              <p className="text-luxury-text/80 font-light">Ihr Weg zu uns nach Mainz</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="relative">
                <div className="aspect-[4/3] image-placeholder bg-luxury-gray/20 mb-6 border border-luxury-gold/20"></div>
                <p className="text-luxury-text text-center font-light tracking-wide">
                  INTERAKTIVE KARTE MIT ANFAHRT ZUM SHOWROOM
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="bg-luxury-black/40 border border-luxury-gold/20 p-6 hover:border-luxury-gold/40 transition-colors duration-300">
                  <h3 className="text-lg text-luxury-gold mb-3 font-light tracking-wider">MIT DEM AUTO</h3>
                  <p className="text-luxury-text font-light leading-relaxed">
                    Über die A60 Abfahrt Mainz-Finthen, dann 5 Minuten stadteinwärts. 
                    Kostenfreie Parkplätze direkt vor dem Showroom.
                  </p>
                </div>
                
                <div className="bg-luxury-black/40 border border-luxury-gold/20 p-6 hover:border-luxury-gold/40 transition-colors duration-300">
                  <h3 className="text-lg text-luxury-gold mb-3 font-light tracking-wider">ÖPNV</h3>
                  <p className="text-luxury-text font-light leading-relaxed">
                    Straßenbahn Linie 53 bis Haltestelle "Mombacher Straße", 
                    dann 2 Minuten Fußweg.
                  </p>
                </div>
                
                <div className="bg-luxury-black/40 border border-luxury-gold/20 p-6 hover:border-luxury-gold/40 transition-colors duration-300">
                  <h3 className="text-lg text-luxury-gold mb-3 font-light tracking-wider">BUNDESWEITE ANREISE</h3>
                  <p className="text-luxury-text font-light leading-relaxed">
                    Mainz Hauptbahnhof 15 Minuten entfernt. Flughafen Frankfurt 
                    30 Minuten mit dem Auto. Gerne organisieren wir auch einen 
                    Abholservice für überregionale Kunden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="relative h-16 bg-luxury-black">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto px-8">
              <div className="h-px bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="py-16 sm:py-24 bg-luxury-black">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-luxury-gold"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white tracking-wider">HÄUFIGE FRAGEN</h2>
                <div className="w-12 h-px bg-luxury-gold"></div>
              </div>
              <p className="text-luxury-text/80 font-light">Antworten auf die wichtigsten Fragen</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  question: "Wie lange dauert eine Badplanung?",
                  answer: "Je nach Komplexität 2-4 Wochen von der ersten Beratung bis zur finalen 3D-Planung."
                },
                {
                  question: "Planen Sie auch außerhalb von Mainz?",
                  answer: "Ja, wir betreuen Projekte deutschlandweit. Große Projekte ab 50.000€ auch international."
                },
                {
                  question: "Was kostet eine 3D-Planung?",
                  answer: "Die erste 3D-Planung ist kostenfrei. Bei Beauftragung wird sie vollständig angerechnet."
                },
                {
                  question: "Führen Sie auch die Sanierung durch?",
                  answer: "Ja, wir planen und realisieren – alles aus einer Hand mit geprüften Partnerbetrieben."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-luxury-gray/5 border border-luxury-gold/20 p-8 hover:border-luxury-gold/40 transition-colors duration-300">
                  <h3 className="text-xl font-light text-luxury-white mb-4 tracking-wide">{faq.question}</h3>
                  <div className="w-12 h-px bg-luxury-gold/50 mb-4"></div>
                  <p className="text-luxury-text font-light leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;