import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function BasicModal({
  Heading1,
  Heading2,
  style,
  name,
  handleClose,
  handleOpen,
  open,
}) {
    
  return (
    <div>
      <Button onClick={handleOpen}>{name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {Heading1}
          </Typography>
          <Typography id="modal-modal-description" sx={{ my: 2 }}>
            {Heading2}
          </Typography>
          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
