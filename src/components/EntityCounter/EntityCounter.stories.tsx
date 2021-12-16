import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EntityCounter, { CounterTitle } from './EntityCounter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'infinigui/EntityCounter',
    component: EntityCounter,

    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof EntityCounter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EntityCounter> = (args) => (<EntityCounter {...args} />)

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    title: <CounterTitle />,
    // color: "primary",
    // size: 'large',
    // variant: 'contained',
    children: [
        <EntityCounter.Pair />,
        <EntityCounter.Pair />
    ]
};