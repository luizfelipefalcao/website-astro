import { enCA, enUS, frCA, languages, routes } from "./routing";
import type { Language } from "./routing";

type FaqItem = {
    question: string;
    answer: string;
    link?: string;
};

export type FaqStrings = {
    [key in Language]: {
        title: string;
        faq: FaqItem[];
    };
};

export const mainHero = {
    [enCA]: {
        title: "If you were wondering...",
        faq: [
            {
                question: "How long has Goose been around?",
                answer: "We hatched our plan to offer the best travel insurance in 2017. Our flock asked for more so we grew our nest, Goose now offers travel, life, critical illness, and much more. Operating both in the United States and Canada."
            },
            {
                question: "Who underwrites Goose insurance policies?",
                answer: ["Goose has bespoke and exclusive coverages offered in partnership with various partners including but not limited to AIG, iA Financial, Lloyds of London, IMG to name a few, check our", "partner's page", "to learn more."],
                link: `/${enCA}/${routes[enCA].partners}`,
            },
            {
                question: "How do I make a claim?",
                answer: ["At Goose we work with different claims administrators for each of the coverages we sell. You can readily find this information on our", "claims page", "or under the Claims section in the Goose mobile app."],
                link: `/${enCA}/${routes[enCA].claims}`
            },
            {
                question: "Do I really need Insurance?",
                answer: "Yes, is the short answer. Insurance is the most affordable way to protect yourself and your loved ones against unexpected financial losses."
            },

        ],
    },
    [enUS]: {
        title: "If you were wondering...",
        faq: [
            {
                question: "How long has SmartBunny Insurance been around?",
                answer: "Our app was launched in the United States in 2020, we initially operated under the brand Goose Insurance Services which is our parent company. Since then we pivoted under the SmartBunny Insurance Services brand and offer travel insurance, life insurance, renters insurance, phone insurance, and much more."
            },
            {
                question: "Who underwrites SmartBunny insurance policies?",
                answer: ["SmartBunny Insurance has bespoke and exclusive coverages offered in partnership with various partners including but not limited to AIG, iA Financial, Lloyds of London, IMG to name a few, check our", "partner's page", "to learn more."],
                link: `/${enUS}/${routes[enUS].partners}`,
            },
            {
                question: "How do I make a claim?",
                answer: ["At SmartBunny Insurance we work with different claims administrators for each of the coverages we sell. You can readily find this information on our", "claims page", "or under the Claims section in the SmartBunny mobile app."],
                link: `/${enUS}/${routes[enUS].claims}`
            },
            {
                question: "Do I really need Insurance?",
                answer: "Yes, is the short answer. Insurance is the most affordable way to protect yourself and your loved ones against unexpected financial losses."
            },

        ],
    },
    [frCA]: {
        title: "Si vous vous posiez la question...",
        faq: [
            {
                question: "Depuis combien de temps Goose existe-t-il?",
                answer: "Nous avons conçu notre plan pour offrir la meilleure assurance voyage en 2017. Notre troupeau en a demandé d'avantage, alors nous avons agrandi notre nid. Goose propose maintenant des assurances voyage, vie, maladies graves, et bien plus encore. Nous opérons à la fois aux États-Unis et au Canada."
            },
            {
                question: "Qui assure les polices d'assurance de Goose?",
                answer: ["Goose propose des garanties sur mesure et exclusives en partenariat avec divers partenaires, notamment, sans s'y limiter, AIG, iA Financial, Lloyds of London, IMG, pour n'en citer que quelques-uns. Consultez notre", "page partenaires", "pour en savoir plus."],
                link: `/${frCA}/${routes[frCA].partners}`,
            },
            {
                question: "Comment puis-je faire une réclamation?",
                answer: ["Nous travaillons avec différents administrateurs de sinistres pour chacune des garanties que nous proposons. Vous pouvez facilement trouver ces informations sur notre", "page de réclamations", "ou dans la section Réclamations de l'application Goose."],
                link: `/${frCA}/${routes[frCA].claims}`,
            },
            {
                question: "Est-ce que j'ai vraiment besoin d'une assurance?",
                answer: "Oui, c'est la réponse courte. L'assurance est le moyen le plus abordable de vous protéger, ainsi que vos proches, contre les pertes financières inattendues."
            },

        ],
    },
} as FaqStrings;

export const lifeInsuranceFAQ = {
    [enCA]: {
        title: "Why get Life Insurance?",
        faq: [
            {
                question: "What is life insurance, and why do I need it?",
                answer:
                    "Life insurance is a financial product that provides a lump sum payment to your beneficiaries in the event of your death. It serves as a financial safety net, offering protection and support to your loved ones by helping cover expenses like mortgage, debts, and future living costs.",
            },
            {
                question: "How much life insurance coverage do I need?",
                answer:
                    "The amount of coverage you need depends on various factors such as your current financial situation, outstanding debts, future expenses, and the number of dependents. A good rule of thumb is to aim for a coverage amount that is at least 10 times your annual income.",
            },
            {
                question:
                    "What types of life insurance are available, and which is right for me?",
                answer:
                    "There are two main types of life insurance: term life and group life. Term life provides coverage for a specific term (e.g., 10, 20, or 30 years), it locks the rate in and can provide higher limits, while group life can offer guarranteed acceptance in the first 30 days of joining Goose, and the prices are set according to age bands. Neither term life insurance or group life coverage on the Goose app requires a blood test, agent assistance, or any other complex process.",
            },
            {
                question: "Can I change my life insurance coverage over time?",
                answer:
                    "In most cases the coverage amounts can only be reduced, but you may be eligible for higher amounts of coverage when buying an additional policy.",
            },
            {
                question: "How are life insurance premiums determined?",
                answer:
                    "Premiums are influenced by factors such as your age, health, lifestyle, coverage amount, and type of policy. Generally, the younger and healthier you are when you purchase a policy, the lower your premiums will be. It's advisable to lock in a policy early to secure more favourable rates.",
            },
            {
                question: "What is a beneficiary, and how do I choose one?",
                answer:
                    "A beneficiary is the person or entity who receives the death benefit if you pass away. You can choose one or multiple beneficiaries, and they can be family members, friends, or even charitable organizations. It's crucial to regularly review and update your beneficiaries to reflect any changes in your life circumstances.",
            },
            {
                question:
                    "Is there a waiting period before my life insurance coverage takes effect?",
                answer:
                    "In most cases, life insurance coverage takes effect immediately upon approval and payment of the first premium. However, it's essential to carefully review the terms of your policy, as certain situations or policy types may have specific waiting periods.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@gooseinsurance.com if you have any additional questions. "],
                link: `/${enCA}/${routes[enCA].policyWordings}`
            },
        ],
    },
    [enUS]: {
        title: "Why get Life Insurance?",
        faq: [
            {
                question: "What is life insurance, and why do I need it?",
                answer:
                    "Life insurance is a financial product that provides a lump sum payment to your beneficiaries in the event of your death. It serves as a financial safety net, offering protection and support to your loved ones by helping cover expenses like mortgage, debts, and future living costs.",
            },
            {
                question: "How much life insurance coverage do I need?",
                answer:
                    "The amount of coverage you need depends on various factors such as your current financial situation, outstanding debts, future expenses, and the number of dependents. A good rule of thumb is to aim for a coverage amount that is at least 10 times your annual income.",
            },
            {
                question: "Can I change my life insurance coverage over time?",
                answer:
                    "In most cases the coverage amounts can only be reduced, but you may be eligible for higher amounts of coverage when buying an additional policy.",
            },
            {
                question: "How are life insurance premiums determined?",
                answer:
                    "Premiums are influenced by factors such as your age, health, lifestyle, coverage amount, and type of policy. Generally, the younger and healthier you are when you purchase a policy, the lower your premiums will be. It's advisable to lock in a policy early to secure more favorable rates.",
            },
            {
                question: "What is a beneficiary, and how do I choose one?",
                answer:
                    "A beneficiary is the person or entity who receives the death benefit if you pass away. You can choose one or multiple beneficiaries, and they can be family members, friends, or even charitable organizations. It's crucial to regularly review and update your beneficiaries to reflect any changes in your life circumstances.",
            },
            {
                question:
                    "Is there a waiting period before my life insurance coverage takes effect?",
                answer:
                    "In most cases, life insurance coverage takes effect immediately upon approval and payment of the first month's premium. However, it's essential to carefully review the terms of your policy, as certain situations or policy types may have specific waiting periods. SmartBunny Term Life policy has exclusions such as suicide, acts of war or terrorism, and pre-existing medical conditions within the first 24 months of the policy.",
            },
            {
                question:
                    "Can I borrow against the cash value of a whole life insurance policy?",
                answer:
                    "No, we do not sell whole life policies and there is no cash value that can be borrowed against.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@smartbunny.com if you have any additional questions. "],
                link: `/${enUS}/${routes[enUS].policyWordings}`
            },
        ],
    },
    [frCA]: {
        title: "Pourquoi souscrire une assurance vie?",
        faq: [
            {
                question: "Qu'est-ce que l'assurance vie et pourquoi en ai-je besoin?",
                answer:
                    "L'assurance vie est un produit financier qui offre un paiement forfaitaire à vos bénéficiaires en cas de décès. Elle sert de filet de sécurité financière, offrant une protection et un soutien à vos proches en aidant à couvrir des dépenses telles que l'hypothèque, les dettes et les coûts de vie futurs.",
            },
            {
                question: "Quel montant d'assurance vie me faut-il?",
                answer:
                    "Le montant de la couverture dont vous avez besoin dépend de divers facteurs tels que votre situation financière actuelle, les dettes en cours, les dépenses futures et le nombre de personnes à charge. Un bon point de départ est de viser un montant de couverture équivalent à au moins 10 fois votre revenu annuel.",
            },
            {
                question:
                    "Quels sont les types d'assurance vie disponibles et lequel me convient le mieux?",
                answer:
                    "Il existe deux principaux types d'assurance-vie: l'assurance-vie temporaire et l'assurance-vie collective. L'assurance-vie temporaire offre une couverture pour une durée spécifique (par exemple, 10, 20 ou 30 ans), elle fixe le taux et peut offrir des limites plus élevées, tandis que l'assurance-vie collective peut offrir une acceptation garantie dans les 30 premiers jours après avoir rejoint Goose, et les prix sont déterminés selon des tranches d'âge. Ni l'assurance-vie temporaire ni la couverture d'assurance-vie collective sur l'application Goose n'exigent de test sanguin, d'assistance d'agent, ni d'aucun autre processus complexe.",
            },
            {
                question:
                    "Puis-je modifier ma couverture d'assurance vie au fil du temps?",
                answer:
                    "Dans la plupart des cas, les montants de couverture ne peuvent être que réduits, mais vous pouvez bénéficier de montants de couverture plus élevés en souscrivant une police supplémentaire",
            },
            {
                question: "Comment sont déterminées les primes d'assurance vie?",
                answer:
                    "Les primes sont influencées par des facteurs tels que votre âge, votre état de santé, votre mode de vie, le montant de la couverture et le type de police. En général, plus vous souscrivez une police tôt et êtes en bonne santé, plus vos primes seront basses. Il est conseillé de souscrire une police tôt pour garantir des tarifs plus avantageux.",
            },
            {
                question: "Qu'est-ce qu'un bénéficiaire et comment en choisir un?",
                answer:
                    "Il existe deux principaux types d'assurance vie: l'assurance vie temporaire et l'assurance vie collective. L'assurance vie temporaire offre une couverture pour une durée spécifique (par exemple, 10, 20 ou 30 ans), elle fixe le taux et peut fournir des limites plus élevées, tandis que l'assurance vie collective peut offrir une acceptation garantie au cours des 30 premiers jours suivant l'adhésion à Goose, et les tarifs sont établis en fonction des tranches d'âge. Aucune des deux n'exige de test sanguin ni de processus complexe.",
            },
            {
                question:
                    "Y a-t-il une période d'attente avant que ma couverture d'assurance vie ne soit effective?",
                answer:
                    "Dans la plupart des cas, la couverture d'assurance vie devient effective immédiatement après l'approbation et le paiement de la première prime. Cependant, il est essentiel de revoir attentivement les termes de votre police, car certaines situations ou types de polices peuvent comporter des périodes d'attente spécifiques.",
            },
            {
                question: "Où puis-je voir les détails de la couverture et les exclusions?",
                answer:
                    ["Veuillez vous référer aux", "libellés de polices", "pour la liste complète des avantages, exclusions et limitations. Vous pouvez également contacter nos agents agréés à support@gooseinsurance.com si vous avez d'autres questions."],
                link: `/${frCA}/${routes[frCA].policyWordings}`
            },
        ],
    },
} as FaqStrings;

export const vtcFAQ = {
    [enCA]: {
        title: "Why Get Visitors to Canada Insurance?",
        faq: [
            {
                question: "What is Visitors to Canada Insurance?",
                answer:
                    "Visitors to Canada Insurance provides coverage for unexpected events during your stay in Canada. It helps protect visitors from financial losses related to medical emergencies, ensuring they have access to necessary medical care without incurring high out-of-pocket expenses.",
            },
            {
                question: "What's covered?",
                answer:
                    "Visitors to Canada and Super Visa Insurance policies offer coverage for unexpected medical emergencies and related expenses while you are visiting Canada. Limitations and exclusions do apply, it is important to review the policy wording prior to purchase or contact our licensed agents to help answer any questions you may have. ",
            },
            {
                question: "How much coverage do I need for Super Visa Insurance policy?",
                answer:
                    "The Canadian government requires you to purchase at least $100,000 CAD of coverage per year for Super Visa applications. The coverage must be purchased from a Canadian insurance agency as well as must be valid for the duration of your stay. As the costs of medical services and treatment are on the rise, it is highly recommended to purchase as much coverage as you can afford. Goose Super Visa policies offer up to $1 million of coverage. ",
            },
            {
                question: "Can I pay for my Super Visa insurance policy in instalments?",
                answert: "With Goose, we offer flexible payment options when purchasing Super Visa Insurance. You can choose to pay it all up front, or over 11 payment instalments."
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@gooseinsurance.com if you have any additional questions. "],
                link: `/${enCA}/${routes[enCA].policyWordings}`
            },
            {
                question: "How can visitors download the insurance app?",
                answer:
                    "Visitors can download our insurance app by scanning the provided QR code, making it easy to access policy information and assistance services during their stay.",
            },
        ],
    },
    [frCA]: {
        title: "Pourquoi souscrire une assurance pour les visiteurs au Canada?",
        faq: [
            {
                question: "Qu'est-ce que l'assurance pour les visiteurs au Canada et pourquoi les visiteurs en ont-ils besoin?",
                answer:
                    "L'assurance pour les visiteurs au Canada offre une couverture pour les événements imprévus pendant votre séjour au Canada. Elle aide à protéger les visiteurs contre les pertes financières liées aux urgences médicales, garantissant qu'ils ont accès aux soins médicaux nécessaires sans encourir de frais élevés.",
            },
            {
                question: "Qu'est-ce qui est couvert?",
                answer: "Les polices d'assurance pour les visiteurs au Canada et les assurances Super Visa offrent une couverture pour les urgences médicales inattendues et les dépenses connexes pendant votre séjour au Canada. Des limitations et des exclusions s'appliquent; il est important de consulter les termes de la police avant l'achat ou de contacter nos agents agréés pour obtenir des réponses à vos questions."
            },
            {
                question: "Quelle est la couverture nécessaire pour une police d'assurance Super Visa?",
                answer: "Le gouvernement canadien exige que vous souscriviez une couverture d'au moins 100 000 CAD par an pour les demandes de Super Visa. La couverture doit être achetée auprès d'une agence d'assurance canadienne et doit être valide pendant toute la durée de votre séjour. Étant donné que les coûts des services médicaux et des traitements sont en augmentation, il est fortement recommandé de souscrire à la plus grande couverture que vous pouvez vous permettre. Les polices Super Visa de Goose offrent jusqu'à 1 million de dollars de couverture."
            },
            {
                question: "Puis-je payer ma police d'assurance Super Visa en plusieurs versements?",
                answer: "Avec Goose, nous offrons des options de paiement flexibles lors de l'achat de l'assurance Super Visa. Vous pouvez choisir de payer le montant total en une seule fois ou en 11 versements mensuels."
            },
            {
                question: "Où puis-je voir les détails de la couverture et les exclusions?",
                answer:
                    ["Veuillez vous référer aux", "libellés de polices", "pour la liste complète des avantages, exclusions et limitations. Vous pouvez également contacter nos agents agréés à support@gooseinsurance.com si vous avez d'autres questions."],
                link: `/${frCA}/${routes[frCA].policyWordings}`
            },
            {
                question: "Comment les visiteurs peuvent-ils télécharger l'application d'assurance?",
                answer:
                    "Les visiteurs peuvent télécharger notre application d'assurance en scannant le code QR fourni, facilitant l'accès aux informations sur la police et aux services d'assistance pendant leur séjour.",
            },
        ],
    },
};

export const superVisaInsuranceFAQ = {
    [enCA]: {
        title: "Why Get Super Visa Insurance?",
        faq: [
            {
                question: "What is Super Visa Insurance, and why is it required?",
                answer:
                    "Super Visa Insurance is specifically designed for parents and grandparents visiting Canada on a Super Visa. It's a mandatory requirement to ensure visitors have comprehensive medical coverage during their extended stay.",
            },
            {
                question: "Emergency Medical Coverage for Super Visa",
                answer:
                    "Super Visa Insurance provides coverage for unexpected medical emergencies and related expenses during the duration of the Super Visa stay in Canada.",
            },
            {
                question: "Repatriation Assistance for Super Visa",
                answer:
                    "The insurance includes repatriation coverage, addressing the costs associated with returning to the visitor's home country due to medical emergencies.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@gooseinsurance.com if you have any additional questions. "],
                link: `/${enCA}/${routes[enCA].policyWordings}`
            },
            {
                question: "How can one obtain Super Visa Insurance?",
                answer:
                    "You can download our insurance app by scanning the provided QR code, making it easy to access policy information and assistance services during their stay.",
            },
        ],
    },
    [frCA]: {
        title: "Pourquoi choisir l'assurance Super Visa?",
        faq: [
            {
                question: "Qu'est-ce que l'assurance Super Visa et pourquoi est-elle requise?",
                answer:
                    "L'assurance Super Visa est spécialement conçue pour les parents et les grands-parents visitant le Canada avec un Super Visa. C'est une exigence obligatoire pour garantir une couverture médicale complète pendant leur séjour prolongé.",
            },
            {
                question: "Couverture médicale d'urgence pour le Super Visa",
                answer:
                    "L'assurance Super Visa offre une couverture pour les urgences médicales imprévues et les dépenses connexes pendant la durée du séjour avec le Super Visa au Canada.",
            },
            {
                question: "Assistance au rapatriement pour le Super Visa",
                answer:
                    "L'assurance inclut une couverture de rapatriement, traitant des frais associés au retour dans le pays d'origine du visiteur en cas d'urgences médicales.",
            },
            {
                question: "Où puis-je voir les détails de la couverture et les exclusions?",
                answer:
                    ["Veuillez vous référer aux", "libellés de polices", "pour la liste complète des avantages, exclusions et limitations. Vous pouvez également contacter nos agents agréés à support@gooseinsurance.com si vous avez d'autres questions."],
                link: `/${frCA}/${routes[frCA].policyWordings}`
            },
            {
                question: "Comment obtenir une assurance Super Visa?",
                answer:
                    "Téléchargez l'application avec l'un des liens ci-dessus ou ci-dessous, connectez-vous à la section canadienne de l'application et vous trouverez l'assurance Super Visa dans la section voyage.",
            },
        ],
    },
};

export const travelInsuranceFAQ = {
    [enCA]: {
        title: "Why get Travel Insurance?",
        faq: [
            {
                question: "What is travel insurance, and why do I need it?",
                answer:
                    "When you travel outside of your country, your health insurance stops at the border. Travel Insurance covers the cost of unexpected, unforeseen, medical emergencies. In addition, travel insurance may cover the non-refundable portion of your trip should you have to cancel or additional costs should you need to extend your trip due to medical emergencies.",
            },
            {
                question: "What types of travel insurance plans are available?",
                answer:
                    "We offer a range of travel insurance plans to suit your needs. We offer international travel medical insurance plans when you are travelling outside of the US. We also offer plans for domestic travel within the United State, as well as the option to purchase Trip Protection to cover the cost of your travel expenses that have been pre-paid and non-refundable such as flights, accommodation, events, etc.",
            },
            {
                question: "What is single trip medical insurance?",
                answer:
                    "Single trip medical insurance is ideal for a one-time trip, providing protection for medical emergencies and related expenses for the duration of your trip.",
            },
            {
                question: "What is multi-trip medical insurance?",
                answer:
                    "Ideal for the frequent traveller or the Canadian snowbird. Multi-trip medical offers coverage for multiple trips within a year, offering continuous protection for medical emergencies. With this coverage you can take unlimited worldwide trips within the year of coverage and most often can be a cheaper alternative than buying multiple single trip policies.",
            },
            {
                question: "What is Trip Protection Insurance?",
                answer:
                    "Offering protection against covered unforeseen events should you have to cancel your trip. Covers the non-refundable portion of flights, accommodations, and other trip costs that are covered in the policy.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@gooseinsurance.com if you have any additional questions. "],
                link: `/${enCA}/${routes[enCA].policyWordings}`
            },
            {
                question: "How do I get travel insurance?",
                answer:
                    "You can download our insurance app by scanning the provided QR code, making it easy to access policy information and assistance services during their stay.",
            },
        ],
    },
    [enUS]: {
        title: "Why get Travel Insurance?",
        faq: [
            {
                question: "What is travel insurance, and why do I need it?",
                answer:
                    "When you travel outside of your state, your health insurance may stop at the border. Travel Insurance covers the cost of unexpected, unforeseen, medical emergencies. In addition, travel insurance may cover the non-refundable portion of your trip should you have to cancel or additional costs should you need to extend your trip due to medical emergencies.",
            },
            {
                question: "What types of travel insurance plans are available?",
                answer:
                    "We offer a range of travel insurance plans to suit your needs including but not limited to single-trip medical, multi-trip medical, COVID-19, trip-cancellation and interruption, interruption only, single trip medical top-ups. All of our travel medical coverage include up to $5 million of coverage, the option to add unstable pre-existing medical coverage, as well as extending your coverage if need be.",
            },
            {
                question: "Single Trip Medical Insurance",
                answer:
                    "Single trip medical insurance is ideal for a one-time trip, providing protection for medical emergencies and related expenses for the duration of your trip.",
            },
            {
                question: "Multi-Trip Medical Insurance",
                answer:
                    "Coverage for multiple trips within a year, offering continuous protection for medical emergencies.",
            },
            {
                question: "Trip Cancellation and Interruption Insurance",
                answer:
                    "Offering protection against covered unforeseen events should you have to cancel your trip. Covers the non-refundable portion of flights, accommodations, and other trip costs that are covered in the policy.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@smartbunny.com if you have any additional questions. "],
                link: `/${enUS}/${routes[enUS].policyWordings}`
            },
            {
                question: "How do I get travel insurance?",
                answer:
                    "You can download our insurance app by scanning the provided QR code, making it easy to access policy information and assistance services during their stay.",
            },
        ],
    },
    [frCA]: {
        title: "Pourquoi souscrire une assurance voyage?",
        faq: [
            {
                question: "Qu'est-ce que l'assurance voyage et pourquoi en ai-je besoin?",
                answer:
                    "Lorsque vous voyagez en dehors de votre pays, votre assurance santé s'arrête à la frontière. L'assurance voyage couvre les coûts des urgences médicales inattendues. De plus, l'assurance voyage peut couvrir la partie non remboursable de votre voyage en cas d'annulation ou les coûts supplémentaires si vous devez prolonger votre séjour en raison d'urgences médicales.",
            },
            {
                question: "Quels types de plans d'assurance voyage sont disponibles?",
                answer:
                    "Nous proposons une gamme de plans d'assurance voyage adaptés à vos besoins, comprenant, sans s'y limiter, l'assurance médicale pour voyage à voyage unique, l'assurance médicale pour voyage multiple, la COVID-19, l'annulation et l'interruption de voyage, l'interruption seule, les compléments d'assurance médicale pour voyage unique. Toutes nos couvertures médicales pour voyage incluent jusqu'à 10 millions de dollars de couverture, l'option pour ajouter une couverture pour conditions médicales préexistantes instables, ainsi que la possibilité d'étendre votre couverture si nécessaire.",
            },
            {
                question: "Assurance médicale pour voyage à voyage unique",
                answer:
                    "L'assurance médicale pour voyage à voyage unique est idéale pour un voyage ponctuel, offrant une protection pour les urgences médicales et les frais associés pendant la durée de votre voyage.",
            },
            {
                question: "Assurance médicale pour voyage multiple",
                answer:
                    "Idéale pour le voyageur fréquent ou le snowbird canadien. L'assurance médicale pour voyage multiple offre une couverture pour plusieurs voyages dans l'année, offrant une protection continue pour les urgences médicales. Avec cette couverture, vous pouvez effectuer un nombre illimité de voyages dans le monde entier pendant l'année de couverture et cela peut souvent être une alternative moins coûteuse que d'acheter plusieurs polices pour un voyage unique.",
            },
            {
                question: "Assurance annulation et interruption de voyage",
                answer:
                    "Offre une protection contre les événements imprévus couverts si vous devez annuler votre voyage. Couvre la partie non remboursable des vols, des hébergements et d'autres coûts de voyage couverts dans la police.",
            },
            {
                question: "Où puis-je voir les détails de la couverture et les exclusions?",
                answer:
                    ["Veuillez vous référer aux", "libellés de polices.", ""],
                link: `/${frCA}/${routes[frCA].policyWordings}`
            },
            {
                question: "Comment obtenir une assurance voyage?",
                answer:
                    "Téléchargez notre application en scannant le code QR fourni ci-dessus ou ci-dessous, ou en appuyant sur le bouton de téléchargement.",
            },
        ],
    },
} as FaqStrings;

export const adndFAQ = {
    [enCA]: {
        title: "Why get AD&D Coverage?",
        faq: [
            {
                question: "What is Accident Death and Dismemberment (AD&D) coverage?",
                answer:
                    "AD&D coverage provides financial protection in the event of accidental death or specific injuries resulting in dismemberment. It offers a lump sum payment, helping you and your loved ones navigate the financial challenges associated with accidents.",
            },
            {
                question: "What events are covered by AD&D?",
                answer:
                    "AD&D coverage typically includes accidental death, loss of limbs, loss of sight, and other specific injuries. The specific events covered may vary, for more details please review the policy wordings. Acts of war, terrorism, suicide, or any illegal activities are exempt.",
            },
            {
                question: "Is a medical exam required for AD&D coverage?",
                answer:
                    "No, AD&D coverage typically does not require a medical exam. This streamlined process ensures quick access to financial support in the event of covered accidents.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@gooseinsurance.com if you have any additional questions. "],
                link: `/${enCA}/${routes[enCA].policyWordings}`
            },
            {
                question: "How do I get insurance for accidental death and dismemberment (ADD)?",
                answer:
                    "To get the coverage, either scan the QR code above or click your app store button at the bottom of the page. Once you have the app, making an account is very easy and you can then purchase insurance for ADD.",
            },
        ],
    },
    [enUS]: {
        title: "Why get AD&D Coverage?",
        faq: [
            {
                question: "What events are covered by AD&D?",
                answer:
                    ["AD&D coverage typically includes accidental death, loss of limbs, loss of sight, and other specific injuries. The specific events covered may vary, for more details please review the", "policy wordings.", "Acts of war, terrorism, suicide, or any illegal activities are exempt."],
                link: `/${enUS}/${routes[enUS].policyWordings}`
            },
            {
                question: "What is Accident Death and Dismemberment (AD&D) coverage?",
                answer:
                    "AD&D coverage provides financial protection in the event of accidental death or specific injuries resulting in dismemberment. It offers a lump sum payment, helping you and your loved ones navigate the financial challenges associated with accidents.",
            },
            {
                question: "Is a medical exam required for AD&D coverage?",
                answer:
                    "No, AD&D coverage does not require a medical exam. This streamlined process ensures quick access to financial support in the event of covered accidents.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@smartbunny.com if you have any additional questions. "],
                link: `/${enUS}/${routes[enUS].policyWordings}`
            },
            {
                question: "How do I get insurance for accidental death and dismemberment (AD&D)?",
                answer:
                    "To get the coverage, either scan the QR code above or click your app store button at the bottom of the page. Once you have the app, making an account is very easy and you can then purchase insurance for AD&D.",
            },
        ],
    },
    [frCA]: {
        title: "Pourquoi souscrire une couverture décès et mutilation accidentel (D&MA)?",
        faq: [
            {
                question:
                    "Qu'est-ce que la couverture décès et mutilation accidentel (D&MA)?",
                answer:
                    "La couverture D&MA offre une protection financière en cas de décès accidentel ou de blessures spécifiques entraînant une mutilation. Elle offre un paiement forfaitaire, vous aidant, ainsi que vos proches, à surmonter les défis financiers associés aux accidents.",
            },
            {
                question: "Quels événements sont couverts par la D&MA?",
                answer:
                    "L'assurance D&MA inclut généralement le décès accidentel, la perte de membres, la perte de la vue et d'autres blessures spécifiques. Les événements spécifiquement couverts peuvent varier ; pour plus de détails, veuillez consulter les libellés de la police. Les actes de guerre, de terrorisme, de suicide ou toute activité illégale sont exclus.",
            },
            {
                question: "Un examen médical est-il requis pour la couverture Décès et mutilation accidentel?",
                answer:
                    "Non, la couverture D&MA ne nécessite généralement pas d'examen médical. Ce processus simplifié garantit un accès rapide au soutien financier en cas d'accidents couverts.",
            },
            {
                question: "Où puis-je voir les détails de la couverture et les exclusions?",
                answer:
                    ["Veuillez vous référer aux", "libellés de polices", "pour la liste complète des avantages, exclusions et limitations. Vous pouvez également contacter nos agents agréés à support@gooseinsurance.com si vous avez d'autres questions."],
                link: `/${frCA}/${routes[frCA].policyWordings}`
            },
            {
                question: "Comment obtenir une assurance contre les décès et mutilation accidentel?",
                answer:
                    "Pour obtenir la couverture, scannez le code QR ci-dessus ou cliquez sur le bouton pour votre magasin d'application en bas de la page. Une fois que vous avez l'application, créer un compte est un processus très court, et vous pouvez ensuite acheter une assurance contre les décès accidentels et les mutilations."
            },
        ],
    },
} as FaqStrings;

export const kidsInsuranceFAQ = {
    [enCA]: {
        title: "Why get Kids Insurance?",
        faq: [
            {
                question: "What is kids insurance, and why do I need it?",
                answer:
                    "Kids insurance provides coverage for medical expenses, accidents, and unexpected events involving your child. It offers financial protection and support for parents, ensuring they can provide the best care for their children, especially as more and more provincial health plans limit their coverages and treatment services. Kids up to age 27 are eligible for this coverage as long as they are attending full time school.",
            },
            {
                question: "What does kids insurance cover?",
                answer: "Kids insurance covers a range of expenses including broken glasses, dental accidents, critical illness, hospital expenses, medical equipment, emergency transportation, tutoring, and more."
            },
            {
                question: "Medical Expense Coverage",
                answer:
                    "Coverage for medical expenses, including doctor visits, prescriptions, ambulance services, and hospital stays. This coverage also offers travel insurance coverages for kids travelling outside of their home province.",
            },
            {
                question: "Critical Illness Insurance",
                answer:
                    "Up to $5,000 of coverage for specific critical illnesses, providing a lump sum payment to help cover medical costs and additional expenses.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@gooseinsurance.com if you have any additional questions. "],
                link: `/${enCA}/${routes[enCA].policyWordings}`
            },
            {
                question: "How do I get kids insurance?",
                answer:
                    "To get kids insurance, either scan the QR code above or click your app store button at the bottom of the page. Once you have the app, making an account is very easy and you can then purchase insurance for kids.",
            },
        ],
    },
    [enUS]: {
        title: "Why get Kids Insurance?",
        faq: [
            {
                question: "What is kids insurance, and why do I need it?",
                answer:
                    "Kids insurance provides coverage for medical expenses, accidents, and unexpected events involving your child. It offers financial protection and support for parents, ensuring they can provide the best care for their children, especially as more and more provincial health plans limit their coverages and treatment services. Kids up to age 27 are eligible for this coverage as long as they are attending full time school.",
            },
            {
                question: "What does kids insurance cover?",
                answer: "Kids insurance covers a range of expenses including broken glasses, dental accidents, critical illness, hospital expenses, medical equipment, emergency transportation, tutoring, and more."
            },
            {
                question: "Medical Expense Coverage",
                answer:
                    "Coverage for medical expenses, including doctor visits, prescriptions, ambulance services, and hospital stays. This coverage also offers travel insurance coverages for kids travelling outside of their home state.",
            },
            {
                question: "Critical Illness Insurance",
                answer:
                    "Coverage for specific critical illnesses, providing a lump sum payment to help cover medical costs and additional expenses.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@smartbunny.com if you have any additional questions. "],
                link: `/${enUS}/${routes[enUS].policyWordings}`
            },
            {
                question: "How do I get kids insurance?",
                answer:
                    "To get kids insurance, either scan the QR code above or click your app store button at the bottom of the page. Once you have the app, making an account is very easy and you can then purchase insurance for kids.",
            },
        ],
    },
    [frCA]: {
        title: "Pourquoi souscrire une assurance pour enfants?",
        faq: [
            {
                question: "Qu'est-ce que l'assurance pour enfants et pourquoi en ai-je besoin?",
                answer:
                    "L'assurance pour enfants couvre les frais médicaux, les accidents et les événements imprévus impliquant votre enfant. Elle offre une protection financière et un soutien aux parents, garantissant qu'ils peuvent offrir les meilleurs soins à leurs enfants, d'autant plus que de plus en plus de régimes de santé provinciaux limitent leurs couvertures et services de traitement. Les enfants jusqu'à l'âge de 27 ans sont éligibles à cette couverture tant qu'ils sont scolarisés à temps plein.",
            },
            {
                question: "Que couvre l'assurance pour enfants?",
                answer: "L'assurance pour enfants couvre divers frais, tels que la réparation de lunettes, les accidents dentaires, les maladies graves, les frais hospitaliers, le matériel médical, le transport d'urgence, les cours particuliers, et plus encore."
            },
            {
                question: "Couverture des frais médicaux",
                answer:
                    "Couverture des frais médicaux, incluant les consultations médicales, les ordonnances, les services d'ambulance et les séjours à l'hôpital. Cette couverture offre également des assurances voyage pour les enfants se déplaçant en dehors de leur province d'origine.",
            },
            {
                question: "Assurance maladies graves",
                answer:
                    "Jusqu'à 5 000 $ de couverture pour des maladies graves spécifiques, fournissant un paiement forfaitaire pour aider à couvrir les coûts médicaux et les dépenses supplémentaires.",
            },
            {
                question: "Où puis-je voir les détails de la couverture et les exclusions?",
                answer:
                    ["Veuillez vous référer aux", "libellés de polices", "pour la liste complète des avantages, exclusions et limitations. Vous pouvez également contacter nos agents agréés à support@gooseinsurance.com si vous avez d'autres questions."],
                link: `/${frCA}/${routes[frCA].policyWordings}`
            },
            {
                question: "Comment obtenir une assurance pour enfants?",
                answer:
                    "Pour obtenir une assurance pour enfants, scannez le code QR ci-dessus ou cliquez sur le bouton pour votre magasin d'application en bas de la page. Une fois que vous avez l'application, créer un compte est un processus très court, et vous pouvez ensuite acheter une assurance pour enfants."
            },
        ],
    },
} as FaqStrings;

export const incomeProtectionFAQ = {
    [enCA]: {
        title: "Why get Income Protection Insurance?",
        faq: [
            {
                question: "What is income protection insurance, and why do I need it?",
                answer:
                    "Income protection insurance provides a financial safety net by replacing a portion of your income if you are unable to work due to disability from an accident. It ensures you have financial support to cover living expenses and maintain your lifestyle during challenging times so you can focus on recovery.",
            },
            {
                question: "What types of disabilities are covered?",
                answer:
                    "Income protection insurance covers income replacement, permanent or total disability, rehabilitation, accidental death and dismemberment, modification of workplace, funeral expenses, and more.",
            },
            {
                question: "Are there any medical exams required for income protection?",
                answer:
                    "No, in the app we'll run you through a simple questionnaire and that's it!",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@gooseinsurance.com if you have any additional questions. "],
                link: `/${enCA}/${routes[enCA].policyWordings}`
            },
            {
                question: "How do I get income protection insurance?",
                answer:
                    "To get income protection, either scan the QR code above or click your app store button at the bottom of the page. Once you have the app, making an account is very easy and after a short and simple questionnaire you'll have income protection!",
            },
        ],
    },
    [enUS]: {
        title: "Why get Income Protection Insurance?",
        faq: [
            {
                question: "What is income protection insurance, and why do I need it?",
                answer:
                    "Income protection insurance provides a financial safety net by replacing a portion of your income if you are unable to work due to disability from an accident. It ensures you have financial support to cover living expenses and maintain your lifestyle during challenging times so you can focus on recovery.",
            },
            {
                question: "What types of disabilities are covered?",
                answer:
                    "Income protection insurance covers income replacement, permanent or total disability, rehabilitation, accidental death and dismemberment, modification of workplace, funeral expenses, and more.",
            },
            {
                question: "Are there any medical exams required for income protection?",
                answer:
                    "No, in the app we'll run you through a simple questionnaire and that's it!",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@smartbunny.com if you have any additional questions. "],
                link: `/${enUS}/${routes[enUS].policyWordings}`
            },
            {
                question: "How do I get income protection insurance?",
                answer:
                    "To get income protection, either scan the QR code above or click your app store button at the bottom of the page. Once you have the app, making an account is very easy and after a short and simple questionnaire you'll have income protection!",
            },
        ],
    },
    [frCA]: {
        title: "Pourquoi souscrire une assurance protection du revenu?",
        faq: [
            {
                question: "Qu'est-ce que l'assurance protection du revenu et pourquoi en ai-je besoin?",
                answer:
                    "L'assurance protection du revenu offre une sécurité financière en remplaçant une partie de votre revenu si vous êtes incapable de travailler en raison d'une invalidité causée par.",
            },
            {
                question: "Quels types d'invalidités sont couverts?",
                answer:
                    "L'assurance protection du revenu couvre le remplacement du revenu, l'invalidité permanente ou totale, la réadaptation, le décès accidentel et les mutilations, la modification du lieu de travail, les frais funéraires, et plus encore."
            },
            {
                question: "Des examens médicaux sont-ils nécessaires pour l'assurance protection du revenu?",
                answer:
                    "Non, dans l'application, nous vous poserons simplement quelques questions et c'est tout!"
            },
            {
                question: "Où puis-je voir les détails de la couverture et les exclusions?",
                answer:
                    ["Veuillez vous référer aux", "libellés de polices", "pour la liste complète des avantages, exclusions et limitations. Vous pouvez également contacter nos agents agréés à support@gooseinsurance.com si vous avez d'autres questions."],
                link: `/${frCA}/${routes[frCA].policyWordings}`
            },
            {
                question: "Comment puis-je obtenir une assurance protection du revenu?",
                answer: "Pour obtenir une assurance protection du revenu, scannez le code QR ci-dessus ou cliquez sur le bouton pour votre magasin d'application en bas de la page. Une fois que vous avez l'application, créer un compte est un processus très court et après un court questionnaire simple, vous aurez une protection du revenu!",
            },
        ],
    },
} as FaqStrings;

export const hospitalCashFAQ = {
    [enCA]: {
        title: "Why get Hospital Cash Insurance?",
        faq: [
            {
                question: "What is hospital cash insurance, and why do I need it?",
                answer:
                    "This benefit helps cover additional expenses that may arise, such as transportation, meals, or other out-of-pocket costs.",
            },
            {
                question: "Are there any medical exams required for hospital cash insurance?",
                answer:
                    "No, there are no questions asked. Everyone under age 70 is eligible.",
            },
            {
                question: "How do I make a claim?",
                answer: ["To make a claim either: Call: +1 (800) 387-4481, Email: ahclaimscan@aig.com, or visit the", "claims page."],
                link: `/${enCA}/${routes[enCA].claims}`
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@gooseinsurance.com if you have any additional questions. "],
                link: `/${enCA}/${routes[enCA].policyWordings}`
            },
            {
                question: "How do I get hospital cash insurance?",
                answer:
                    "To get hospital cash insurance, either scan the QR code above or click your app store button at the bottom of the page. Once you have the app, making an account is very easy and then you'll be free to purchase hospital cash insurance!",
            },
        ],
    },
    [enUS]: {
        title: "Why get Hospital Cash Insurance?",
        faq: [
            {
                question: "What is hospital cash insurance, and why do I need it?",
                answer:
                    "Hospital cash insurance provides a daily cash benefit during your hospitalization. This benefit helps cover additional expenses that may arise, such as transportation, meals, or other out-of-pocket costs, offering financial support and flexibility during a challenging time.",
            },
            {
                question: "Are there any medical exams required for hospital cash insurance?",
                answer:
                    "No, there are no exams and no questionnaires required, just get the app, make an account, and you're free to buy hospital cash insurance.",
            },
            {
                question: "How do I make a claim?",
                answer: "Hospital cash coverage begins after a 3-day hospital stay, with benefits extending up to 120 days. Reimbursement occurs upon discharge from the hospital."
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@smartbunny.com if you have any additional questions. "],
                link: `/${enUS}/${routes[enUS].policyWordings}`
            },
            {
                question: "How do I get hospital cash insurance?",
                answer:
                    "To get hospital cash insurance, either scan the QR code above or click your app store button at the bottom of the page. Once you have the app, making an account is very easy and then you'll be free to purchase hospital cash insurance!",
            },
        ],
    },
    [frCA]: {
        title: "Pourquoi souscrire une prestation hospitalière?",
        faq: [
            {
                question: "Qu'est-ce que c'est la couverture prestation hospitalière et pourquoi en ai-je besoin?",
                answer: "Cette prestation aide à couvrir les dépenses supplémentaires qui peuvent survenir, telles que le transport, les repas ou d'autres frais non remboursés.",
            },
            {
                question: "Des examens médicaux sont-ils nécessaires pour Prestation hospitalière?",
                answer:
                    "Non, aucune question n'est posée. Tout le monde de moins de 70 ans est admissible.",
            },
            {
                question: "Comment puis-je faire une réclamation?",
                answer: ["Pour faire une réclamation, vous pouvez soit appeler au : +1 (800) 387-4481, envoyer un e-mail à : ahclaimscan@aig.com, ou visiter la", "page des réclamations."],
                link: `/${frCA}/${routes[frCA].claims}`
            },
            {
                question: "Où puis-je voir les détails de la couverture et les exclusions?",
                answer:
                    ["Veuillez vous référer aux", "libellés de polices", "pour la liste complète des avantages, exclusions et limitations. Vous pouvez également contacter nos agents agréés à support@gooseinsurance.com si vous avez d'autres questions."],
                link: `/${frCA}/${routes[frCA].policyWordings}`
            },
            {
                question: "Comment puis-je obtenir une Prestation hospitalière?",
                answer: "Pour obtenir une Prestation hospitalière, il vous suffit de scanner le code QR ci-dessus ou de cliquer sur le bouton de votre magasin d'applications en bas de la page. Une fois l'application installée, la création d'un compte est très facile, et vous serez libre d'acheter une assurance indemnité journalière en cas d'hospitalisation!",
            },
        ],
    },
} as FaqStrings;

export const identityProtectionFAQ = {
    [enCA]: {
        title: "Why get Identity Protection Insurance?",
        faq: [
            {
                question: "What is identity protection insurance, and why do I need it?",
                answer:
                    "Identity protection insurance helps safeguard your personal information and financial security. In the event of identity theft, this coverage provides monitoring, alerts, and assistance to help you navigate the challenges of restoring your identity and covers related legal and recovery expenses.",
            },
            {
                question: "How does identity protection insurance monitor for suspicious activity?",
                answer:
                    "Identity protection insurance typically includes monitoring services that track your personal information for any suspicious activity. If unusual or potentially fraudulent activity is detected, you'll receive alerts to take prompt action and mitigate the impact.",
            },
            {
                question: "What assistance is provided in case of identity theft?",
                answer:
                    "In case of identity theft, identity protection insurance offers support in the form of dedicated assistance. This may include guidance on reporting the theft, contacting relevant authorities, and taking steps to restore your identity and financial well-being.",
            },
            {
                question: "Does identity protection insurance cover legal expenses?",
                answer:
                    "Yes, identity protection insurance often covers legal expenses associated with identity theft. This can include costs related to defending yourself against false claims, disputing fraudulent transactions, and pursuing legal action against identity thieves.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@gooseinsurance.com if you have any additional questions. "],
                link: `/${enCA}/${routes[enCA].policyWordings}`
            },
            {
                question: "How can I download the identity protection insurance app?",
                answer:
                    "You can download our identity protection insurance app by scanning the provided QR code.",
            },
        ],
    },
    [enUS]: {
        title: "Why get Identity Protection Insurance?",
        faq: [
            {
                question: "What is identity protection insurance, and why do I need it?",
                answer:
                    "Identity protection insurance helps safeguard your personal information and financial security. In the event of identity theft, this coverage provides monitoring, alerts, and assistance to help you navigate the challenges of restoring your identity and covers related legal and recovery expenses.",
            },
            {
                question: "How does identity protection insurance monitor for suspicious activity?",
                answer:
                    "Identity protection insurance typically includes monitoring services that track your personal information for any suspicious activity. If unusual or potentially fraudulent activity is detected, you'll receive alerts to take prompt action and mitigate the impact.",
            },
            {
                question: "What assistance is provided in case of identity theft?",
                answer:
                    "In case of identity theft, identity protection insurance offers support in the form of dedicated assistance. This may include guidance on reporting the theft, contacting relevant authorities, and taking steps to restore your identity and financial well-being.",
            },
            {
                question: "Does identity protection insurance cover legal expenses?",
                answer:
                    "Yes, identity protection insurance often covers legal expenses associated with identity theft. This can include costs related to defending yourself against false claims, disputing fraudulent transactions, and pursuing legal action against identity thieves.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@smartbunny.com if you have any additional questions. "],
                link: `/${enUS}/${routes[enUS].policyWordings}`
            },
            {
                question: "How can I download the identity protection insurance app?",
                answer:
                    "You can download our identity protection insurance app by scanning the provided QR code.",
            },
        ],
    },
    [frCA]: {
        title: "Pourquoi souscrire une assurance protection de l'identité?",
        faq: [
            {
                question: "Qu'est-ce que l'assurance protection de l'identité et pourquoi en ai-je besoin?",
                answer:
                    "L'assurance protection de l'identité aide à protéger vos informations personnelles et votre sécurité financière. En cas de vol d'identité, cette couverture offre une surveillance, des alertes et une assistance pour vous aider à faire face aux défis liés à la restauration de votre identité et couvre les frais juridiques et de récupération associés.",
            },
            {
                question: "Comment l'assurance protection de l'identité surveille-t-elle les activités suspectes?",
                answer:
                    "L'assurance protection de l'identité inclut généralement des services de surveillance qui suivent vos informations personnelles pour détecter toute activité suspecte. Si une activité inhabituelle ou potentiellement frauduleuse est détectée, vous recevrez des alertes pour prendre des mesures rapides et atténuer l'impact.",
            },
            {
                question: "Quelle assistance est fournie en cas de vol d'identité?",
                answer:
                    "En cas de vol d'identité, l'assurance protection de l'identité offre un soutien sous forme d'assistance dédiée. Cela peut inclure des conseils pour signaler le vol, contacter les autorités pertinentes et prendre des mesures pour restaurer votre identité et votre bien-être financier.",
            },
            {
                question: "L'assurance protection de l'identité couvre-t-elle les frais juridiques?",
                answer:
                    "Oui, l'assurance protection de l'identité couvre souvent les frais juridiques liés au vol d'identité. Cela peut inclure les coûts liés à votre défense contre de fausses accusations, la contestation de transactions frauduleuses et la poursuite d'une action en justice contre les voleurs d'identité.",
            },
            {
                question: "Où puis-je voir les détails de la couverture et les exclusions?",
                answer:
                    ["Veuillez vous référer aux", "libellés de polices", "pour la liste complète des avantages, exclusions et limitations. Vous pouvez également contacter nos agents agréés à support@gooseinsurance.com si vous avez d'autres questions."],
                link: `/${frCA}/${routes[frCA].policyWordings}`
            },
            {
                question: "Comment puis-je télécharger l'application d'assurance protection de l'identité?",
                answer:
                    "Vous pouvez télécharger notre application d'assurance protection de l'identité en scannant le code QR fourni.",
            },
        ],
    },
} as FaqStrings;

export const phoneInsuranceFAQ = {
    [enCA]: {
        title: "Why get Phone Insurance?",
        faq: [
            {
                question: "What does phone insurance cover?",
                answer:
                    "Phone insurance provides coverage for a range of incidents, including accidental damage, theft, hardware and software issues, and more. This coverage ensures that your phone is protected, and you can get assistance when unexpected events occur.",
            },
            {
                question: "How does the claims process work?",
                answer:
                    "The claims process for phone insurance is designed to be quick and easy. In the event of damage or theft, you can typically file a claim online or through the mobile app. Once your claim is approved, you can receive assistance with repairing or replacing your phone.",
            },
            {
                question: "Are there different coverage plans available?",
                answer:
                    "Yes, phone insurance often offers flexible coverage plans to suit your needs. These plans may vary in terms of coverage limits, deductibles, and additional features. It's advisable to choose a plan that aligns with your usage and protection requirements.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@gooseinsurance.com if you have any additional questions. "],
                link: `/${enCA}/${routes[enCA].policyWordings}`
            },
            {
                question: "Can I download the phone insurance app?",
                answer:
                    "Yes, you can download our phone insurance app by scanning the provided QR code. The app is a convenient way to manage your policy, file claims, and access helpful resources related to your coverage.",
            },
        ],
    },
    [enUS]: {
        title: "Why get Phone Insurance?",
        faq: [
            {
                question: "What does phone insurance cover?",
                answer:
                    "Phone insurance provides coverage for a range of incidents, including accidental damage, theft, hardware and software issues, and more. This coverage ensures that your phone is protected, and you can get assistance when unexpected events occur.",
            },
            {
                question: "How does the claims process work?",
                answer:
                    "The claims process for phone insurance is designed to be quick and easy. In the event of damage or theft, you can typically file a claim online or through the mobile app. Once your claim is approved, you can receive assistance with repairing or replacing your phone.",
            },
            {
                question: "Are there different coverage plans available?",
                answer:
                    "Yes, phone insurance often offers flexible coverage plans to suit your needs. These plans may vary in terms of coverage limits, deductibles, and additional features. It's advisable to choose a plan that aligns with your usage and protection requirements.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@smartbunny.com if you have any additional questions. "],
                link: `/${enUS}/${routes[enUS].policyWordings}`
            },
            {
                question: "Can I download the phone insurance app?",
                answer:
                    "Yes, you can download our phone insurance app by scanning the provided QR code. The app is a convenient way to manage your policy, file claims, and access helpful resources related to your coverage.",
            },
        ],
    },
    [frCA]: {
        title: "Pourquoi souscrire une assurance téléphone?",
        faq: [
            {
                question: "Qu'est-ce que couvre l'assurance téléphone?",
                answer:
                    "L'assurance téléphone couvre une gamme d'incidents, notamment les dommages accidentels, le vol, les problèmes matériels et logiciels, et plus encore. Cette couverture garantit que votre téléphone est protégé, et vous pouvez obtenir de l'aide en cas d'événements inattendus.",
            },
            {
                question: "Comment fonctionne le processus de réclamation?",
                answer:
                    "Le processus de réclamation pour l'assurance téléphone est conçu pour être rapide et facile. En cas de dommages ou de vol, vous pouvez généralement déposer une réclamation en ligne ou via l'application mobile. Une fois votre réclamation approuvée, vous pouvez recevoir de l'aide pour réparer ou remplacer votre téléphone.",
            },
            {
                question: "Y a-t-il différents plans de couverture disponibles?",
                answer:
                    "Oui, l'assurance téléphone propose souvent des plans de couverture flexibles pour répondre à vos besoins. Ces plans peuvent varier en termes de limites de couverture, de franchises et de fonctionnalités supplémentaires. Il est conseillé de choisir un plan qui correspond à votre utilisation et à vos besoins de protection.",
            },
            {
                question: "Où puis-je voir les détails de la couverture et les exclusions?",
                answer:
                    ["Veuillez vous référer aux", "libellés de polices", "pour la liste complète des avantages, exclusions et limitations. Vous pouvez également contacter nos agents agréés à support@gooseinsurance.com si vous avez d'autres questions."],
                link: `/${frCA}/${routes[frCA].policyWordings}`
            },
            {
                question: "Puis-je télécharger l'application d'assurance téléphone?",
                answer:
                    "Oui, vous pouvez télécharger notre application d'assurance téléphone en scannant le code QR fourni. L'application est un moyen pratique de gérer votre police, déposer des réclamations et accéder à des ressources utiles liées à votre couverture.",
            },
        ],
    },
} as FaqStrings;

export const criticalIllnessFAQ = {
    [enCA]: {
        title: "Why get Critical Illness Coverage?",
        faq: [
            {
                question: "What is critical illness coverage?",
                answer:
                    "Critical illness coverage provides financial support upon the diagnosis of a covered critical illness. It offers a lump sum payment, allowing you to focus on recovery without the added stress of financial burdens.",
            },
            {
                question: "What critical illnesses are covered?",
                answer:
                    ["Our critical illness coverage includes a range of illnesses, such as cancer, heart attack, stroke, and more. The specific illnesses covered may vary, so it's essential to review the", "policy wordings", "for a comprehensive list of the 25 conditions covered."],
                link: `/${enCA}/${routes[enCA].policyWordings}`
            },
            {
                question: "Can I customize my critical illness coverage?",
                answer:
                    "Yes, we offer flexible coverage plans, allowing you to tailor your critical illness coverage to meet your specific needs. Whether you're looking for comprehensive protection or specific illness coverage, we have options for you.",
            },
            {
                question: "How do I get critical illness coverage?",
                answer:
                    "To get critical illness coverage, either scan the QR code above or click your app store button at the bottom of the page. Once you have the app, making an account is very easy and then we'll simply run you through a short questionnaire.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@gooseinsurance.com if you have any additional questions. "],
                link: `/${enCA}/${routes[enCA].policyWordings}`
            },
            {
                question: "What is excluded?",
                answer: "Pre-existing conditions are excluded for the first 24 months of coverage."
            },
        ],
    },
    [enUS]: {
        title: "Why get Critical Illness Coverage?",
        faq: [
            {
                question: "What is critical illness coverage?",
                answer:
                    "Critical illness coverage provides financial support upon the diagnosis of a covered critical illness. It offers a lump sum payment, allowing you to focus on recovery without the added stress of financial burdens.",
            },
            {
                question: "What critical illnesses are covered?",
                answer:
                    "Our critical illness coverage includes a range of illnesses, such as cancer, heart attack, stroke, and more. The specific illnesses covered may vary, so it's essential to review the policy wordings for a comprehensive list.",
            },
            {
                question: "Can I customize my critical illness coverage?",
                answer:
                    "Yes, we offer flexible coverage plans, allowing you to tailor your critical illness coverage to meet your specific needs. Whether you're looking for comprehensive protection or specific illness coverage, we have options for you.",
            },
            {
                question: "How do I get critical illness coverage?",
                answer:
                    "To get critical illness coverage, either scan the QR code above or click your app store button at the bottom of the page. Once you have the app, making an account is very easy and then we'll simply run you through a short questionnaire.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@smartbunny.com if you have any additional questions. "],
                link: `/${enUS}/${routes[enUS].policyWordings}`
            },
            {
                question: "What is excluded?",
                answer: "Pre-existing conditions are excluded for the first 24 months of coverage."
            },
        ],
    },
    [frCA]: {
        title: "Pourquoi souscrire une couverture contre les maladies graves?",
        faq: [
            {
                question: "Qu'est-ce que la couverture contre les maladies graves?",
                answer:
                    "La couverture contre les maladies graves offre un soutien financier lors du diagnostic d'une maladie grave couverte. Elle offre un paiement forfaitaire, vous permettant de vous concentrer sur votre rétablissement sans le stress financier supplémentaire.",
            },
            {
                question: "Quelles maladies graves sont couvertes?",
                answer: ["Notre couverture pour maladies graves inclut une gamme de maladies telles que le cancer, l'infarctus, l'accident vasculaire cérébral et plus encore. Les maladies spécifiquement couvertes peuvent varier, il est donc essentiel de consulter les", "libellés de polices", "pour une liste complète des 25 conditions couvertes."],
                link: `/${frCA}/${routes[frCA].policyWordings}`
            },
            {
                question: "Puis-je personnaliser ma couverture contre les maladies graves?",
                answer:
                    "Oui, nous proposons des plans de couverture flexibles, vous permettant d'ajuster votre couverture contre les maladies graves selon vos besoins spécifiques. Que vous recherchiez une protection complète ou une couverture spécifique contre certaines maladies, nous avons des options pour vous.",
            },
            {
                question: "Comment obtenir une couverture en cas de maladies graves?",
                answer: "Pour obtenir une couverture en cas de maladies graves, scannez le code QR ci-dessus ou cliquez sur le bouton de votre magasin d'applications en bas de la page. Une fois l'application installée, la création d'un compte est très facile, et nous vous guiderons simplement à travers un court questionnaire."
            },
            {
                question: "Où puis-je voir les détails de la couverture et les exclusions?",
                answer:
                    ["Veuillez vous référer aux", "libellés de polices", "pour la liste complète des avantages, exclusions et limitations. Vous pouvez également contacter nos agents agréés à support@gooseinsurance.com si vous avez d'autres questions."],
                link: `/${frCA}/${routes[frCA].policyWordings}`
            },
            {
                question: "Qu'est-ce qui est exclu?",
                answer: "Les conditions préexistantes sont exclues pendant les premiers 24 mois de la couverture."
            },
        ],
    },
} as FaqStrings;

export const rentersInsuranceFAQ = {
    [enCA]: {
        title: "Why get Renters Insurance?",
        faq: [
            {
                question: "What is Renters Insurance?",
                answer:
                    "Renters insurance provides financial protection for your personal belongings and personal liability. It covers damage to your property, theft, and personal liability issues, offering peace of mind in your rental home.",
            },
            {
                question: "What does Renters Insurance cover?",
                answer:
                    "Renters insurance typically covers personal belongings, financial protection for damage or theft, and personal liability. The specific coverages may vary, so it's important to review the policy wordings for a comprehensive list.",
            },
            {
                question: "Can I customize my Renters Insurance coverage?",
                answer:
                    "Yes, we offer flexible coverage options, allowing you to tailor your renter's insurance to meet your specific needs. You can choose the amount of content coverage you can need, as well as add optional coverages like bed bug, pet damage, or water backup damage to your policy. Some landlords and property management companies may also require to have these optional coverages. It is always a good idea to check with your landlord for coverage requirements before buying.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@gooseinsurance.com if you have any additional questions. "],
                link: `/${enCA}/${routes[enCA].policyWordings}`
            },
            {
                question: "How can I download the Renters Insurance app?",
                answer:
                    "You can download our Renters Insurance app by scanning the provided QR code. The app is a convenient tool for managing your policy, accessing resources, and staying informed about your coverage.",
            },
        ],
    },
    [enUS]: {
        title: "Why get Renters Insurance?",
        faq: [
            {
                question: "What is Renters Insurance?",
                answer:
                    "Renters insurance provides financial protection for your personal belongings and personal liability. It covers damage to your property, theft, and personal liability issues, offering peace of mind in your rental home.",
            },
            {
                question: "What does Renters Insurance cover?",
                answer:
                    "Renters insurance typically covers personal belongings, financial protection for damage or theft, and personal liability. The specific coverages may vary, so it's important to review the policy wordings for a comprehensive list.",
            },
            {
                question: "Is a medical exam required for Renters Insurance?",
                answer:
                    "No, renters insurance typically does not require a medical exam. This simplified process ensures quick access to financial support in case of covered events.",
            },
            {
                question: "Can I customize my Renters Insurance coverage?",
                answer:
                    "Yes, we offer flexible coverage options, allowing you to tailor your renters insurance to meet your specific needs. Whether you're looking for comprehensive protection or coverage for specific events, we have options for you.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@smartbunny.com if you have any additional questions. "],
                link: `/${enUS}/${routes[enUS].policyWordings}`
            },
            {
                question: "How can I download the Renters Insurance app?",
                answer:
                    "You can download our Renters Insurance app by scanning the provided QR code. The app is a convenient tool for managing your policy, accessing resources, and staying informed about your coverage.",
            },
        ],
    },
    [frCA]: {
        title: "Pourquoi souscrire une assurance locataire?",
        faq: [
            {
                question:
                    "Qu'est-ce que l'assurance locataire?",
                answer:
                    "L'assurance locataire offre une protection financière pour vos biens personnels et votre responsabilité personnelle. Elle couvre les dommages à votre propriété louée, le vol et les problèmes de responsabilité personnelle, offrant une tranquillité d'esprit dans votre domicile locatif.",
            },
            {
                question: "Que couvre l'assurance locataire?",
                answer:
                    "L'assurance locataire couvre généralement les biens personnels, la protection financière en cas de dommages ou de vol, et la responsabilité personnelle. Les couvertures spécifiques peuvent varier, il est donc important de consulter les libellés de polices pour une liste complète.",
            },
            {
                question: "Un examen médical est-il requis pour l'assurance locataire?",
                answer:
                    "Non, l'assurance locataire ne nécessite généralement pas d'examen médical. Ce processus simplifié garantit un accès rapide au soutien financier en cas d'événements couverts.",
            },
            {
                question: "Puis-je personnaliser ma couverture d'assurance locataire?",
                answer:
                    "Oui, nous proposons des options de couverture flexibles, vous permettant d'ajuster votre assurance locataire selon vos besoins spécifiques. Que vous recherchiez une protection complète ou une couverture pour des événements spécifiques, nous avons des options pour vous.",
            },
            {
                question: "Où puis-je voir les détails de la couverture et les exclusions?",
                answer:
                    ["Veuillez vous référer aux", "libellés de polices", "pour la liste complète des avantages, exclusions et limitations. Vous pouvez également contacter nos agents agréés à support@gooseinsurance.com si vous avez d'autres questions."],
                link: `/${frCA}/${routes[frCA].policyWordings}`
            },
            {
                question:
                    "Comment puis-je télécharger l'application d'assurance locataire?",
                answer:
                    "Vous pouvez télécharger notre application d'assurance locataire en scannant le code QR fourni. L'application est un outil pratique pour gérer votre police, accéder à des ressources et rester informé de votre couverture.",
            },
        ],
    },
} as FaqStrings;

export const finalExpenseInsuranceFAQ = {
    [enCA]: {
        title: "Why get Final Expenses Insurance?",
        faq: [
            {
                question: "What is final expenses insurance, and why do I need it?",
                answer:
                    "Final expenses insurance is a financial product that provides a lump sum payment to your beneficiaries to cover end-of-life expenses, including funeral costs and outstanding debts. It serves as a financial safety net, offering protection and support to your loved ones during challenging times.",
            },
            {
                question: "How does final expenses insurance differ from other types of life insurance?",
                answer:
                    "Final expenses insurance is specifically designed to cover the costs associated with funerals, outstanding debts, and other end-of-life expenses. Unlike traditional life insurance, which may provide broader coverage, final expenses insurance focuses on the specific needs associated with your passing.",
            },
            {
                question:
                    "How much final expenses insurance coverage do I need?",
                answer:
                    "The amount of coverage you need depends on factors such as funeral costs, outstanding debts, and other anticipated expenses. A good practice is to estimate the total financial needs associated with your final expenses and select coverage accordingly.",
            },
            {
                question: "Can I change my final expenses insurance coverage over time?",
                answer:
                    "Yes, most final expenses insurance policies offer flexibility. You can typically adjust your coverage amount or review your beneficiaries. It's essential to discuss any changes with your insurance provider to ensure your coverage aligns with your evolving needs.",
            },
            {
                question: "How are final expenses insurance premiums determined?",
                answer:
                    "Premiums are influenced by factors such as your age, health, coverage amount, and type of policy. Securing final expenses insurance early may result in more favorable premiums. It's advisable to lock in a policy early to ensure financial protection during challenging times.",
            },
            {
                question: "What is a beneficiary, and how do I choose one?",
                answer:
                    "A beneficiary is the person or entity who receives the death benefit if you pass away. You can choose one or multiple beneficiaries, and they can be family members, friends, or even charitable organizations. Regularly review and update your beneficiaries to reflect changes in your life circumstances.",
            },
            {
                question:
                    "Is there a waiting period before my final expenses insurance coverage takes effect?",
                answer:
                    "In most cases, final expenses insurance coverage takes effect immediately upon approval and payment of the first premium. However, it's essential to carefully review the terms of your policy, as certain situations or policy types may have specific waiting periods.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@gooseinsurance.com if you have any additional questions. "],
                link: `/${enCA}/${routes[enCA].policyWordings}`
            },
            {
                question:
                    "Can I borrow against the cash value of a final expenses insurance policy?",
                answer:
                    "Final expenses insurance policies may not accumulate cash value in the same way as whole life policies. Therefore, borrowing against the cash value may not be applicable. It's recommended to consult with your insurance advisor for specific details about your policy.",
            },
        ],
    },
    [enUS]: {
        title: "Why get Final Expenses Insurance?",
        faq: [
            {
                question: "What is final expenses insurance, and why do I need it?",
                answer:
                    "Final expenses insurance is a financial product that provides a lump sum payment to your beneficiaries to cover end-of-life expenses, including funeral costs and outstanding debts. It serves as a financial safety net, offering protection and support to your loved ones during challenging times.",
            },
            {
                question: "How does final expenses insurance differ from other types of life insurance?",
                answer:
                    "Final expenses insurance is specifically designed to cover the costs associated with funerals, outstanding debts, and other end-of-life expenses. Unlike traditional life insurance, which may provide broader coverage, final expenses insurance focuses on the specific needs associated with your passing.",
            },
            {
                question:
                    "How much final expenses insurance coverage do I need?",
                answer:
                    "The amount of coverage you need depends on factors such as funeral costs, outstanding debts, and other anticipated expenses. A good practice is to estimate the total financial needs associated with your final expenses and select coverage accordingly.",
            },
            {
                question: "Can I change my final expenses insurance coverage over time?",
                answer:
                    "Yes, most final expenses insurance policies offer flexibility. You can typically adjust your coverage amount or review your beneficiaries. It's essential to discuss any changes with your insurance provider to ensure your coverage aligns with your evolving needs.",
            },
            {
                question: "How are final expenses insurance premiums determined?",
                answer:
                    "Premiums are influenced by factors such as your age, health, coverage amount, and type of policy. Securing final expenses insurance early may result in more favorable premiums. It's advisable to lock in a policy early to ensure financial protection during challenging times.",
            },
            {
                question: "What is a beneficiary, and how do I choose one?",
                answer:
                    "A beneficiary is the person or entity who receives the death benefit if you pass away. You can choose one or multiple beneficiaries, and they can be family members, friends, or even charitable organizations. Regularly review and update your beneficiaries to reflect changes in your life circumstances.",
            },
            {
                question:
                    "Is there a waiting period before my final expenses insurance coverage takes effect?",
                answer:
                    "In most cases, final expenses insurance coverage takes effect immediately upon approval and payment of the first premium. However, it's essential to carefully review the terms of your policy, as certain situations or policy types may have specific waiting periods.",
            },
            {
                question: "Where do I see coverage details and exclusions?",
                answer:
                    ["Please refer to the", "policy wordings", "for the full list of benefits, exclusions, and limitations. You can also contact our licensed agents at support@smartbunny.com if you have any additional questions. "],
                link: `/${enUS}/${routes[enUS].policyWordings}`
            },
            {
                question:
                    "Can I borrow against the cash value of a final expenses insurance policy?",
                answer:
                    "Final expenses insurance policies may not accumulate cash value in the same way as whole life policies. Therefore, borrowing against the cash value may not be applicable. It's recommended to consult with your insurance advisor for specific details about your policy.",
            },
        ],
    },
    [frCA]: {
        title: "Pourquoi souscrire une assurance frais funéraires?",
        faq: [
            {
                question: "Qu'est-ce que l'assurance frais funéraires et pourquoi en ai-je besoin?",
                answer:
                    "L'assurance frais funéraires est un produit financier qui offre un paiement forfaitaire à vos bénéficiaires pour couvrir les dépenses liées à la fin de vie, notamment les frais funéraires et les dettes en cours. Elle sert de filet de sécurité financière, offrant une protection et un soutien à vos proches en période difficile.",
            },
            {
                question: "En quoi l'assurance frais funéraires diffère-t-elle des autres types d'assurance vie?",
                answer:
                    "L'assurance frais funéraires est spécifiquement conçue pour couvrir les coûts associés aux funérailles, aux dettes en cours et à d'autres dépenses de fin de vie. Contrairement à l'assurance vie traditionnelle, qui peut offrir une couverture plus large, l'assurance frais funéraires se concentre sur les besoins spécifiques associés à votre décès.",
            },
            {
                question:
                    "De quel montant de couverture d'assurance frais funéraires ai-je besoin?",
                answer:
                    "Le montant de la couverture dont vous avez besoin dépend de facteurs tels que les coûts funéraires, les dettes en cours et d'autres dépenses anticipées. Une bonne pratique consiste à estimer les besoins financiers totaux associés à vos frais funéraires et à sélectionner une couverture en conséquence.",
            },
            {
                question: "Puis-je modifier ma couverture d'assurance frais funéraires au fil du temps?",
                answer:
                    "Oui, la plupart des polices d'assurance frais funéraires offrent de la flexibilité. Vous pouvez généralement ajuster le montant de votre couverture ou revoir vos bénéficiaires. Il est essentiel de discuter de tout changement avec votre fournisseur d'assurance pour vous assurer que votre couverture correspond à vos besoins évolutifs.",
            },
            {
                question: "Comment sont déterminées les primes d'assurance frais funéraires?",
                answer:
                    "Les primes sont influencées par des facteurs tels que votre âge, votre état de santé, le montant de la couverture et le type de police. Souscrire une assurance frais funéraires tôt peut entraîner des primes plus favorables. Il est conseillé de souscrire une police tôt pour garantir une protection financière en période difficile.",
            },
            {
                question: "Qu'est-ce qu'un bénéficiaire et comment en choisir un?",
                answer:
                    "Un bénéficiaire est la personne ou l'entité qui recevra le capital-décès en cas de décès. Vous pouvez choisir un ou plusieurs bénéficiaires, qui peuvent être des membres de la famille, des amis ou même des organisations caritatives. Il est essentiel de revoir et de mettre à jour régulièrement vos bénéficiaires pour refléter tout changement dans votre situation personnelle.",
            },
            {
                question: "Où puis-je voir les détails de la couverture et les exclusions?",
                answer:
                    ["Veuillez vous référer aux", "libellés de polices", "pour la liste complète des avantages, exclusions et limitations. Vous pouvez également contacter nos agents agréés à support@gooseinsurance.com si vous avez d'autres questions."],
                link: `/${frCA}/${routes[frCA].policyWordings}`
            },
            {
                question:
                    "Y a-t-il une période d'attente avant que ma couverture d'assurance frais funéraires ne soit effective?",
                answer:
                    "Dans la plupart des cas, la couverture d'assurance frais funéraires devient effective immédiatement après l'approbation et le paiement de la première prime. Cependant, il est essentiel de revoir attentivement les termes de votre police, car certaines situations ou types de polices peuvent comporter des périodes d'attente spécifiques.",
            },
        ],
    },
} as FaqStrings;
