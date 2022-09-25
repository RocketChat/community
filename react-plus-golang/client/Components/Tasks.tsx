import React from 'react';
import type { ReactElement } from 'react';
import { Button, Typography } from '@mui/material';

export enum TaskStatus {
  TODO,
  IN_PROGRESS,
  COMPLETED,
}

export interface ITask {
  task: string;
  state: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}

export function Task({ task }: { task: ITask }): ReactElement {
  return (
    <>
      <Button
        variant='contained'
        color='primary'
      >
        TODO
      </Button>
      <Typography>task.task</Typography>
    </>
  );
}
