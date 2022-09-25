import React from 'react';
import type { ReactElement } from 'react';
import { Task, TaskStatus } from './Components/Tasks';

export function App(): ReactElement {
  return (
    <>
      <Task
        task={{
          task: 'Feed Cat',
          createdAt: new Date(),
          updatedAt: new Date(),
          state: TaskStatus.TODO,
        }}
      />
    </>
  );
}
