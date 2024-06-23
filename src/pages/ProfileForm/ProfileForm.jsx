import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CheckCircleOutline,
  CheckCircleOutlineOutlined,
} from "@mui/icons-material";
export default function ProfileForm() {
  const [userInfo, setUserInfo] = useState({});

  const [role, setRole] = useState("User");
  const roleTheme =
    role === "Admin" ? "#2196f3" : role === "Manager" ? "#9c27b0" : "#009688";
  // Start Snackbar
  const [open, setOpen] = useState(false);
  const patterns = {
    emailPattern:
      /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/,
    phonePattern: /^\+?[1-9]\d{1,14}$/,
  };

  const { phonePattern, emailPattern } = patterns;

  const currencies = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "User",
      label: "User",
    },
    {
      value: "Manager",
      label: "Manager",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setOpen(true);
    setRole(data.Role);
    setUserInfo(data);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      onSubmit={handleSubmit(onSubmit)}
      component={"form"}
      noValidate
      autoComplete="off"
    >
      <Stack direction={"row"} spacing={2}>
        <TextField
          fullWidth
          label="FirstName"
          {...register("FirstName", { required: true, minLength: 3 })}
          error={Boolean(errors.FirstName)}
          helperText={
            Boolean(errors.FirstName) && "First Name Field Is Required"
          }
        />
        <TextField
          fullWidth
          label="LastName"
          {...register("LastName", { required: true, minLength: 3 })}
          error={Boolean(errors.LastName)}
          helperText={Boolean(errors.LastName) && "Last Name Field Is Required"}
        />
      </Stack>
      <TextField
        fullWidth
        label="Email"
        {...register("Email", { required: true, pattern: emailPattern })}
        error={Boolean(errors.Email)}
        helperText={
          Boolean(errors.Email) && "Please Provide A Valid Email Address"
        }
      />
      <TextField
        fullWidth
        label="Contact Number"
        {...register("Contact Number", {
          required: true,
          pattern: phonePattern,
          minLength: 7,
         maxLength: 15,
        })}
        error={Boolean(errors["Contact Number"])}
        helperText={
          Boolean(errors["Contact Number"]) &&
          "Please Provide A valid Contact Number"
        }
      />
      <TextField
        fullWidth
        label="Address 1 "
        {...register("Address 1", { required: true, minLength: 3 })}
        error={Boolean(errors["Address 1"])}
        helperText={
          Boolean(errors["Address 1"]) && "Address 1 Field Is Required"
        }
      />
      <TextField fullWidth label="Address 2 (optional)" />
      <TextField
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
        {...register("Role", { required: true })}
        error={Boolean(errors.Role)}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button type="submit" variant="contained">
          Create New User
        </Button>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          variant="filled"
          iconMapping={{
            success: <CheckCircleOutlineOutlined fontSize="inherit" />,
          }}
          sx={{
            width: "100%",
            backgroundColor: roleTheme,
          }}
        >
          New {role} Created Successfully
        </Alert>
      </Snackbar>
    </Box>
  );
}
