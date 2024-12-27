import Link from "next/link";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <p>현대카드 무이자 이벤트 중</p>
        {children}
      </body>
    </html>
  );
}
