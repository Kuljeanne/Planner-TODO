import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useState } from 'react';
import DroppableContainer from '../DroppableContainer';
import Task from '../Task';
import Grid from '@mui/material/Grid';
import { TaskContainers } from '../../constunts';

const containers = Object.keys(TaskContainers);

export function TasksDesk() {
  const [parent, setParent] = useState<string | null>(null);
  const draggableMarkup = <Task />;
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
              <DroppableContainer id={title} containerTitle={title}>
                {parent === title ? draggableMarkup : null}
              </DroppableContainer>
            </Grid>
          ))}
        </Grid>
    </DndContext>
  );
}
