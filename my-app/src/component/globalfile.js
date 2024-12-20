import { routesUrl } from "@/utils/pagesurl";
import { createTheme } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DateRangeIcon from "@mui/icons-material/DateRange";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FilterNoneIcon from '@mui/icons-material/FilterNone';


// code for textField
export const TextFieldCodeFull = `import React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
const TextInputField = ({
  control,
  label,
  name,
  type,
  errors,
  className,
  value,
  placeholder,
  variant
}) => {
  return (
    <>
      <label htmlFor={name} className="block"></label>
      <Controller
        defaultValue=""
        control={control}
        rules={{
          required: "Name Must Be Fill",
        }}
        name={name}
        render={({ field }) => (
          <TextField 
          variant={variant}
            type={type}
            value={value}
            className={className}
            label={label}
            name={name}
            placeholder={placeholder}
            {...field}
            error={!!errors?.[name]}
            helperText={errors?.[name]?.message}
          />
        )}
      />
    </>
  );
};

export default TextInputField;
 `;
export const TextFieldCodeHalf = ` <TextInputField control={control} name="outlined" label="outlined" variant="outlined" />
 <TextInputField control={control} name="filled" label="filled" variant="filled" />
 <TextInputField control={control} name="standard" label="standard" variant="standard" />`;

// code for textArea
export const TextAreaFieldCodeFull = ` import { FormControl } from "@mui/material";
 import TextField from "@mui/material/TextField";
 import { Controller } from "react-hook-form";
 
 export default function FormTextArea({
   name,
   errors,
   control,
   label,
   inputType,
   className,
   defaultValue,
   placeholder,
   value,
   variant,
 }) {
   return (
     <FormControl fullWidth variant={variant}>
       <Controller
         name={name}
         control={control}
         defaultValue={defaultValue ? defaultValue : ""}
         render={({ field }) => {
           return (
             <TextField
               InputLabelProps={{ shrink: true }}
               {...field}
               variant={variant}
               className={className}
               fullWidth
               value={value ? value : field.value}
               label={label}
               placeholder={placeholder}
               type={inputType}
               error={!!errors?.[name]}
               helperText={errors?.[name]?.message}
               multiline
               maxRows={4}
             />
           );
         }}
       />
     </FormControl>
   );
 }  `;
export const TextAreaFieldCodeHalf = ` <FormTextArea control={control} name="outlined" label="outlined" variant="outlined" />
 <FormTextArea control={control} name="filled" label="filled" variant="filled" />
 <FormTextArea control={control} name="standard" label="standard" variant="standard" />`;

// code for Select input Field
export const SelectInputCodeFull = `import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { Controller } from "react-hook-form";

const FormInputSelect = ({
  name,
  control,
  label,
  options,
  errors,
  defaultValue,
  className,
  variant,
}) => {
  return (
    <>
      <FormControl
        fullWidth
        variant={variant}
        className={className}
        error={!!errors?.[name]}
      >
        <InputLabel>{label}</InputLabel>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue || ""}
          render={({ field }) => (
           <Select label={label} id={name} {...field}>
              {options?.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  error={!!errors?.[name]}
                  helperText={errors?.[name]?.message}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {/* {errors?.[name] && (
          <FormHelperText>{errors[name]?.message}</FormHelperText>
        )} */}
      </FormControl>
    </>
  );
};

export default FormInputSelect;
`;
export const SelectInputCodeHalf = `  <FormInputSelect control={control} options={Lists} name="outlined" label="outlined" variant="outlined" />
  <FormInputSelect control={control} options={Lists} name="standard" label="standard" variant="standard" />
  <FormInputSelect control={control} options={Lists} name="filled" label="filled" variant="filled" /> `;

// code for Date Picker
export const DatePickerCodeFull = `import { FormControl, FormHelperText, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";

export default function FormDatePicker({
  value,
  name,
  control,
  label,
  errors,
  className,
}) {
  return (
    <FormControl fullWidth error={!!errors?.[name]} className={className}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              label={label}
              value={field.value ? dayjs(field.value, "MM/DD/YYYY") : null}
              onChange={(date) => {
                field.onChange(date ? date.format("MM/DD/YYYY") : null);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={!!errors?.[name]}
                  helperText={errors?.[name]?.message}
                />
              )}
            />
          )}
        />
      </LocalizationProvider>
    </FormControl>
  );
}`;
export const DatePickerCodeHalf = ` <FormDatePicker control={control} name="outlined" label="Select Date" variant="outlined" />  `;

// code for Date Picker
export const DateRangePickerCodeFull = `import React from "react";
import { FormControl, TextField, Grid } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";

export default function FormDateRangePicker({
  name,
  control,
  errors,
  className,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth error={!!errors?.[name]?.startDate} className={className}>
            <Controller
              name={name.startDate}
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  label="Start Date"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={!!errors?.[name]?.startDate}
                      helperText={errors?.[name]?.startDate?.message}
                    />
                  )}
                />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth error={!!errors?.[name]?.endDate} className={className}>
            <Controller
              name={name.endDate}
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  label="End Date"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={!!errors?.[name]?.endDate}
                      helperText={errors?.[name]?.endDate?.message}
                    />
                  )}
                />
              )}
            />
          </FormControl>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
`;
export const DateRangePickerCodeHalf = ` <FormDateRangePicker name="dateRange" control={control} label="Select Dates" className="!my-10" />`;


// code for Date Picker
export const DateTimePickerCodeFull = `import { FormControl, FormHelperText, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export default function FormDateTimePicker({
  value,
  name,
  control,
  label,
  errors,
  className,
}) {
  return (
    <FormControl fullWidth error={!!errors?.[name]} className={className}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <DateTimePicker {...field}
            renderInput={(params) => (
                <TextField
                  {...params}
                  error={!!errors?.[name]}
                  helperText={errors?.[name]?.message}
                />
              )}
             label="Basic date time picker" />
          )}
        />
         </DemoContainer>
      </LocalizationProvider>
    </FormControl>
  );
}`;
export const DateTimePickerCodeHalf = ` <FormDateTimePicker className="my-10" control={control} name="outlined" label="Select Date" variant="outlined"/> `;

// code for CheckBox
export const CheckBoxCodeFull = `"use client"; 
import React from "react";
import { Controller } from "react-hook-form";

const CheckBoxGroup = ({
  control,
  name,
  options,
  defaultValue,
  className,
}) => {
  return (
    <Controller
    name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <div className={className}>
          {options.map((option) => (
            <label key={option.value} style={{ marginRight: "60px" }}>
              <input
                type="checkbox"
                value={option.value}
                onChange={field.onChange}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    />
  );
};

export default CheckBoxGroup;


`;
export const CheckBoxCodeHalf = `  <CheckBoxGroup control={control} name="option" options={CheckBoxOptions} defaultValue="" />   `;

// code for radio button
export const RadioButtonCodeFull = `"use client"; 
import React from "react";
import { Controller } from "react-hook-form";

const RadioButtonGroup = ({
  control,
  name,
  options,
  defaultValue,
  className,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <div className={className}>
          {options.map((option) => (
            <label key={option.value} style={{ marginRight: "60px" }}>
              <input
                type="radio"
                value={option.value}
                checked={field.value === option.value}
                onChange={field.onChange}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    />
  );
};

export default RadioButtonGroup;
`;
export const RadioButtonCodeHalf = ` <RadioButtonGroup control={control} name="option" options={radioOptions} defaultValue="" />     `;

// code for skeleton
export const SkeletonCodeFull = `import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
export default function BasicSkeleton({
  variant,
  width,
  height,
  spacing,
  animation,
}) {
  return (
    <Stack spacing={spacing}>
      <Skeleton
        variant={variant}
        width={width}
        height={height}
        animation={animation}
      />
    </Stack>
  );
}
`;
export const SkeletonCodeHalf = `  <Stack spacing={1}>
     <BasicSkeleton variant="text" width="210px" sx={{ fontSize: "1rem" }} animation="wave" />
     <BasicSkeleton variant="circular" width="40px" height="40px" />
     <BasicSkeleton variant="rectangular" width="210px" height="60px" animation="wave" />
     <BasicSkeleton variant="rounded" width="210px" height="60px" />
   </Stack> `;

// code for skeleton2
export const SkeletonCodeHalf2 = `   <Card sx={{ height: 400, maxWidth: 345, m: 2 }}>
      <CardHeader
           avatar={
             <BasicSkeleton animation="wave" variant="circular" width="40px" height="40px" />
            }
            title={
              <BasicSkeleton animation="wave" height="20px" width="80%" style={{ marginBottom: 6 }} />
            }
            subheader={
              <BasicSkeleton animation="wave" height="20px" width="40%" />
            }
          />
          <BasicSkeleton height="250px" animation="wave" variant="rectangular" />
        <CardContent>
          <>
             <BasicSkeleton animation="wave" height="20px" style={{ marginBottom: 6 }} />
             <BasicSkeleton animation="wave" height="20px" width="80%" />
          </>
        </CardContent> 
    </Card> `;

// code for open modal
export const ModalCodeFull = `import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function BasicModal({ Heading1, Heading2, style, name, handleClose, handleOpen, open }) {

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
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {Heading2}
                    </Typography>
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </div>  
    );
}
`;
export const ModalCodeHalf = `  <BasicModal Heading1="Text in a modal" Heading2="Duis mollis, est non commodo luctus, nisi erat porttitor ligula" 
     name="Open Modal" style={style} handleClose={handleClose} handleOpen={handleOpen} open={open} />  `;

// code for typography
export const TypographyCodeFull = `import { Typography } from '@mui/material'
import React from 'react'

const TypographyPage = () => {
  return (
    <div>
       <div className="text-center !my-10">
        <Typography variant="h1">h1. Heading</Typography>
        <Typography variant="h2">h2. Heading</Typography>
        <Typography variant="h3">h3. Heading</Typography>
        <Typography variant="h4">h4. Heading</Typography>
        <Typography variant="h5">h5. Heading</Typography>
        <Typography variant="h6">h6. Heading</Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" gutterBottom sx={{ display: "block" }}>
          button text
        </Typography>
        <Typography variant="caption" gutterBottom sx={{ display: "block" }}>
          caption text
        </Typography>
        <Typography variant="overline" gutterBottom sx={{ display: "block" }}>
          overline text
        </Typography>
      </div>
    </div>
  )
}

export default TypographyPage`;
export const TypographyCodeHalf = `   <Typography variant="h1">h1. Heading</Typography>
   <Typography variant="h2">h2. Heading</Typography>
   <Typography variant="h3">h3. Heading</Typography>
   <Typography variant="h4">h4. Heading</Typography>
   <Typography variant="h5">h5. Heading</Typography>
   <Typography variant="h6">h6. Heading</Typography> `;

// code for Button
export const ButtonCodeFull = `import React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import { Button } from "@mui/material";
const BasicButton = ({
  control,
  label,
  href,
  name,
  type,
  color,
  className,
  startIcon,
  variant,
}) => {
  return (
    <>
      <label htmlFor={name} className="block"></label>
      <Controller
        defaultValue=""
        control={control}
        rules={{
          required: "Name Must Be Fill",
        }}
        name={name}
        render={({ field }) => (
          <Button
            variant={variant}
            href={href}
            {...field}
            color={color}
            startIcon={startIcon}
            className={className}
            type={type}
          >
            {label}
          </Button>
        )}
      />
    </>
  );
};

export default BasicButton;
`;
export const ButtonCodeHalf = `  <BasicButton control={control} name="button1"  label="Contained"  />
  <BasicButton control={control} name="button2"  label="Link" href="#"/>
  <BasicButton control={control} name="button3"  label="Dark" color="dark"/>
  <BasicButton control={control} name="button6"  label="Secondary" color="secondary"/>
  <BasicButton control={control} name="button4"  label="Error" variant="outlined" color="error" />
  <BasicButton control={control} name="button5"  label="Success" variant="outlined" color="success"/>
  <BasicButton control={control} name="button7"  label="Delete" variant="outlined" color="primary"
   startIcon={<DeleteIcon />} />
 `;

// dummy Data for search
export const DummyData = [
  {
    label: "TextArea",
    href: routesUrl.TextField,
    parentIndex: 0,
    subIndex: 0,
  },
  {
    label: "TextField",
    href: routesUrl.TextField,
    parentIndex: 0,
    subIndex: 0,
  },
  {
    label: "SelectInputField",
    href: routesUrl.SelectField,
    parentIndex: 0,
    subIndex: 1,
  },
  {
    label: "DatePicker",
    href: routesUrl.DatePicker,
    parentIndex: 0,
    subIndex: 2,
  },
  {
    label: "DateRangePicker",
    href: routesUrl.DatePicker,
    parentIndex: 0,
    subIndex: 2,
  },
  {
    label: "DateTimePicker",
    href: routesUrl.DatePicker,
    parentIndex: 0,
    subIndex: 2,
  },
  {
    label: "RadioButton",
    href: routesUrl.RadioButton,
    parentIndex: 0,
    subIndex: 3,
  },
  {
    label: "Checkbox",
    href: routesUrl.Checkbox,
    parentIndex: 0,
    subIndex: 4,
  },
  {
    label: "Modal",
    href: routesUrl.Modal,
    parentIndex: 1,
    subIndex: 5,
  },
  {
    label: "Skeleton",
    href: routesUrl.Skeleton,
    parentIndex: 2,
    subIndex: 6,
  },
  {
    label: "Button",
    href: routesUrl.Button,
    parentIndex: 3,
    subIndex: 0,
  },
  {
    label: "Typography",
    href: routesUrl.Typography,
    parentIndex: 3,
    subIndex: 1,
  },
];

// select input field lists
export const Lists = [
  { value: "One", label: "One" },
  { value: "Two", label: "Two" },
  { value: "Three", label: "Three" },
  { value: "Four", label: "Four" },
  { value: "Five", label: "Five" },
];

// drawer sidebar menu items
export const menuItems = [
  {
    title: "Forms",
    icon: <AppRegistrationIcon />,
    subItems: [
      {
        title: "Text Field",
        icon: <TextSnippetIcon />,
        route: routesUrl.TextField,
      },
      {
        title: "Select InputField",
        icon: <TextSnippetIcon />,
        route: routesUrl.SelectField,
      },
      {
        title: "Date Picker",
        icon: <DateRangeIcon />,
        route: routesUrl.DatePicker,
      },
      {
        title: "Radio Button",
        icon: <RadioButtonCheckedIcon />,
        route: routesUrl.RadioButton,
      },
      {
        title: "CheckBox",
        icon: <CheckCircleOutlineIcon />,
        route: routesUrl.Checkbox,
      },
    ],
  },
  {
    title: "Modal",
    icon: <FilterNoneIcon />,
    route: routesUrl.Modal,
  },
  {
    title: "Skeleton",
    icon: <LineStyleIcon />,
    route: routesUrl.Skeleton,
  },
  {
    title: "Others",
    icon: <MoreHorizIcon />,
    subItems: [
      { title: "Button", icon: <SmartButtonIcon />, route: routesUrl.Button },
      {
        title: "Typography",
        icon: <FontDownloadIcon />,
        route: routesUrl.Typography,
      },
    ],
  },
];

// Theme configurations
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#000000",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
    },
  },
});
