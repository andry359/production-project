import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Text for Text component.',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title',
    text: 'Text for Text component.',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text for Text component.',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text for Text component.',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text for Text component.',
    theme: TextTheme.ERROR,
};