
import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tab } from "./Tab";
import { ITabProps } from "./Tab";

export default {
  title: 'Example/Tab',
  component: Tab,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    content: {
      description: "Контент таба",
    },
    active: {
      description: "определяет активна ли кнопка",
    },
    value: {
      description: 'Value',
      control: 'text'
    },
    onClick: {
      description: "действие при клике",
    }
  },
} as ComponentMeta<typeof Tab>;

const Template = (args: ITabProps) => <Tab {...args}/>;

export const TabExample: ComponentStory<typeof Tab> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TabExample.args = {
  content: 'Tab',
};

