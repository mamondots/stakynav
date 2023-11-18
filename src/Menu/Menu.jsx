import { useEffect } from "react";
import { useState } from "react";
import './Menu.css'

const Menu = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [changeColor, setChangeColor] = useState()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 90) setChangeColor(true);
            else setChangeColor(false);
        })
    }, [])
    return (
        <div>
            <div className="top">
                 <h2>top</h2>
            </div>
            <nav className={isSticky ? 'sticky' : ''}>
                <div className={`nav-bar bg-[red] ${changeColor ? "bg-[#1E1624]" : ""}`}>
                     <h2 className="text-[#fff0]">hi</h2>
                </div>
            </nav>
        </div>
    );
};

export default Menu;