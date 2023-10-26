import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SignIn } from '.';

const Story: ComponentMeta<typeof SignIn> = {
  component: SignIn,
  title: 'SignIn',
};
export default Story;

const Template: ComponentStory<typeof SignIn> = (args) => <SignIn {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
