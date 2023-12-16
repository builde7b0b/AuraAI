import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Box, Input, Button, useTheme } from '@mui/material';



const DraggableButton = ({ text, onClick, sx }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "button",
      item: { text },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));
  
    return (
      <Button
        ref={drag}
        sx={{ ...sx, opacity: isDragging ? 0.5 : 1 }}
        onClick={onClick}
      >
        {text}
      </Button>
    );
  };
  
  export default DraggableButton;