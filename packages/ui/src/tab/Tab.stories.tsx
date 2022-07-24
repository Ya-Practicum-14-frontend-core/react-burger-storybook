
import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tab } from "./Tab";
import { ITabProps } from "./Tab";

export default {
  title: 'Example/Tab',
  component: Tab,
  argTypes: {
    content: {
      description: "Контент таба",
    },
    active: {
      description: "Определяет активна ли кнопка",
    },
    value: {
      description: 'Value',
      control: 'text'
    },
    onClick: {
      description: "Действие при клике",
    }
  },
} as ComponentMeta<typeof Tab>;

const Template = (args: ITabProps) => <Tab {...args}/>;

export const TabExample: ComponentStory<typeof Tab> = Template.bind({});

TabExample.args = {
  content: 'Tab',
};

