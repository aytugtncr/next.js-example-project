import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Anasayfa</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Hakkımda</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
