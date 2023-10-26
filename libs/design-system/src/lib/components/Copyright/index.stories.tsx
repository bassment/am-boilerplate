import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Copyright } from './index';

const Story: ComponentMeta<typeof Copyright> = {
  component: Copyright,
  title: 'Copyright',
};
export default Story;

const Template: ComponentStory<typeof Copyright> = (args) => (
  <Copyright {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
