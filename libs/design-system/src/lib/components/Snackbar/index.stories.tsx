import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Snackbar } from './index';

const Story: ComponentMeta<typeof Snackbar> = {
  component: Snackbar,
  title: 'Snackbar',
};
export default Story;

const Template: ComponentStory<typeof Snackbar> = (args) => <Snackbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  autoHideDuration: 3000,
  message: "Test note"
};
