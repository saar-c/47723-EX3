import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="container">
        {children}
      </main>
      <Footer />
    </div>
  )
}