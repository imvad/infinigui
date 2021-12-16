import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EntityCounter, { CounterTitle } from './EntityCounter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'infinigui/EntityCounter',
    component: EntityCounter,
    argTypes: {
        children: {
            defaultValue: "EntityCounter"
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
} as ComponentMeta<typeof EntityCounter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EntityCounter> = (args) => (
    <EntityCounter {...args}>
        <EntityCounter.Pair />
        <EntityCounter.Pair />
    </EntityCounter>
)

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    title: <CounterTitle />
    // color: "primary",
    // size: 'large',
    // variant: 'contained',
    // children: "I am a btn"
};