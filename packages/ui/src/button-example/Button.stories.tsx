import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      description: "определяет цвет кнопки",
    },
    accLeft: {
      description: 'Иконка слева от кнопки',
      control: 'text'
    },
    accRight: {
      description: 'Иконка справа от кнопки',
      control: 'text'
    },
    block: {
      description: "растягивается ли кнопку по ширине родителя",
    },
    disabled: {
      description: "активна ли кнопка",
    },
    isLoading: {
      description: "состояние загрузки / заблокирована пока идет запрос на сервер",
    },
    onClick: {
      description: "действие при клике",
    }
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary'
};