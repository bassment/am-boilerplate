import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '.';

const Story: ComponentMeta<typeof Header> = {
  component: Header,
  title: 'Header',
};
export default Story;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Company',
  pages: [
    { name: 'Page 1', link: '/page1', onClick: () => null },
    { name: 'Page 2', link: '/page2', onClick: () => null },
  ],
  buttons: [
    { name: 'Register', variant: 'outlined', onClick: () => null },
    { name: 'Log In', variant: 'contained', onClick: () => null },
  ],
};
