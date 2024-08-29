import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


const ToggleTheme = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <div color="red" >
            <button onClick={() => toggleTheme()}>Switch Theme</button>
        </div>
    );
}

export default ToggleTheme;