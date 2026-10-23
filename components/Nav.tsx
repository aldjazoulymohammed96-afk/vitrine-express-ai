import Link from 'next/link';import Brand from './Brand';
export default function Nav(){return <nav className="nav"><Brand/><div className="navlinks"><a href="/#fonctionnalites">Fonctionnalités</a><a href="/#comment-ca-marche">Comment ça marche</a><Link className="btn" href="/studio">Essayer le studio <span aria-hidden>→</span></Link></div></nav>}
