import { useNavigate, useLocation } from "react-router-dom";

export const Menu = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const items = [
        { label: "Home", path: "/" },
        { label: "Progile", path: "/profile" },
        { label: "Event", path: "/event" },
    ];

    return (
        <nav className="menu">
            <ul style={{ display: "flex", gap: 16, listStyle: "none", padding: 0 }}>
                {items.map((item) => (
                    <li
                        key={item.path}
                        style={{
                            cursor: "pointer",
                            fontWeight: location.pathname === item.path ? "bold" : "normal",
                        }}
                        onClick={() => navigate(item.path)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
};