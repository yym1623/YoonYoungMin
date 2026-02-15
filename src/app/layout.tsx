import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '@/app/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://young-min.netlify.app'),
  title: '윤영민 - 포트폴리오',
  description:
    'FrontEnd를 깊이 있게 다지고 싶은 주니어 개발자. FrontEnd · Product · Growth를 추구하며, 생각을 인터랙션으로 풀어내는 FrontEnd Developer입니다.',
  keywords: 'FrontEnd Developer, Vue.js, TypeScript, 윤영민, 포트폴리오',
  icons: { icon: '/portfolio-mark.svg' },
  openGraph: {
    type: 'website',
    url: 'https://young-min.netlify.app/',
    title: '윤영민 - 포트폴리오',
    description:
      'FrontEnd를 깊이 있게 다지고 싶은 주니어 개발자. FrontEnd · Product · Growth를 추구하며, 생각을 인터랙션으로 풀어내는 FrontEnd Developer입니다.',
    images: [{ url: '/myimg.png', width: 1200, height: 630 }],
    locale: 'ko_KR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={montserrat.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
