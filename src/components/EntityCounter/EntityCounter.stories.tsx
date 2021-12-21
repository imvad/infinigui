import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EntityCounter, { CounterTitle }from './EntityCounter';

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
const poolIcon = <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 20 20"><path d="M10.4,0.2 C6.7,0.2 0,1.4 0,4.1 L0,8 L0,10.9 L0,12.9 C0,15.5 6.7,16.7 10.4,16.7 C14,16.7 20,15.5 20,12.9 L20,10.9 L20,8 L20,4.1 C20,1.4 14,0.2 10.4,0.2 L10.4,0.2 Z M10.4,1.8 C13.7,1.8 18.5,2.8 18.5,4.1 C18.5,5.4 13.7,6.4 10.4,6.4 C7.1,6.4 1.6,5.4 1.6,4.1 C1.6,2.8 7.1,1.8 10.4,1.8 L10.4,1.8 Z"></path></svg>

Default.args = {
    title: <CounterTitle text="Pools" icon={poolIcon} />,
    // color: "primary",
    // size: 'large',
    // variant: 'contained',
    children: <EntityCounter.Pair title="Volumes & FS" count="2"/>
};
