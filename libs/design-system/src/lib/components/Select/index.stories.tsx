import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormControl, InputLabel, Select, MenuItem } from '..';

const Story: ComponentMeta<typeof Select> = {
  component: Select,
  title: 'Select',
};
export default Story;

const modelConfig = {
  models: [
    { name: 'OpenAI', active: true },
    { name: 'Bard', active: false },
  ]
}

const Template: ComponentStory<typeof Select> = (args) => (
  <FormControl>
    <InputLabel id="model-label">Model:</InputLabel>
    <Select
      {...args}
      labelId="model-label"
      id="model"
      label="Model"
    >
      {modelConfig.models.map((m, i) => (
        <MenuItem key={i} value={i}>
          {m.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export const Primary = Template.bind({});
Primary.args = {
  sx: {
    minWidth: 120,
  },
};
