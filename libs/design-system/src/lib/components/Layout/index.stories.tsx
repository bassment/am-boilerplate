import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from './index';

const Story: ComponentMeta<typeof Layout> = {
  component: Layout,
  title: 'Layout',
};
export default Story;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
