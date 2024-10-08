import '../assets/main.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export default function RootLayout({ children }) {
  return (
    <html lang='ja' style={{ 'fontSize': '14px', 'background-color': '#10172A' }} >
      <body>{children}</body>
    </html>
  )
}