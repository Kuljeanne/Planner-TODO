import {
  Button,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import Draggable from '../Draggable';
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function Task() {
  return (
    <Draggable id="draggable">
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            Word of the Day
          </Typography>
          <Typography
            variant="h5"
            component="div"
          >
            benevolent
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
          >
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
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
        </CardActions>
      </Card>
    </Draggable>
  );
}
