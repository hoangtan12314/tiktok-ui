import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '@/assets/images';

const cx = classNames.bind(styles);
console.log(images.logo)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok"/>
                </div>

                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false}/>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    <FontAwesomeIcon icon={faSpinner} className={cx('loading')}/>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>

                <div className={cx('action')}>
                    <h2>Action</h2>
                </div>
            </div>
        </header>
    );
}

export default Header;
