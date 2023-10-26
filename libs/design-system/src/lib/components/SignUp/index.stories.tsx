import type { ComponentStory, ComponentMeta } from '@storybook/react';
import SignUp from './index';

const Story: ComponentMeta<typeof SignUp> = {
  component: SignUp,
  title: 'SignUp',
};
export default Story;

const Template: ComponentStory<typeof SignUp> = (args) => <SignUp {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
