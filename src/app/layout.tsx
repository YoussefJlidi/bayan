import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mawrid | Moteur d'Exegese Coranique",
  description:
    "Analyse linguistique et exegetique du Coran. 9 sources de tafsir croisees, morphologie, rhetorique arabe, tanzil.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
