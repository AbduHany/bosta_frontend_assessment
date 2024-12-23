import { Cairo, Poppins } from "next/font/google";

// Exporting Google's Cairo font
const cairo = Cairo({
    variable: "--font-cairo",
    subsets: ["latin"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export { cairo, poppins };