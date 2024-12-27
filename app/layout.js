import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href="/">홈</Link>
          <Link href="/list">리스트</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
