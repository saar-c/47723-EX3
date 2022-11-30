import Link from "next/link";

export default function Header() {
  return (
    <div id="header">
      <div className="container">
        <div className="row header-items">
          <div className="item header-logo">
            <div className="content">
              <Link href="/">Jerusalem Weather</Link>
            </div>
          </div>
          <div className="item header-menu">
            <div className="content">
              <ul>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
