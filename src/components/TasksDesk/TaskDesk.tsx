import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useState } from 'react';
import DroppableContainer from '../DroppableContainer';
import Task from '../Task';
import Grid from '@mui/material/Grid';
import { TaskContainers } from '../../constunts';

const containers = Object.keys(TaskContainers);
const date = new Date()
const task = {
  id: 123,
  title: 'Fix Bugs in the app',
  description:
    'Si vic pacem pare bellum. O tempore o mores. Per aspera ad astra',
  responsibleFor: 'Alexandr',
  status: 'in queue',
  startDate: date,
  deadline: new Date(2023, 11, 31),
};

export function TasksDesk() {
  const [parent, setParent] = useState<string | null>(null);
  const draggableMarkup = (
    <Task
      id={task.id}
      title={task.title}
      description={task.description}
      status={task.status}
      responsibleFor={task.responsibleFor}
      startDate={task.startDate}
      deadline={task.deadline}
    />
  );
  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;
    setParent(over ? String(over.id) : null);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      <Grid
        container
        justifyContent="center"
        spacing={4}
      >
        {containers.map(title => (
          <Grid
            key={title}
            item
          >
            <DroppableContainer
              id={title}
              containerTitle={title}
            >
              {parent === title ? draggableMarkup : null}
            </DroppableContainer>
          </Grid>
        ))}
      </Grid>
    </DndContext>
  );
}
