import { TextField, IconButton, Stack, Typography } from "@mui/material";
import {
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@mui/icons-material";

const TimeControlInput = ({
  label,
  value,
  handleChange,
  placeholder,
}: {
  label: string;
  value: number;
  handleChange: (value: number) => void;
  placeholder: string;
}) => {
  return (
    <Stack direction="row" alignItems="center" gap="1em">
      <Typography variant="body1">{label}:</Typography>
      <Stack direction="row" alignItems="center" gap="2px">
        <IconButton onClick={() => handleChange(value - 1)}>
          <ChevronLeftIcon />
        </IconButton>
        <TextField
          style={{ width: "6em" }}
          size="small"
          variant="outlined"
          placeholder={placeholder}
          value={value}
          inputProps={{
            min: 0,
          }}
          onChange={(e) =>
            handleChange(
              isNaN(Number(e.target.value)) ? 0 : Number(e.target.value)
            )
          }
        />
        <IconButton onClick={() => handleChange(value + 1)}>
          <ChevronRightIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default TimeControlInput;