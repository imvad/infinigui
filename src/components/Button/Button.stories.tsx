import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'infinigui/Button',
    component: Button,
    argTypes: {
        children: {
            defaultValue: "Button"
        },
        color: {
            options: ["inherit", "primary", "secondary", "success", "error", "info", "warning", undefined],
            control: { type: 'radio' }
        },
        size: {
            options: ["small", "medium", "large", undefined],
            control: { type: 'radio' }
        },
        variant: {
            options: ["text", "contained", "outlined", undefined],
            control: { type: 'radio' }
        },
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    // color: "primary",
    // size: 'large',
    // variant: 'contained',
    // children: "I am a btn"
};