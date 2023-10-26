import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from './index';

const Story: ComponentMeta<typeof TextField> = {
  component: TextField,
  title: 'TextField',
};
export default Story;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Placeholder',
};
