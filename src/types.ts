export type ProductLine = "LIFE_INSURANCE" | "TRAVEL_INSURANCE" | "PROPERTY_INSURANCE";
export type ProviderID =
    | "TEACHERS_LIFE"
    | "IA"
    | "MSH_KIDS_CANADA"
    | "AIG_CANADA"
    | "AIG_USA"
    | "TUGO"
    | "MSH_CANADA"
    | "LLOYDS_VTC"
    | "LLOYDS_SUPER_VISA"
    | "OCCIDENTAL_LIFE"
    | "OCCIDENTAL_FINAL_EXPENSE"
    | "IMG"
    | "MSH_USA"
    | "MSI"
    | "LIKEWIZE_PHONE";
export type ProductGroup =
    | "term_life"
    | "add"
    | "ci"
    | "kids"
    | "life"
    | "income_protection"
    | "hospital_cash"
    | "single_trip"
    | "multi_trip"
    | "pandemic"
    | "single_trip_cancellation_interruption"
    | "single_trip_interruption"
    | "visitors_to_canada"
    | "final_expense"
    | "super_visa"
    | "international"
    | "domestic"
    | "renter"
    | "phone";

export type ProductName = "Life Insurance" | "Travel Insurance" | "AD&D Insurance" |
    "Kids Insurance" | "Income Protection" | "Hospital Cash" | "Critical Illness" |
    "Renters Insurance" | "Final Expense" | "Phone Insurance";

export type ProductGridList = Array<{
    image: ImageMetadata;
    name: ProductName;
    path: string;
    tagLine?: string;
}>;