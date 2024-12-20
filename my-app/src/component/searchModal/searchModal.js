import {
  Box,
  InputAdornment,
  Modal,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState, useCallback } from "react";
import FormInput from "../shared/form/formData";
import { useForm } from "react-hook-form";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { useRouter } from "next/navigation";
import { DummyData } from "../globalfile";

const SearchModal = ({ modalOpen, handleClose, onSearchSelect, reset }) => {
  const { control, watch, handleSubmit } = useForm();
  const [filteredData, setFilteredData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();

  const searchText = watch("search");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    maxWidth: "90%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 3,
    border: "1px solid rgba(0, 0, 0, 0.12)",
    pt: 5,
    px: 4,
    pb: 4,
  };

  useEffect(() => {
    if (searchText) {
      const filtered = DummyData.filter((item) =>
        item.label.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filtered);
      setSelectedIndex(-1);
    } else {
      setFilteredData([]);
      setSelectedIndex(-1);
    }
    // handleClose()
  }, [searchText]);

  const highlightText = (text, highlight) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} style={{ fontWeight: "bold", color: "#0082ff" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const handleSelect = (item) => {
    if (item.href) {
      onSearchSelect(item.parentIndex, item.subIndex);
  
      router.push(item.href);
    } else if (item.parentIndex !== undefined) {
      onSearchSelect(item.parentIndex, item.subIndex);
    }

    handleClose(); 
  };
  

  const handleKeyDown = useCallback(
    (event) => {
      if (filteredData.length === 0) return;
  
      if (event.key === "ArrowDown") {
        setSelectedIndex((prevIndex) =>
          prevIndex < filteredData.length - 1 ? prevIndex + 1 : 0 // Wrap to start
        );
      } else if (event.key === "ArrowUp") {
        setSelectedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : filteredData.length - 1 // Wrap to end
        );
      } else if (event.key === "Enter" && selectedIndex !== -1) {
        handleSelect(filteredData[selectedIndex]); // Select item and close modal
      }
    },
    [filteredData, selectedIndex]
  );
  
  

  const onSubmit = (data) => {
    if (data.search) {
      const selectedItem = DummyData.find((item) =>
        item.label.toLowerCase().includes(data.search.toLowerCase())
      );

      if (selectedItem?.href) {
        router.push(selectedItem.href);
      }
    }
    handleClose();

  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <Box sx={style}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            control={control}
            name="search"
            placeholder="What are you looking for?"
            defaultValue=""
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchTwoToneIcon />
                </InputAdornment>
              ),
            }}
          />
        </form>
        {searchText ? (
          filteredData.length > 0 ? (
            <List>
              {filteredData.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton
  onClick={() => handleSelect(item)}
  selected={index === selectedIndex}
  sx={{
    backgroundColor: index === selectedIndex ? "rgba(0, 123, 255, 0.1)" : "transparent",
    "&:hover": {
      backgroundColor: "rgba(0, 123, 255, 0.2)",
    },
  }}
>
  {highlightText(item.label, searchText)}
</ListItemButton>

                </ListItem>
              ))}
            </List>
          ) : (
            <Typography
              className="text-center mt-5"
              sx={{
                textAlign: "center",
                mt: 3,
                color: "text.secondary",
              }}
            >
              No results found
            </Typography>
          )
        ) : null}
      </Box>
    </Modal>
  );
};

export default SearchModal;
