import Logo from "../../assets/svgs/silly.svg";

export const Nav: React.FC = () => (
    <nav className="flex justify-between items-center my-4 container">
        <a href="/">
            <img src={Logo.src} style={{height : 100 , width : 80 }} className="w-20" />
        </a>
        <ul className="flex">
            <li>
                <a href="/blog" className="text-blue-600 mr-2 px-2 py-1 rounded-md">
                    Blog
                </a>
            </li>
            <li>
                <a href="/work" className="text-blue-700 mr-2 px-2 py-1 rounded-md">Work</a>
            </li>
        </ul>
    </nav>
);
