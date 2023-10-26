import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from '../Typography';
import { Container } from '.';

const Story: ComponentMeta<typeof Container> = {
  component: Container,
  title: 'Container',
};
export default Story;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args}><Typography>Test inside the Container</Typography></Container>;

export const Primary = Template.bind({});
Primary.args = {};
