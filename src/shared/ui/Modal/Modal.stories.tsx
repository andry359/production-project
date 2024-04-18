import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        isOpen: true,
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque qui vero laboriosam placeat, ab tempore maxime nulla repellendus? Ad quos odit distinctio quis eligendi. Exercitationem minus reprehenderit recusandae voluptatum iste! Similique vero sit, unde id veniam ipsam ipsum alias sequi modi nobis. Maxime, nam deserunt. Reiciendis minus perspiciatis dolorem aliquid.',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque qui vero laboriosam placeat, ab tempore maxime nulla repellendus? Ad quos odit distinctio quis eligendi. Exercitationem minus reprehenderit recusandae voluptatum iste! Similique vero sit, unde id veniam ipsam ipsum alias sequi modi nobis. Maxime, nam deserunt. Reiciendis minus perspiciatis dolorem aliquid.',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];