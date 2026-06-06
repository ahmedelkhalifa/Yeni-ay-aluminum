
import { PiDoorOpen } from "react-icons/pi";
import { GiWindow } from "react-icons/gi";
import { TbBuildingBridge2 } from "react-icons/tb";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import aluminum from "../assets/sliding_windows/2.webp";
import balcony from "../assets/balcony/2.webp";
import terrace from "../assets/pergola/1.webp";
import sliding from "../assets/sliding_windows/1.webp";
import maintenance from "../assets/Hero.webp";

export const getServices = (t) => [
  {
    id: 1,
    name: t("services.1.name"),
    short: t("services.1.short"),
    description: t("services.1.desc"),
    icon: PiDoorOpen,
    image: aluminum,
    bullets: [
      t("services.1.bullets.1"),
      t("services.1.bullets.2"),
      t("services.1.bullets.3"),
    ],
    explanation: {
      question: t("services.1.explanation.question"),
      answer: t("services.1.explanation.answer"),
    },
    faqs: {
      1: {
        question: t("services.1.FAQs.1.question"),
        answer: t("services.1.FAQs.1.answer"),
      },
      2: {
        question: t("services.1.FAQs.2.question"),
        answer: t("services.1.FAQs.2.answer"),
      },
      3: {
        question: t("services.1.FAQs.3.question"),
        answer: t("services.1.FAQs.3.answer"),
      },
      4: {
        question: t("services.1.FAQs.4.question"),
        answer: t("services.1.FAQs.4.answer"),
      },
    },
  },
  {
    id: 2,
    name: t("services.2.name"),
    short: t("services.2.short"),
    description: t("services.2.desc"),
    icon: GiWindow,
    image: balcony,
    bullets: [
      t("services.2.bullets.1"),
      t("services.2.bullets.2"),
      t("services.2.bullets.3"),
    ],
    explanation: {
      question: t("services.2.explanation.question"),
      answer: t("services.2.explanation.answer"),
    },
    faqs: {
      1: {
        question: t("services.2.FAQs.1.question"),
        answer: t("services.2.FAQs.1.answer"),
      },
      2: {
        question: t("services.2.FAQs.2.question"),
        answer: t("services.2.FAQs.2.answer"),
      },
      3: {
        question: t("services.2.FAQs.3.question"),
        answer: t("services.2.FAQs.3.answer"),
      },
      4: {
        question: t("services.2.FAQs.4.question"),
        answer: t("services.2.FAQs.4.answer"),
      },
    },
  },
  {
    id: 3,
    name: t("services.3.name"),
    short: t("services.3.short"),
    description: t("services.3.desc"),
    icon: TbBuildingBridge2,
    image: terrace,
    bullets: [
      t("services.3.bullets.1"),
      t("services.3.bullets.2"),
      t("services.3.bullets.3"),
    ],
    explanation: {
      question: t("services.3.explanation.question"),
      answer: t("services.3.explanation.answer"),
    },
    faqs: {
      1: {
        question: t("services.3.FAQs.1.question"),
        answer: t("services.3.FAQs.1.answer"),
      },
      2: {
        question: t("services.3.FAQs.2.question"),
        answer: t("services.3.FAQs.2.answer"),
      },
      3: {
        question: t("services.3.FAQs.3.question"),
        answer: t("services.3.FAQs.3.answer"),
      },
      4: {
        question: t("services.3.FAQs.4.question"),
        answer: t("services.3.FAQs.4.answer"),
      },
    },
  },
  {
    id: 4,
    name: t("services.4.name"),
    short: t("services.4.short"),
    description: t("services.4.desc"),
    icon: GiWindow,
    image: sliding,
    bullets: [
      t("services.4.bullets.1"),
      t("services.4.bullets.2"),
      t("services.4.bullets.3"),
    ],
    explanation: {
      question: t("services.4.explanation.question"),
      answer: t("services.4.explanation.answer"),
    },
    faqs: {
      1: {
        question: t("services.4.FAQs.1.question"),
        answer: t("services.4.FAQs.1.answer"),
      },
      2: {
        question: t("services.4.FAQs.2.question"),
        answer: t("services.4.FAQs.2.answer"),
      },
      3: {
        question: t("services.4.FAQs.3.question"),
        answer: t("services.4.FAQs.3.answer"),
      },
      4: {
        question: t("services.4.FAQs.4.question"),
        answer: t("services.4.FAQs.4.answer"),
      },
    },
  },
  {
    id: 5,
    name: t("services.5.name"),
    short: t("services.5.short"),
    description: t("services.5.desc"),
    icon: HiOutlineWrenchScrewdriver,
    image: maintenance,
    bullets: [
      t("services.5.bullets.1"),
      t("services.5.bullets.2"),
      t("services.5.bullets.3"),
    ],
    explanation: {
      question: t("services.5.explanation.question"),
      answer: t("services.5.explanation.answer"),
    },
    faqs: {
      1: {
        question: t("services.5.FAQs.1.question"),
        answer: t("services.5.FAQs.1.answer"),
      },
      2: {
        question: t("services.5.FAQs.2.question"),
        answer: t("services.5.FAQs.2.answer"),
      },
      3: {
        question: t("services.5.FAQs.3.question"),
        answer: t("services.5.FAQs.3.answer"),
      },
      4: {
        question: t("services.5.FAQs.4.question"),
        answer: t("services.5.FAQs.4.answer"),
      },
    },
  },
];
