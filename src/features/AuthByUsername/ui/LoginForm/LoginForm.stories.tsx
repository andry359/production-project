import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecoratod/StoreDecoratod';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    loginForm: { username: 'user', password: 'password' },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
    loginForm: { username: 'user', password: 'password', error: 'error' },
})];