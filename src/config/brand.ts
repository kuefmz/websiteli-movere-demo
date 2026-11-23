const phoneDisplay = "+39 353 431 9661";

export const BRAND = {
  name: "MOVERE",
  tagline: "movimento e vita",
  colors: {
    black: "#080A09",
    white: "#FFFFFF",
    red: "#B83B34",
    soft: "#F6F2EC",
    muted: "#656B67"
  },
  logo: "/assets/movere-clinic-logo.png",
  favicon: "/assets/movere-logo.png",
  heroImage: "/assets/jamal-rehabilitation-squat.webp",
  treatmentImage: "/assets/jamal-manual-treatment.webp",
  contact: {
    phoneDisplay,
    whatsappNumber: phoneDisplay.replace(/\D/g, ""),
    email: "info@movereclinic.com",
    city: "Italia",
    country: "IT"
  },
  locations: [
    {
      name: "Piazza Bernardino Pio",
      address: "Piazza Bernardino Pio, 13, 50126 Firenze FI, Italia",
      mapTargets: null,
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.7320471286935!2d11.2928062!3d43.757660800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5383888ad591%3A0x2f184dbb5571b5e8!2sPiazza%20Bernardino%20Pio%2C%2013%2C%2050126%20Firenze%20FI%2C%20Italy!5e0!3m2!1sen!2sch!4v1795397177739!5m2!1sen!2sch"
    },
    {
      name: null,
      address: "Studio medico, Via Ventisette Aprile, 19 rosso, 50129 Firenze FI, Italia",
      // Use the same Plus Code as the embed. Directions use the city's 19 R entrance coordinates.
      mapTargets: null,
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.7034664271723!2d11.250961391193691!3d43.779013969767725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a541cfa0af681%3A0x51d46ab1783097f6!2sStudio%20medico%2C%20Via%20Ventisette%20Aprile%2C%2019%20rosso%2C%2050129%20Firenze%20FI%2C%20Italy!5e0!3m2!1sen!2sch!4v1795400252550!5m2!1sen!2sch"
    }
  ],
  websiteliUrl: "https://websiteli.ch/?utm_source=google&utm_medium=referral&utm_campaign=movere_demo"
} as const;
