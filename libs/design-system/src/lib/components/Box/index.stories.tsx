import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from '../Typography';
import { Box } from '.';

const Story: ComponentMeta<typeof Box> = {
  component: Box,
  title: 'Box',
};
export default Story;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args}><Typography>Test inside the Box</Typography></Box>;

export const Primary = Template.bind({});
Primary.args = {};
