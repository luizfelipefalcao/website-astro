import { enCA, enUS, frCA } from "./routing";
import type { Language } from "./routing"
// QR Codes
import enCA_Homepage from "@assets/productHeros/qrCodes/CaHomepage.png";
import frCA_Homepage from "@assets/productHeros/qrCodes/CA_FR_Homepage.png";
import SmartBunny_Homepage from "@assets/productHeros/qrCodes/SmartBunny_HomePage_if3d9vtw_qr_code.png"
import enCA_ADD_QR from "@assets/productHeros/qrCodes/CaADD.png"
import enCA_Covid19 from "@assets/productHeros/qrCodes/CaCovid19.png"
import enCA_HospitalCash from "@assets/productHeros/qrCodes/CaHospitalCash.png"
import enCA_CI from "@assets/productHeros/qrCodes/CaCriticalIllness.png"
import enCA_IncomeProtection from "@assets/productHeros/qrCodes/CaIncomeProtection.png"
import enCA_Kids from "@assets/productHeros/qrCodes/CaKids.png"
import enCA_Life from "@assets/productHeros/qrCodes/CaLife.png"
import enCA_Travel from "@assets/productHeros/qrCodes/CaTravel.png"
import frCA_ADD from "@assets/productHeros/qrCodes/CA_FR_ADD.png"
import frCA_Covid19 from "@assets/productHeros/qrCodes/CA_FR_Covid19.png"
import frCA_HospitalCash from "@assets/productHeros/qrCodes/CA_FR_HospitalCash.png"
import frCA_CI from "@assets/productHeros/qrCodes/CA_FR_CriticalIllness.png"
import frCA_IncomeProtection from "@assets/productHeros/qrCodes/CA_FR_IncomeProtection.png"
import frCA_KidsInsurance from "@assets/productHeros/qrCodes/CA_FR_KidsInsurance.png"
import frCA_LifeInsurance from "@assets/productHeros/qrCodes/CA_FR_LifeInsurance.png"
import frCA_TravelInsurance from "@assets/productHeros/qrCodes/CA_FR_TravelInsurance.png"
import enCAVTC from "@assets/productHeros/qrCodes/CaVTC.png"
import frCAVTC from "@assets/productHeros/qrCodes/CA_FR_VTC.png"
import enCASuperVisa from "@assets/productHeros/qrCodes/CaSuperVisa.png"
import frCASuperVisa from "@assets/productHeros/qrCodes/CA_FR_Super.png"
import enUS_ADD from "@assets/productHeros/qrCodes/UsADD.png"
import enUS_Covid19 from "@assets/productHeros/qrCodes/UsCovid19.png"
import SmartBunny_FinalExpense from "@assets/productHeros/qrCodes/SmartBunny_FinalExpense_8sq6dca6_qr_code.png"
import enUS_IdentityProtection from "@assets/productHeros/qrCodes/UsIdentityProtection.png"
import SmartBunny_PhoneInsurance from "@assets/productHeros/qrCodes/SmartBunny_PhoneInsurance_0jqrouso_qr_code.png"
import SmartBunny_Renters from "@assets/productHeros/qrCodes/SmartBunny_RentersInsurance_8f0p4olr_qr_code.png"
import SmartBunny_TravelInsurance from "@assets/productHeros/qrCodes/SmartBunny_TravelInsurance_8383bs0i_qr_code.png"
import SmartBunny_LifeInsurance from "@assets/productHeros/qrCodes/SmartBunny_LifeInsurance_38wymb0e_qr_code.png"
import * as Icons from "@assets/products"

export type HeroStrings = {
    [key in Language]: {
        title: string;
        iconTitle: string;
        subTitle: string;
        heroImageAlt: string;
        bullets: string[];
        downloadAppQR: string;
        forFullDetails: string;
        policyWordings: string;
        QR: ImageMetadata,
        downloadLink: string,
    };
}
export type LandingPageStrings = {
    [key in Language]: {
        title: string;
        paragraph: string;
        heroImageAlt: string;
        bullets: string[];
        downloadAppQR: string;
        forFullDetails: string;
    };
}

export const defaultQR = {
    [enCA]: {
        QR: enCA_Homepage,
        downloadLink: "https://go.onelink.me/EMjq/fkbg96c1",
    },
    [frCA]: {
        QR: frCA_Homepage,
        downloadLink: "https://go.onelink.me/EMjq/a8yjs52d",
    },
    [enUS]: {
        QR: SmartBunny_Homepage,
        downloadLink: "https://smartbunny.onelink.me/1vKg/if3d9vtw",
    },
}

export const lifeInsuranceStrings = {
    [enCA]: {
        title: "Life Insurance",
        icon: Icons.Life,
        iconTitle: "Life Insurance",
        subTitle:
            "Get life insurance to protect what matters most. Have peace of mind knowing that this coverage will help pay outstanding debts, mortgage, tuition fees, or whatever is important to you and your loved ones.",
        heroImageAlt: "",
        bullets: [
            "Premiums starting at $5 / month",
            "Up to $1,000,000 in coverage",
            "Up to 25 years of renewable coverage",
            "No medical exam",
            "Immediate coverage",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
        QR: enCA_Life,
        downloadLink: "https://go.onelink.me/EMjq/llbye65x",

    },
    [enUS]: {
        title: "Life Insurance",
        icon: Icons.Life,
        iconTitle: "Life Insurance",
        subTitle:
            "Get life insurance to protect what matters most. Have peace of mind knowing that this coverage will help pay outstanding debts, mortgage, tuition fees, or whatever is important to you and your loved ones.",
        heroImageAlt: "",
        bullets: [
            "Premiums starting at $15 per month",
            "Up to $500,000 in coverage",
            "Optional Critical Illness Coverage",
            "No medical exam",
            "Immediate coverage",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
        QR: SmartBunny_LifeInsurance,
        downloadLink: "https://smartbunny.onelink.me/1vKg/38wymb0e",
    },
    [frCA]: {
        title: "Assurance vie",
        icon: Icons.Life,
        iconTitle: "Assurance vie",
        subTitle:
            "Obtenez une assurance vie pour protéger ce qui compte le plus. Ayez l'esprit tranquille en sachant que cette couverture vous aidera à payer les dettes en cours, l'hypothèque, les frais de scolarité, ou tout ce qui est important pour vous et vos proches.",
        heroImageAlt: "",
        bullets: [
            "Primes à partir de 5 $ par mois",
            "Jusqu'à 1 000 000 $ de couverture",
            "Jusqu'à 25 ans de couverture renouvelable",
            "Aucun examen médical",
            "Une couverture immédiate",
        ],
        downloadAppQR: "Code QR pour télécharger l'application.",
        forFullDetails:
            "Les points saillants de la couverture sont indiqués ci-dessus. Pour tous les détails sur les garanties et les exclusions, veuillez consulter les ",
        policyWordings: "libellés de polices.",
        QR: frCA_LifeInsurance,
        downloadLink: "https://go.onelink.me/EMjq/szn4a6yu",
    },
} as HeroStrings;

export const travelInsuranceStrings = {
    [enCA]: {
        title: "Travel Insurance",
        icon: Icons.Travel,
        iconTitle: "Travel Insurance",
        subTitle:
            "When travelling outside of your home province or Canada, the cost of medical care can be terrifying. Get Goose travel medical coverage and travel worry free. Policies as low as $4 and coverage up to $10 million. No age limit, no medical exams or questionnaires, and worldwide coverage.",
        heroImageAlt: "",
        bullets: [
            "Up to $10 million of worldwide travel medical insurance",
            "Coverage in 60 seconds",
            "Option to add unstable pre-existing medical conditions rider",
            "Only 8 medical questions for travellers over 60",
            "Reputable claims management partner with over 60 years of experience",
            "Option to purchase single-trip or multi-trip annual policies",
            "Special offer: 5% companion discounted on multi-trip policies",
        ],
        downloadAppQR: "QR code to download the app",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
        QR: enCA_Travel,
        downloadLink: "https://go.onelink.me/EMjq/2et7f8r9",
    },
    [enUS]: {
        title: "Travel Insurance",
        icon: Icons.Travel,
        iconTitle: "Travel Insurance",
        subTitle:
            "When traveling outside of your health network, home state or the USA, the cost of medical care can be terrifying. Get SmartBunny travel medical coverage and travel worry free with coverage up to $5 million of travel medical coverage.",
        heroImageAlt: "",
        bullets: [
            "Up to $5 million of worldwide travel medical insurance",
            "Coverage in 60 seconds",
            "Up to $500,000 in medical evacuation",
            "Domestic and international plans",
            "Trip Protection Coverage for flights, accommodation, events, etc.",
            "Hospital, physician, and ambulance services",
            "Prescription drugs",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
        QR: SmartBunny_TravelInsurance,
        downloadLink: "https://smartbunny.onelink.me/1vKg/8383bs0i",
    },
    [frCA]: {
        title: "Assurance voyage",
        icon: Icons.Travel,
        iconTitle: "Assurance voyage",
        subTitle:
            "Lors de vos déplacements hors de votre province d'origine ou du Canada, le coût des soins médicaux peut être effrayant. Optez pour la couverture médicale de voyage Goose et voyagez en toute tranquillité. Des polices à partir de seulement 4 $ et une couverture pouvant aller jusqu'à 10 millions de dollars. Aucune limite d'âge, aucun examen médical ni questionnaire requis, et une couverture mondiale.",
        heroImageAlt: "",
        bullets: [
            "Jusqu'à 10 millions de dollars de couverture d'assurance médicale de voyage mondiale en 60 secondes",
            "Option pour ajouter une clause pour conditions médicales préexistantes instables",
            "Seulement 8 questions médicales pour les voyageurs de plus de 60 ans",
            "Partenaire de gestion des réclamations réputé avec plus de 60 ans d'expérience",
            "Option pour acheter des polices annuelles à voyage unique ou multi-voyages",
            "Offre spéciale : réduction de 5% pour le compagnon",
        ],
        downloadAppQR: "Code QR pour télécharger l'application.",
        forFullDetails:
            "Les points saillants de la couverture sont indiqués ci-dessus. Pour tous les détails sur les garanties et les exclusions, veuillez consulter les ",
        policyWordings: "libellés de polices.",
        QR: frCA_TravelInsurance,
        downloadLink: "https://go.onelink.me/EMjq/yxlxej5b",
    },
};

export const vtcStrings = {
    [enCA]: {
        title: "Visitors to Canada",
        icon: Icons.VTC,
        iconTitle: "Visitors To Canada",
        subTitle:
            "Ensure a safe and worry-free visit to Canada with up to $1 million of coverage. With our comprehensive insurance coverage, including Super Visa Insurance options, you can have peace of mind knowing you're protected against unexpected medical emergencies and other unforeseen situations during your stay in Canada.",
        heroImageAlt: "",
        bullets: [
            "The most affordable Visitors to Canada and Super Visa Insurance",
            "Super Visa Insurance - Specific coverage tailored for those visiting Canada under the Super Visa program.",
            "Emergency Medical Coverage - Protection for unexpected medical expenses during your stay in Canada",
            "Repatriation Assistance - Coverage for the costs associated with returning to your home country in case of serious illness or injury",
            "Travel Assistance Services - Access to medical referrals, translation services, and other support while in Canada",
        ],
        downloadAppQR: "QR code to download the app",
        forFullDetails:
            "The coverage highlights are listed above. For comprehensive details on coverages, exclusions, and terms, please refer to the ",
        policyWordings: "policy wordings.",
        QR: enCAVTC,
        downloadLink: "https://go.onelink.me/EMjq/in2t6vbz",
    },
    [frCA]: {
        title: "Assurance visiteurs au Canada",
        icon: Icons.VTC,
        iconTitle: "Visiteurs au Canada",
        subTitle:
            "Assurez-vous une visite sécurisée et sans souci au Canada avec une couverture allant jusqu'à 1 million de dollars. Avec notre couverture d'assurance complète, y compris des options d'assurance pour le Super Visa, vous pouvez avoir l'esprit tranquille en sachant que vous êtes protégé contre les urgences médicales inattendues et d'autres situations imprévues pendant votre séjour au Canada.",
        heroImageAlt: "",
        bullets: [
            "L'assurance pour visiteurs au Canada et pour le Super Visa la plus abordable",
            "Assurance Super Visa - Couverture spécifique pour ceux qui visitent dans le cadre du programme Super Visa",
            "Couverture médicale d'urgence - Protection contre les dépenses médicales inattendues pendant votre visite au Canada.",
            "Assistance au rapatriement - Couverture des frais associés au retour dans votre pays d'origine en cas de maladie ou de blessure grave",
            "Services d'assistance voyage - Accès à des références médicales, services de traduction et autres soutiens pendant votre séjour au Canada",
        ],
        downloadAppQR: "Code QR pour télécharger l'application",
        forFullDetails:
            "Les points saillants de la couverture sont énumérés ci-dessus. Pour des détails complets sur les garanties, les exclusions et les conditions, veuillez vous référer aux ",
        policyWordings: "libellés de polices.",
        QR: frCAVTC,
        downloadLink: "https://go.onelink.me/EMjq/secoc9iv",
    },
};

export const adndStrings = {
    [enCA]: {
        title: "Accidental Death and Dismemberment",
        icon: Icons.ADD,
        iconTitle: "AD&D Insurance",
        subTitle:
            "No matter how careful you are, accidents happen! Accidental Death and Dismemberment (AD&D) Insurance provides cash in the event of accidental death or a covered injury to ensure you and your family are financially secure.",
        heroImageAlt: "",
        bullets: [
            "Coverage for accidental death and dismemberment as low as $5 per month.",
            "Up to $250,000 lump sum payment for covered events",
            "No medical exam or questionnaire required",
            "Immediate coverage",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
        QR: enCA_ADD_QR,
        downloadLink: "https://go.onelink.me/EMjq/9ytnhn50",
    },
    [enUS]: {
        title: "Accidental Death and Dismemberment",
        icon: Icons.ADD,
        iconTitle: "AD&D Insurance",
        subTitle:
            "No matter how careful you are, accidents happen! Accidental Death and Dismemberment (AD&D) Insurance provides cash in the event of accidental death or a covered injury to ensure you and your family are financially secure.",
        heroImageAlt: "",
        bullets: [
            "Coverage for accidental death and dismemberment at $9 per month",
            "Up to $200,000 lump sum payment for covered events",
            "No medical exam or questionnaire required",
            "Immediate coverage",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
        QR: enUS_ADD,
        downloadLink: "https://go.onelink.me/EMjq/c9x3f8n0",
    },
    [frCA]: {
        title: "Décès et mutilation accidentels",
        icon: Icons.ADD,
        iconTitle: "Assurance D&MA",
        subTitle:
            "Peu importe à quel point vous êtes prudent, les accidents arrivent! L'assurance décès accidentel et mutilation (D&MA) offre une indemnisation en cas de décès accidentel ou de blessure couverte pour garantir votre sécurité financière et celle de votre famille.",
        heroImageAlt: "",
        bullets: [
            "Couverture pour décès accidentel et mutilation à partir de seulement 5 $ par mois.",
            "Paiement forfaitaire pouvant aller jusqu'à 250 000 $ pour les événements couverts",
            "Aucun examen médical ni questionnaire requis",
            "Couverture immédiate",
        ],
        downloadAppQR: "Code QR pour télécharger l'application.",
        forFullDetails:
            "Les points saillants de la couverture sont indiqués ci-dessus. Pour tous les détails sur les garanties et les exclusions, veuillez consulter les ",
        policyWordings: "libellés de polices.",
        QR: frCA_ADD,
        downloadLink: "https://go.onelink.me/EMjq/a44hm88r",
    },
};

export const kidsInsuranceStrings = {
    [enCA]: {
        title: "Kids Insurance",
        icon: Icons.Kids,
        iconTitle: "Kids Insurance",
        subTitle:
            "Kids and accidents are usually unavoidable. Whether your child is an athlete, naturally rambunctious, or just accident-prone, we have you covered! Protect your family against cost not covered by your provincial health plan.",
        heroImageAlt: "",
        bullets: [
            "Only $5 a month",
            "Up to $5,000 of critical illness coverage",
            "Dental treatment and damages of eye glasses or contact lenses.",
            "Braces, casts, crutches, and other equipement",
            "Travel medical coverage",
            "Hospitalization accommodation and expenses including ambulance services, meals, parking, and more.",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
        QR: enCA_Kids,
        downloadLink: "https://go.onelink.me/EMjq/yp2t10cc",
    },
    [enUS]: {
        title: "Kids Insurance",
        icon: Icons.Kids,
        iconTitle: "Kids Insurance",
        subTitle:
            "Kids and accidents are usually unavoidable. Whether your child is an athlete, naturally rambunctious, or just accident-prone, we have you covered! Protect your family against cost not covered by your health plan.",
        heroImageAlt: "",
        bullets: [
            "Only $5 a month",
            "Up to $5,000 of critical illness coverage",
            "Dental treatment and damages of eye glasses or contact lenses.",
            "Braces, casts, crutches, and other equipement",
            "Travel medical coverage",
            "Hospitalization accommodation and expenses including ambulance services, meals, parking, and more.",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
    },
    [frCA]: {
        title: "Assurance pour enfants",
        icon: Icons.Kids,
        iconTitle: "Assurance pour enfants",
        subTitle:
            "Les enfants et les accidents sont généralement inévitables. Que votre enfant soit un athlète, naturellement turbulent ou simplement sujet aux accidents, nous vous couvrons ! Protégez votre famille contre les coûts non couverts par votre régime d'assurance santé provincial.",
        heroImageAlt: "",
        bullets: [
            "Seulement $5 par mois",
            "Jusqu'à 5 000 $ de couverture en cas de maladie grave",
            "Traitement dentaire et dommages aux lunettes ou lentilles de contact.",
            "Appareils dentaires, plâtres, béquilles et autres équipements.",
            "Couverture médicale pour voyage",
            "Hébergement et frais d'hospitalisation, y compris les services d'ambulance, les repas, le stationnement, et plus encore."
        ],
        downloadAppQR: "Code QR pour télécharger l'application.",
        forFullDetails:
            "Les points saillants de la couverture sont indiqués ci-dessus. Pour tous les détails sur les garanties et les exclusions, veuillez consulter les ",
        policyWordings: "libellés de polices.",
        QR: frCA_KidsInsurance,
        downloadLink: "https://go.onelink.me/EMjq/73okmnq1",
    },
};

export const incomeProtectionStrings = {
    [enCA]: {
        title: "Income Protection",
        icon: Icons.IncomeProtection,
        iconTitle: "Income Protection",
        subTitle:
            "Safeguard your income with insurance that provides financial support during unforeseen accidents. For just $10 a month, get up to $1,500 of income protection so you can focus on recovery.",
        heroImageAlt: "",
        bullets: [
            "Coverage for permanent or total disability",
            "Covers accidental death and dismemberment",
            "Coverage for short and long-term disabilities",
            "No medical exam for most plans",
            "Modification of workplace including home office",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
        QR: enCA_IncomeProtection,
        downloadLink: "https://go.onelink.me/EMjq/gtzajd05",
    },
    [enUS]: {
        title: "Income Protection",
        icon: Icons.IncomeProtection,
        iconTitle: "Income Protection",
        subTitle:
            "Safeguard your income with insurance that provides financial support during unforeseen circumstances. Ensure you have coverage for disability, illness, and other events that may impact your ability to work.",
        heroImageAlt: "",
        bullets: [
            "Coverage for permanent or total disability",
            "Covers accidental death and dismemberment",
            "Coverage for short and long-term disabilities",
            "No medical exam for most plans",
            "Modification of workplace including home office",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
    },
    [frCA]: {
        title: "Assurance protection du revenu",
        icon: Icons.IncomeProtection,
        iconTitle: "Protection revenu",
        subTitle:
            "Protégez vos revenus avec une assurance qui offre un soutien financier en cas d'accidents imprévus. Pour seulement $10 par mois, obtenez jusqu'à $1 500 de protection du revenu afin de vous concentrer sur votre rétablissement.",
        heroImageAlt: "",
        bullets: [
            "Couverture pour invalidité permanente ou totale.",
            "Couvre le décès accidentel et l'amputation.",
            "Couverture pour les invalidités à court et à long terme",
            "Pas d'examen médical pour la plupart des plans",
            "Modification du lieu de travail, y compris le bureau à domicile.",
        ],
        downloadAppQR: "Code QR pour télécharger l'application.",
        forFullDetails:
            "Les points saillants de la couverture sont indiqués ci-dessus. Pour tous les détails sur les garanties et les exclusions, veuillez consulter les ",
        policyWordings: "libellés de polices.",
        QR: frCA_IncomeProtection,
        downloadLink: "https://go.onelink.me/EMjq/5wcf6gzo",
    },
};

export const hospitalCashStrings = {
    [enCA]: {
        title: "Hospital Cash",
        icon: Icons.HospitalCash,
        iconTitle: "Hospital Cash",
        subTitle:
            "Accidents or illnesses can strike at any time! Get Hospital Cash coverage and get paid up to $100 for day you are hospitalized anywhere in the world. Protect yourself, your family and lifestyle against unexpected financial set backs and focus on recovery.",
        heroImageAlt: "",
        bullets: [
            "Policies start as low as $5 a month",
            "Up to $100 per day of benefit",
            "Easy claims process",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
        QR: enCA_HospitalCash,
        downloadLink: "https://go.onelink.me/EMjq/jja8o9kq",
    },
    [enUS]: {
        title: "Hospital Cash",
        icon: Icons.HospitalCash,
        iconTitle: "Hospital Cash",
        subTitle:
            "Accidents or illnesses can strike at any time! Get Hospital Cash coverage and get paid up to $100 for day you are hospitalized anywhere in the world. Protect yourself, your family and lifestyle against unexpected financial set backs and focus on recovery.",
        heroImageAlt: "",
        bullets: [],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
    },
    [frCA]: {
        title: "Prestation hospitalière",
        icon: Icons.HospitalCash,
        iconTitle: "Prestation hospitalière",
        subTitle:
            "Les accidents ou maladies peuvent survenir à tout moment! Obtenez une couverture Hospital Cash et recevez jusqu'à 100 $ par jour d'hospitalisation n'importe où dans le monde. Protégez-vous, votre famille et votre mode de vie contre les imprévus financiers et concentrez-vous sur votre rétablissement.",
        heroImageAlt: "",
        bullets: [
            "Les polices commencent aussi bas que 5$/mois",
            "Jusqu'à 100$ de prestations par jour",
            "Processus de réclamation facile",
        ],
        downloadAppQR: "Code QR pour télécharger l'application.",
        forFullDetails:
            "Les points saillants de la couverture sont indiqués ci-dessus. Pour tous les détails sur les garanties et les exclusions, veuillez consulter les ",
        policyWordings: "libellés de polices.",
        QR: frCA_HospitalCash,
        downloadLink: "https://go.onelink.me/EMjq/otcsspl0",
    },
};

export const identityProtectionStrings = {
    [enCA]: {
        title: "Identity Protection",
        icon: Icons.IDProtection,
        iconTitle: "Identity Protection",
        subTitle:
            "Safeguard your personal information and financial security with identity protection insurance. This coverage helps mitigate the impact of identity theft, offering support and assistance in restoring your identity and resolving related issues.",
        heroImageAlt: "",
        bullets: [
            "Monitoring and alerts for suspicious activity",
            "Assistance in case of identity theft",
            "Coverage for legal and recovery expenses",
            "Education on identity protection best practices",
            "24/7 support for policyholders",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
    },
    [enUS]: {
        title: "Identity Protection",
        icon: Icons.IDProtection,
        iconTitle: "Identity Protection",
        subTitle:
            "Safeguard your personal information and financial security with identity protection insurance. This coverage helps mitigate the impact of identity theft, offering support and assistance in restoring your identity and resolving related issues.",
        heroImageAlt: "",
        bullets: [
            "Monitoring and alerts for suspicious activity",
            "Assistance in case of identity theft",
            "Coverage for legal and recovery expenses",
            "Education on identity protection best practices",
            "24/7 support for policyholders",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
        QR: enUS_IdentityProtection,
        downloadLink: "https://go.onelink.me/EMjq/7wao72uq",
    },
    [frCA]: {
        title: "Assurance protection de l'identité",
        icon: Icons.IDProtection,
        iconTitle: "Assurance protection de l'identité",
        subTitle:
            "Protégez vos informations personnelles et votre sécurité financière avec l'assurance protection de l'identité. Cette couverture aide à atténuer l'impact du vol d'identité, offrant un soutien et une assistance pour rétablir votre identité et résoudre les problèmes connexes.",
        heroImageAlt: "",
        bullets: [
            "Surveillance et alertes en cas d'activité suspecte",
            "Assistance en cas de vol d'identité",
            "Couverture des frais juridiques et de récupération",
            "Éducation sur les meilleures pratiques de protection de l'identité",
            "Soutien 24/7 pour les titulaires de police",
        ],
        downloadAppQR: "Code QR pour télécharger l'application.",
        forFullDetails:
            "Les points saillants de la couverture sont indiqués ci-dessus. Pour tous les détails sur les garanties et les exclusions, veuillez consulter les ",
        policyWordings: "libellés de polices.",
    },
};

export const phoneInsuranceStrings = {
    [enCA]: {
        title: "Phone Insurance",
        icon: Icons.Phone,
        iconTitle: "Phone Insurance",
        subTitle:
            "Protect your phone against accidental damage, theft, and more with our phone insurance. Enjoy peace of mind knowing that your device is covered, and you can stay connected without worry.",
        heroImageAlt: "",
        bullets: [
            "Coverage for accidental damage",
            "Protection against theft",
            "Coverage for hardware and software issues",
            "Quick and easy claims process",
            "Flexible coverage plans",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
    },
    [enUS]: {
        title: "Phone Insurance",
        icon: Icons.Phone,
        iconTitle: "Phone Insurance",
        subTitle:
            "Protect your phone against accidental damage, theft, and more with our phone insurance. Enjoy peace of mind knowing that your device is covered, and you can stay connected without worry.",
        heroImageAlt: "",
        bullets: [
            "Coverage for accidental damage",
            "Protection against theft",
            "Coverage for hardware and software issues",
            "Quick and easy claims process",
            "Flexible coverage plans",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
        QR: SmartBunny_PhoneInsurance,
        downloadLink: "https://smartbunny.onelink.me/1vKg/0jqrouso",
    },
    [frCA]: {
        title: "Assurance téléphone",
        icon: Icons.Phone,
        iconTitle: "Assurance téléphone",
        subTitle:
            "Protégez votre téléphone contre les dommages accidentels, le vol, et plus encore avec notre assurance téléphone. Profitez de la tranquillité d'esprit en sachant que votre appareil est couvert, et restez connecté sans soucis.",
        heroImageAlt: "",
        bullets: [
            "Couverture des dommages accidentels",
            "Protection contre le vol",
            "Couverture des problèmes matériels et logiciels",
            "Processus de réclamation rapide et facile",
            "Plans de couverture flexibles",
        ],
        downloadAppQR: "Code QR pour télécharger l'application.",
        forFullDetails:
            "Les points saillants de la couverture sont indiqués ci-dessus. Pour tous les détails sur les garanties et les exclusions, veuillez consulter les ",
        policyWordings: "libellés de polices.",
    },
};

export const criticalIllnessStrings = {
    [enCA]: {
        title: "Critical Illness",
        icon: Icons.CI,
        iconTitle: "Critical Illness",
        subTitle:
            "Prepare for the unexpected with critical illness coverage. Safeguard your finances and focus on recovery by receiving a lump sum payment upon diagnosis of a covered critical illness like cancer, heart attack, stroke, and other life-threatening conditions.",
        heroImageAlt: "",
        bullets: [
            "25 conditions covered",
            "Up to $50,000 of coverage",
            "No medical exam for certain coverage amounts",
            "Premiums as low as $10 a month",
            "Instant approval",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
        QR: enCA_CI,
        downloadLink: "https://go.onelink.me/EMjq/k5mf1n54",
    },
    [enUS]: {
        title: "Critical Illness",
        icon: Icons.CI,
        iconTitle: "Critical Illness",
        subTitle:
            "Prepare for the unexpected with critical illness coverage. Safeguard your finances and focus on recovery by receiving a lump sum payment upon diagnosis of a covered critical illness.",
        heroImageAlt: "",
        bullets: [
            "Coverage for a range of critical illnesses",
            "Lump sum payment upon diagnosis",
            "No medical exam for certain coverage amounts",
            "Flexible coverage plans",
            "Immediate coverage",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above, for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
    },
    [frCA]: {
        title: "Maladies graves",
        icon: Icons.CI,
        iconTitle: "Maladies graves",
        subTitle:
            "Préparez-vous à l'inattendu avec une couverture pour maladies graves. Protégez vos finances et concentrez-vous sur votre rétablissement en recevant un paiement forfaitaire lors du diagnostic d'une maladie grave couverte, comme le cancer, l'infarctus, l'accident vasculaire cérébral et d'autres conditions mettant la vie en danger.",
        heroImageAlt: "",
        bullets: [
            "25 conditions couvertes",
            "Jusqu'à 50 000 $ de couverture",
            "Aucun examen médical pour certains montants de couverture",
            "Des primes aussi basses que 10 $ par mois",
            "Approbation instantanée",
        ],
        downloadAppQR: "Code QR pour télécharger l'application.",
        forFullDetails:
            "Les points saillants de la couverture sont indiqués ci-dessus. Pour tous les détails sur les garanties et les exclusions, veuillez consulter les ",
        policyWordings: "libellés de polices.",
        QR: frCA_CI,
        downloadLink: "https://go.onelink.me/EMjq/a9bbbkxr",
    },
};

export const rentersInsuranceStrings = {
    [enCA]: {
        title: "Renters Insurance",
        icon: Icons.Renters,
        iconTitle: "Renters Insurance",
        subTitle:
            "Protect your belongings and personal liability with renters insurance. This coverage provides financial protection in case of damage to your property, theft, or personal liability issues, giving you peace of mind in your rental home.",
        heroImageAlt: "",
        bullets: [
            "Up to $100,000 of personal liability coverage",
            "Up to $40,000 of coverage for belongings",
            "Only $500 deductible",
            "Optional coverages such as Bed Bugs, Water Backup Damage, and Pet Damage available.",
            "As low as $15 per month",
            "Immediate coverage",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above; for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
    },
    [enUS]: {
        title: "Renters Insurance",
        icon: Icons.Renters,
        iconTitle: "Renters Insurance",
        subTitle:
            "Protect your belongings and personal liability with renters insurance. This coverage provides financial protection in case of damage to your property, theft, or personal liability issues, giving you peace of mind in your rental home.",
        heroImageAlt: "",
        bullets: [
            "Up to $100,000 of personal liability coverage",
            "Up to $40,000 of coverage for belongings",
            "Only $500 deductible",
            "As low as $15 per month",
            "Immediate coverage",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above; for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
        QR: SmartBunny_Renters,
        downloadLink: "https://smartbunny.onelink.me/1vKg/8f0p4olr",
    },
    [frCA]: {
        title: "Assurance locataire",
        icon: Icons.Renters,
        iconTitle: "Assurance locataire",
        subTitle:
            "Protégez vos biens et votre responsabilité personnelle avec l'assurance locataire. Cette couverture offre une protection financière en cas de dommages à votre propriété louée, de vol ou de problèmes de responsabilité personnelle, vous offrant la tranquillité d'esprit dans votre domicile locatif.",
        heroImageAlt: "",
        bullets: [
            "Couverture pour les biens personnels et la responsabilité",
            "Protection financière en cas de dommages ou de vol",
            "Aucun examen médical requis",
            "Options de couverture flexibles",
            "Une couverture immédiate.",
        ],
        downloadAppQR: "Code QR pour télécharger l'application.",
        forFullDetails:
            "Les points saillants de la couverture sont indiqués ci-dessus. Pour tous les détails sur les garanties et les exclusions, veuillez consulter les ",
        policyWordings: "libellés de polices.",
    },
};

export const finalExpenseInsuranceStrings = {
    [enCA]: {
        title: "Final Expenses",
        icon: Icons.FinalExpenses,
        iconTitle: "Final Expenses Insurance",
        subTitle:
            "Secure final expenses to provide financial support during challenging times. Find peace of mind, knowing that this coverage will help cover funeral costs, outstanding debts, and other essential expenses for you or your loved ones.",
        heroImageAlt: "",
        bullets: [
            "Funeral Expense Coverage - Financial support for funeral expenses.",
            "Debt Settlement Insurance - Assistance in settling outstanding debts.",
            "Final Expense Protection - Coverage for essential end-of-life expenses.",
            "Family Support Benefit - Financial support for your loved ones during difficult times.",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above; for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
    },
    [enUS]: {
        title: "Final Expenses",
        icon: Icons.FinalExpenses,
        iconTitle: "Final Expenses Insurance",
        subTitle:
            "Secure final expenses to provide financial support during challenging times. Find peace of mind, knowing that this coverage will help cover funeral costs, outstanding debts, and other essential expenses for you or your loved ones.",
        heroImageAlt: "",
        bullets: [
            "Funeral Expense Coverage - Financial support for funeral expenses.",
            "Debt Settlement Insurance - Assistance in settling outstanding debts.",
            "Final Expenses Protection - Coverage for essential end-of-life expenses.",
            "Family Support Benefit - Financial support for your loved ones during difficult times.",
        ],
        downloadAppQR: "QR code to download the app.",
        forFullDetails:
            "Coverage highlights are shown above; for full details on coverages and exclusions, kindly view the ",
        policyWordings: "policy wordings.",
        QR: SmartBunny_FinalExpense,
        downloadLink: "https://smartbunny.onelink.me/1vKg/8sq6dca6",
    },
    [frCA]: {
        title: "Assurance frais funéraires",
        icon: Icons.FinalExpenses,
        iconTitle: "Assurance frais funéraires",
        subTitle:
            "Obtenez une assurance frais funéraires pour fournir un soutien financier en période difficile. Trouvez la tranquillité d'esprit en sachant que cette couverture aidera à couvrir les coûts funéraires, les dettes en cours et d'autres dépenses essentielles pour vous ou vos proches.",
        heroImageAlt: "",
        bullets: [
            "Couverture des frais funéraires - Soutien financier pour les coûts funéraires.",
            "Assurance de règlement des dettes - Aide pour régler les dettes en cours.",
            "Protection des frais finaux - Couverture des dépenses essentielles en fin de vie.",
            "Avantage de soutien familial - Soutien financier pour vos proches en période difficile.",
        ],
        downloadAppQR: "Code QR pour télécharger l'application.",
        forFullDetails:
            "Les points saillants de la couverture sont indiqués ci-dessus. Pour tous les détails sur les garanties et les exclusions, veuillez consulter les ",
        policyWordings: "libellés de polices.",
    },
};

