import type { Meta, StoryObj } from '@storybook/vue3';

import FabButton from '../components/Button.vue';

const meta: Meta<typeof FabButton> = {
  title: 'MD3/Components/Buttons/Basic',
  component: FabButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ["elevated", "filled", "outlined", "tonal"],
      control: { type: 'select' },
      description: 'The variant style of the button.',
    },
    type: {
      options: ["button", "submit", "reset"],
      control: { type: 'select' },
      description: 'The type of the button (HTML button type attribute).',
    },
    icon: {
      options: ["", "line-md:plus", "line-md:pencil"],
      control: { type: 'select' },
      description: 'The icon to be displayed within the button.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Determines whether the button should be disabled or not.',
    },
    buttonClass: {
      control: 'text',
      description: 'Additional CSS class(es) to apply to the button element.',
    },
    dataCy: {
      control: 'text',
      description: 'A value for the data-cy attribute used for testing (e.g., with Cypress).',
    },
    onClick: {
      action: 'onClick',
      description: 'The event handler to be called when the button is clicked.',
    },
    default: {
      control: 'text',
      description: 'The label or text to display on the button.'
    }
  },
  parameters: {
    docs: {
      description: {
        component: `A basic customizable button. 
        It can be used to create different types of buttons, such as elevated, filled, tonal, outlined, or text buttons. 
        The button supports an optional icon and can be disabled to prevent interactions. 
        The appearance of the button changes based on its state, such as when hovering or being clicked.
        `
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FabButton>;

export const basic: Story = {
  args: {
    type: 'button',
    variant: 'tonal',
    icon: '',
    default: 'Button'
  },
};

export const filled: Story = {
  args: {
    type: 'button',
    variant: 'filled',
    icon: '',
    default: 'Button'
  },
};

export const elevated: Story = {
  args: {
    type: 'button',
    variant: 'elevated',
    icon: '',
    default: 'Button'
  },
};

export const outlined: Story = {
  args: {
    type: 'button',
    variant: 'outlined',
    icon: '',
    default: 'Button'
  },
};

export const buttonWithIcon: Story = {
  args: {
    type: 'button',
    variant: 'tonal',
    icon: 'line-md:plus',
    default: 'Button'
  },
};