import Logo from "../partials/Logo";
import LoginSide from "../partials/TheHeader/LoginSide";
import SearchArea from "../partials/TheHeader/SearchArea";

function TheHeader() {
    return ( 
        <header className="sm:border-b">
            <section className="sm:h-20 w-full flex justify-between items-center">
                {/* logo */}
                <div className="sm:block hidden">
                    <Logo />
                </div>
                <SearchArea />
                <LoginSide />
            </section>
        </header>
     );
}

export default TheHeader;