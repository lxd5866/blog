import Link from 'next/link';

export default function Logo({ logo }) {
    return (
        <>
            <div className="header__logo">
                <Link className="base-logo" href="/">
                    <img
                        className="base-logo-first"
                        src={`/img/general/${logo ? logo : "logo"}.svg`}
                        alt="logo"
                    />
                    <img
                        className="base-logo-second"
                        src="/img/general/logo-dark.svg"
                        alt="logo"
                    />
                </Link>
                <Link className="menu-logo" href="/">
                    <img src="/img/general/logo-dark.svg" alt="logo" />
                </Link>
            </div>
        </>
    )
}