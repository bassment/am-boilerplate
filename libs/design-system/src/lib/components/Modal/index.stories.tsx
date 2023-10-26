import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Button, Paper } from '..';
import { Typography } from '../Typography';
import { Modal } from '.';

const Story: ComponentMeta<typeof Modal> = {
  component: Modal,
  title: 'Modal',
};
export default Story;


const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
    <Modal
      {...args}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper>
        <Typography>
          Modal Test
        </Typography>
      </Paper>
    </Modal>
    <Button onClick={handleOpen}>Open Modal</Button>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
