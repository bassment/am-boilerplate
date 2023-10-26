import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from './index';

const Story: ComponentMeta<typeof Divider> = {
  component: Divider,
  title: 'Divider',
};
export default Story;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  sx: {
    marginTop: 8,
  }
};
