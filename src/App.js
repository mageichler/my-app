import './App.css';
import Radio from './components/radio';
import Hero from './components/hero';
import ThemeContext from './context/theme-context';
import {useState} from 'react';

function App() {
    const [dark, setDark] = useState(true);
    const changeTheme = value => setDark(value);

    return (
        <ThemeContext.Provider value={{dark, changeTheme}}>
            <div className={dark ? 'App dark' : 'App pink'}>
                <header className="App-header">
                    <h3>I am a header of two:</h3>
                    <Radio />
                    <Hero />
                </header>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
