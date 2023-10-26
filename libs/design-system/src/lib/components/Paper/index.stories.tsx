import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paper } from './index';

const Story: ComponentMeta<typeof Paper> = {
  component: Paper,
  title: 'Paper',
};
export default Story;

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args}>Paper test</Paper>;

export const Primary = Template.bind({});
Primary.args = {};
