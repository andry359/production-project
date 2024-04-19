import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >
                {/* eslint-disable-next-line */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque qui vero laboriosam placeat, ab tempore maxime nulla repellendus? Ad quos odit distinctio quis eligendi. Exercitationem minus reprehenderit recusandae voluptatum iste! Similique vero sit, unde id veniam ipsam ipsum alias sequi modi nobis. Maxime, nam deserunt. Reiciendis minus perspiciatis dolorem aliquid.
            </Modal>
        </div>
    );
};