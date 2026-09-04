export const companyInfo = {
  name: "Perfilados de Acero, S.A.",
  shortName: "Perfilados de Acero",
  slogan: "Calidad, Resistencia y Precisión en Cada Proyecto",
  country: "Guatemala",
  location: "Sector Industrial, Ciudad de Guatemala",
  fullLocation: "Sector Industrial, Ciudad de Guatemala, Guatemala C.A.",
  coverage: "Despachos y entregas en Ciudad de Guatemala y a los 22 departamentos del país",
  phone: "+502 4125 6062",
  phoneFormatted: "+502 4125-6062",
  whatsappNumber: "50241256062",
  email: "ventas@perfilados.com.gt",
  hours: {
    weekdays: "Lunes a Viernes: 8:00 AM – 5:00 PM",
    saturday: "Sábados: 8:00 AM – 12:00 PM",
    sunday: "Domingos: Cerrado"
  }
};

export const createWhatsAppLink = (customText?: string) => {
  const defaultText = `Hola, me comunico desde el sitio web de Perfilados de Acero, S.A. Me gustaría solicitar una cotización e información técnica.`;
  const message = customText ? customText : defaultText;
  return `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
