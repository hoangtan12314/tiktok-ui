import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (<div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/856d6e040a2b3181553f302cdef7f5f5~c5_300x300.webp?x-expires=1670317200&x-signature=srTjvX0GoIeXLKMcUZwy3K0KCe0%3D" alt=""/>
        <div className={cx('info')}>
            <h4 className={cx('username')}>
                <span>nguyenvana</span>
                <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}/>
            </h4>
            <span className={cx('name')}>Nguyen Van A</span>
        </div>
    </div>);
}

export default AccountItem;
