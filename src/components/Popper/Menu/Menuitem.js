import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function Menuitem({ data, onClick }) {
    return (
        <div className={cx('menu-item')}>
            <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>
                {data.title}
            </Button>
        </div>
    );
}

export default Menuitem;
