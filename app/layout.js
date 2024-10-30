import MainLayout from "../components/MainLayout";
import "./globals.css";

export const metadata = {
  title: "Siemens Centre",
  description: "This is a website for the DeKUT Siemens Centre",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
