import Link from 'next/link';
import Brand from './Brand';

export default function Nav() {
  return (
    <nav className="nav">
      <Brand />
      <div className="navlinks">
        <Link href="/#fonctionnalites">Fonctionnalités</Link>
        <Link href="/#comment-ca-marche">Comment ça marche</Link>
        <Link className="btn" href="/studio">
          Essayer le studio <span aria-hidden>→</span>
        </Link>
      </div>
    </nav>
  );
}
