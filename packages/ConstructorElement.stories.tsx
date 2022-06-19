import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ConstructorElement } from './ConstructorElement';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ConstructorElement',
  component: ConstructorElement,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: {
      description: 'Название ингредиента',
      control: 'text',
      defaultValue: "Краторная булка N-200i"
    },
    thumbnail: {
      description: 'Иконка ингредиента',
      control: 'text',
      defaultValue: "https://yandex-praktikum.github.io/react-developer-burger-ui-components/docs/static/img-5f9ccf21a0eb45d06e57410b025f366c.png",
    },
    price: {
      description: 'Цена ингредиента',
      control: 'number',
      defaultValue: 50,
    },
    type: {
      description: "Тип расположения сверху/снизу/середина",
      options: ['top', 'bottom', 'undefinded'],
      control: { type: 'radio' },
      table: {
        category: 'Параметры отображения',
      },
    },
    isLocked: {
      description: "Ее нельзя перетаскивать?",
      table: {
        category: 'Параметры отображения',
      },
    },
    handleClose: {
      description: "Обработчик удаления ингредиента",
      table: {
        category: 'Events',
      },
    }
  },
} as ComponentMeta<typeof ConstructorElement>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConstructorElement> = (args) => <ConstructorElement {...args} />;

export const Primary = Template.bind({});