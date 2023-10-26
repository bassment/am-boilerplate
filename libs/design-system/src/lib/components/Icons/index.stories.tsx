import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from './index';

const Story: ComponentMeta<typeof Icons> = {
  component: Icons,
  title: 'Icons',
};
export default Story;

const Template: ComponentStory<typeof Icons> = () => <Icons />;

export const Primary = Template.bind({});
Primary.args = {};
