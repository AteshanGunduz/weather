
import '../styles/globals.css'


export const metadata = {
  title: 'Weather App',
  description: 'Weather App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
