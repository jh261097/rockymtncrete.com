export const metadata = {
  title: 'Rocky Mountain Crete LLC',
  description: 'Concrete services across Colorado'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
