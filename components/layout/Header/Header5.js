import Link from 'next/link';
import * as Icon from 'react-feather';
import Logo from './Logo';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

export default function Header5({ navColor, logo, scroll, navToggled, navHandle }) {
    return (
        <>
            <header className={`header js-header ${scroll ? "is-sticky" : ""}`}>
                <div className="header__bar js-header-bar">
                    <div className="row justify-between items-center">
                        <div className="col-2">
                            <div className="d-flex items-center">
                                <Logo logo={logo} />
                                <div className="ml-48">
                                    <Menu navColor={navColor} />
                                    <MenuMobile navToggled={navToggled} />
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="header__right">
                                <div className="md:d-none">
                                    <Link href="/login" className="button -sm -accent text-white rounded-8">Start
                                        Project</Link>
                                </div>
                                <div className="header__menu justify-center items-center relative d-none md:d-flex" onClick={navHandle}>
                                    <button type="button" className={`d-flex items-center justify-center js-nav-open ${navToggled ? "pointer-events-none opac-0" : "opac-1"}`} onClick={navHandle}>
                                        <Icon.Menu className="text-black size-32 str-width-1"/>
                                    </button>
                                    <button type="button"
                                        className={`d-flex items-center justify-center absolute-y-center right-0  js-nav-close ${navToggled ? "pointer-events-none opac-1" : "opac-0"}`}>
                                        Close
                                        <Icon.X className="text-black size-32 str-width-1 ml-4"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};