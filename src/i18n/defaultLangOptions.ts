// Helper for the LanguageSelect component
export const languages = [
    {
        name: "English",
        value: "en",
    },
    {
        name: "Français",
        value: "fr",
    }
] as const;

// TypeScript - optional
export type Lang = (typeof languages)[number]["value"]