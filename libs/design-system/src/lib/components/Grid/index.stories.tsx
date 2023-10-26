import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from '../Typography';
import { Grid } from '.';

const Story: ComponentMeta<typeof Grid> = {
  component: Grid,
  title: 'Grid',
};
export default Story;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args}><Typography>Test in the Grid</Typography></Grid>;

export const Primary = Template.bind({});
Primary.args = {};
