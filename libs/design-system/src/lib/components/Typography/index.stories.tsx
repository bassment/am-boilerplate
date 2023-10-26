import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from './index';

const Story: ComponentMeta<typeof Typography> = {
  component: Typography,
  title: 'Typography',
};
export default Story;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>Text</Typography>
);

export const Primary = Template.bind({});
Primary.args = {};
