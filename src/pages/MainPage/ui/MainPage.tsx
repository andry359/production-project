import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    // внутри хука useTranslation('about') передаем название чанки с переводом той страницы,
    // на которую в данный момент заходит пользователь
    // (не тянем сразу перевод всего приложения, который может быть не нужен).
    // При переходе на страницу мы получаем сразу все переводы этой страницы
    const { t } = useTranslation('main');

    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            {t('Главная страница')}
            <Input
                value={value}
                onChange={onChange}
                placeholder="Введите текст"
            />
        </div>
    );
};

export default MainPage;