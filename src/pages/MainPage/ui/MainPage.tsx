import { useTranslation } from 'react-i18next';

const MainPage = () => {
    // внутри хука useTranslation('about') передаем название чанки с переводом той страницы,
    // на которую в данный момент заходит пользователь
    // (не тянем сразу перевод всего приложения, который может быть не нужен).
    // При переходе на страницу мы получаем сразу все переводы этой страницы
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;