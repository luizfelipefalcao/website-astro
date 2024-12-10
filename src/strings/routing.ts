
export const enUS = "en-us" as const;
export const enCA = "en-ca" as const;
export const frCA = "fr-ca" as const;
export type Language = 'en-ca' | 'fr-ca' | 'en-us';
export const languages = [enCA, enUS, frCA,]
export const defaultLanguage: Language = "en-ca"
export type LanguageStrings = {
    [K in Language]: {
        [key: string]: string;
    };
};
export const pageSize = 12;
export const { languageBump, cookieConsent } = {
    languageBump: 'language-bump',
    cookieConsent: 'cookie-consent'
}

export function getLangFromUrl(url: URL): Language {
    const [, lang] = url.pathname.split('/');

    if (url.toString().toLowerCase().includes('iheart')) return enUS
    // if (url.toString().toLowerCase().includes('localhost')) return enUS
    if (url.toString().toLowerCase().includes('smartbunny')) return enUS
    if (languages.includes(lang as Language)) return lang as Language
    return defaultLanguage;
}

/**
 * SEO is improved if the URL is language specific, these are the paths according to locale.
 * This will also enable language switching while staying on the same page. 
 */
export const routes = {
    [enCA]: {
        news: "news",
        contact: "contact",
        partners: "partners",
        careers: "careers",
        blog: "blog",
        helpCenter: "https://support.gooseinsurance.com/",
        policyWordings: "policy-wordings",
        announcements: "announcements",
        ADD: "accidental-death-and-dismemberment",
        about: "about",
        claims: "claims",
        criticalIllness: "critical-illness",
        lifeInsurance: "life-insurance",
        travelInsurance: "travel-insurance",
        kidsInsurance: "kids-insurance",
        hospitalCash: "hospital-cash",
        identityProtection: "identity-protection",
        phoneInsurance: "phone-insurance",
        vtc: "visitors-to-canada-insurance",
        privacy: "privacy-policy",
        terms: "terms-of-use",
        referral: "referral-program",
        affiliate: "affiliate-program",
        licensing: "licensing",
        verification: "email-verified",
    },
    [enUS]: {
        news: "news",
        contact: "contact",
        partners: "partners",
        careers: "careers",
        blog: "blog",
        helpCenter: "https://support.smartbunny.com/",
        policyWordings: "policy-wordings",
        announcements: "announcements",
        ADD: "accidental-death-and-dismemberment",
        about: "about",
        claims: "claims",
        lifeInsurance: "life-insurance",
        travelInsurance: "travel-insurance",
        rentersInsurance: "renters-insurance",
        finalExpense: "final-expense",
        phoneInsurance: "phone-insurance",
        identityProtection: "identity-protection",
        privacy: "privacy-policy",
        terms: "terms-of-use",
        referral: "referral-program",
        licensing: "licensing",
        verification: "email-verified",
    },
    [frCA]: {
        news: "nouvelles",
        contact: "contact",
        partners: "partenaires",
        careers: "carrieres",
        blog: "blog",
        helpCenter: "https://support.gooseinsurance.com/hc/fr-ca",
        policyWordings: "libelle-de-polices",
        announcements: "annonces",
        ADD: "deces-et-mutilation-accidentels",
        about: "a-propos",
        claims: "reclamations",
        criticalIllness: "assurance-maladies-graves",
        lifeInsurance: "assurance-vie",
        travelInsurance: "assurance-voyage",
        kidsInsurance: "assurance-enfants",
        hospitalCash: "prestation-hospitaliere",
        identityProtection: "protection-identite",
        phoneInsurance: "assurance-telephone",
        vtc: "assurance-visiteurs-au-canada",
        privacy: "politique-de-confidentialité",
        terms: "termes-de-utilisation",
        referral: "program-de-parrainage",
        licensing: "licences",
        verification: "courriel-verifie",
    },
};

type Mappings = {
    [currentLanguage: string]:
    {
        [routeSlugPart: string]: { // example: news or annonces (fr)
            [language: string]: [targetLanguageSlugPart: string] // the same slug part in the target language.
        }
    }
}

/**
 * Dynamically builds a mappings object which is used to swap the url between languages.
 * A url part is one piece of the url, the mappings object is used to translate from one url part to a target locale url part.
 * So for example, enCA:news would become frCA:annonces. It's done dynamically so when the routes object is updated, 
 * the mappings will be automatically up to date.
 */
export const mappings = {};
for (const language of languages) {
    mappings[language] = {};
    for (const [key, route] of Object.entries(routes[language])) {
        for (const targetLanguage of languages) {
            if (targetLanguage === language) continue;
            mappings[language][route] = {
                [enCA]: routes[enCA][key],
                [enUS]: routes[enUS][key],
                [frCA]: routes[frCA][key],
            }
        }
    }
}

/**
 * Swaps out the slug parts with the target slug parts.
 */
export function translateSlug(targetLanguage: Language, slug: string) {
    const [_, currLanguage, ...parts] = slug.split("/");
    if (currLanguage === targetLanguage) return slug
    try {
        let newSlug = `/${targetLanguage}/`
        for (const part of parts) {
            if (!part) break;
            if (part === "blog") {
                return `/${targetLanguage}/blog/`
            }
            if (isInteger(part) || !mappings[currLanguage][part] || part === 'undefined') {
                newSlug += part
                break;
            }
            const mapping = mappings[currLanguage][part][targetLanguage];
            newSlug += mapping ? mapping + '/' : '';
        };
        return newSlug
    } catch (e) {
        return `/${targetLanguage}/404`
    }
}

function isInteger(str) {
    return !isNaN(parseInt(str, 10)) && isFinite(parseInt(str, 10));
}