import image from "../assets/corporate.png";
import image1 from "../assets/lifestyle.png";
import image2 from "../assets/spa&yoga.png";
import image3 from "../assets/yoga package.png";
import image4 from "../assets/kids yoga.png";
import image5 from "../assets/thera.png";

export const servicesData = [
  {
    id: "corporate",
    title: "Corporate Wellness Services",
    shortDescription:
      "Wellness programs for teams, workplaces, and executives.",
    image: image,
    details: {
      intro:
        "Wellness Connect helps organizations build healthy, energized, and high-performing teams.",
      whatWeOffer: [
        "Employee Well-Being Programs",
        "Stress & Mental Health Workshops",
        "Ergonomic & Posture Training",
        "Corporate Fitness & Mobility Sessions",
        "Workplace Wellness Retreats",
      ],
      packages: [
        {
          name: "Starter Package",
          description:
            "Short, affordable sessions to introduce stress relief and boost team morale.",
        },
        {
          name: "Essential Package",
          description:
            "A balanced mix of massage, stretching, and posture care.",
        },
        {
          name: "Premium Package",
          description:
            "Full physical and mental wellness support including yoga and mindfulness.",
        },
        {
          name: "Executive Package",
          description:
            "A bespoke wellness experience tailored for leadership teams.",
        },
      ],
    },
  },

  {
    id: "lifestyle",
    title: "Lifestyle Wellness Services",
    shortDescription: "Massage, therapy & relaxation packages.",
    image: image1,
    details: {
      treatments: [
        "Swedish Massage – Full-body relaxation.",
        "Aromatherapy Massage – Essential oils for calm.",
        "Hot Stone Massage – Heat therapy.",
        "Wood Therapy – Sculpting & detox.",
        "Neck & Back Massage – Targeted relief.",
        "Prenatal Massage – Safe relaxation.",
      ],
      therapeuticCare: [
        "Pain Relief Massage",
        "Arthritis Massage",
        "Diabetic Care",
        "Sports Massage",
        "Rehabilitation Massage",
      ],
      addOns: ["Hot Stones (+₦10,000)", "Aromatherapy Oils (+₦5,000)", "30-Minute Extension (+₦15,000)"],
    },
  },

  {
    id: "party",
    title: "Spa & Yoga Party Packages",
    shortDescription: "Group wellness events for celebrations and teams.",
    image: image2,
    details: {
      sessions: [
        {
          duration: "30-Minute Party Session: A quick, refreshing mix of gentle yoga, breathwork, and mini massages. Best For: Corporate teams, birthdays, girls’ day outs, bridal showers.",
          benefits: ["Light relaxation", "Stress relief", "Easy setup"],
        },
        {
          duration: "60-Minute Party Session: A deeper, retreat-style experience with yoga, meditation, aromatherapy, and relaxing massages. Best For: Special celebrations, retreats, family or friends’ relaxation",
          benefits: ["Deep relaxation", "Bonding experience", "Themes available"],
        },
      ],
    },
  },

  {
    id: "yoga",
    title: "Yoga Packages",
    shortDescription: "Private, couple, group & corporate yoga sessions.",
    image: image3,
    details: {
      experiences: [
        "Private Yoga: A one-on-one session tailored to your goals—perfect for beginners, stress relief, posture improvement, or rebuilding balance.",
        "Couple Yoga: A shared session for partners or friends to connect through synchronized poses and assisted stretches.",
        "Small Group Yoga: Calm, community-style yoga for 6–10 people—ideal for friends, families, or small teams.",
        "Corporate Yoga: Workplace wellness sessions designed to reduce stress and boost productivity.",
      ],
      themes: [
        "Candlelight Yoga",
        "Mindful Mornings",
        "Family Yoga",
        "Retreat-Style Sessions",
      ],
    },
  },

  {
    id: "therapeutic",
    title: "Therapeutic Wellness Services",
    shortDescription: "Massage, therapy & relaxation packages.",
    image: image5,
    details: {
      
      therapeuticCare: [
        "Pain Relief Massage",
        "Arthritis Massage",
        "Diabetic Care",
        "Sports Massage",
        "Rehabilitation Massage",
      ],
    
    },
  },

  {
    id: "kids",
    title: "Kids Yoga Packages",
    shortDescription: "Mindful, fun yoga experiences for children.",
    image: image4,
    details: {
      programs: [
        "Kids Yoga Discovery",
        "4-Week Mindful Movers",
        "8-Week Young Yogis Journey",
        "School Wellness Program",
      ],
      addOns: [
        "Parent-Child Yoga (₦15,000)",
        "Mindful Coloring Kit (₦10,000)",
        "Photography & Decor",
      ],
    },
  },
];
