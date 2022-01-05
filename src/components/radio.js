import happyUnicorn from '../img/002-unicorn.png';
import coolUnicorn from '../img/003-unicorn-1.png';
import {ThemeContext} from '../context/theme-context';
import {useContext} from 'react';

const Radio = () => {
    const { changeTheme } = useContext(ThemeContext);

    return (
        <div>
            <img src={happyUnicorn} alt={'happy'} className={'clickable'} onClick={() => changeTheme(false)}/>
            <img src={coolUnicorn} alt={'cool'} className={'clickable'} onClick={() => changeTheme(true)}/>
        </div>
    )
}

export default Radio;
