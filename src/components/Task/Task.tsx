import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';
import Draggable from '../Draggable';
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface TaskProps {
  id: number;
  title: string;
  status: string;
  description?: string;
  responsibleFor: string;
  startDate: Date;
  deadline: Date;
}

export function Task({
  id,
  title,
  description,
  responsibleFor,
  status,
  startDate,
  deadline,
}: TaskProps) {
  return (
    <Draggable id="draggable">
      <Card sx={{ maxWidth: 275 }}>
        <CardHeader
          title={title}
          subheader={`№${id} ${status}`}
        />
        <CardContent sx={{ pb: 0, pt: 0 }}>
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
          >
            For {responsibleFor}
          </Typography>
          <Typography variant="body2">{description}</Typography>
          <Typography variant="subtitle2">
            Start Date: {startDate.toLocaleString()}
          </Typography>
          <Typography variant="subtitle2">
            Deadline: {deadline.toLocaleString()}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button size="small">Add subtask</Button>
          <div>
            <IconButton
              aria-label="edit"
              size="large"
            >
              <EditIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="large"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </div>
        </CardActions>
      </Card>
    </Draggable>
  );
}
