import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

export const RoutersDecorator = (StoryComponent: Story) => {
    return (
        <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
    );
};