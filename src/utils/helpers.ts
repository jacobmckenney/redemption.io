export const capitalize = (s: string) => (s && s[0] && s[0].toUpperCase() + s.slice(1)) || "";
export const loggedIn = (id: string) => id !== '';