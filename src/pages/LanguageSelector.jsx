import React, { useState } from "react";
import { IconButton, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemButton, ListItemText, Stack } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { orange } from "@mui/material/colors";

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLanguageChange = (language) => {
    console.log(`Selected language: ${language}`);
    handleClose();
  };

  return (
    <>
      {/* Language Button */}
      <IconButton
        title="language"
        sx={{
          rotate: "-30deg",
          bgcolor: orange[500],
          color: "white",
          marginLeft: "1rem",
          padding: "0.5rem",
          "&:hover": {
            bgcolor: "error.dark",
          },
        }}
        onClick={handleOpen}
      >
        <LanguageIcon />
      </IconButton>

      {/* Dialog for language options */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select Language</DialogTitle>
        <DialogContent>
          <List>
            {["English", "Spanish", "French", "German", "Chinese"].map((language) => (
              <ListItem key={language} disablePadding>
                <ListItemButton onClick={() => handleLanguageChange(language)}>
                  <ListItemText primary={language} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LanguageSelector;
