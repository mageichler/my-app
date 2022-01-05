import happyUnicorn from '../img/002-unicorn.png';
import coolUnicorn from '../img/003-unicorn-1.png';
import {useContext} from 'react';
import {ThemeContext} from '../context/theme-context';

const Hero = () => {
    const { dark } = useContext(ThemeContext);

    return (
        <>
            <h2>Theme {dark ? 'dark' : 'pink'}</h2>
            <img src={dark ? coolUnicorn : happyUnicorn} alt='unicorn' />
        </>);
}

export default Hero;