import { useDroppable } from '@dnd-kit/core';
import { Container, Typography } from '@mui/material';



interface DroppableContainerProps {
  children: React.ReactNode | null;
  id: string;
  containerTitle: string;
}
export function DroppableContainer({
  children,
  id,
  containerTitle,
}: DroppableContainerProps) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style = {
    color: isOver ? 'green' : undefined,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
    >
      <Container
        sx={{
          minWidth: 280,
          minHeight: '80vh',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        <Typography
          variant="h4"
          color="text.secondary"
          align="center"
          gutterBottom
        >
          {containerTitle}
        </Typography>
        {children}
      </Container>
    </div>
  );
}
