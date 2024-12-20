"use client";
import { Card, Container, Typography } from "@mui/material";
import TextFieldPage from "./form/textField/page";
import DatePicker from "./form/datePicker/page";
import DateRangePicker from "@/component/FormDateRangePicker/FormDateRangePicker";
import FormDateRangePicker from "@/component/shared/form/dateRangePicker";
import { useForm } from "react-hook-form";
import FormDatePicker from "@/component/shared/form/datePicker";
import FormInput from "@/component/shared/form/formData";
import FormInputSelect from "@/component/shared/form/FormInputSelect";
import { Lists } from "@/component/globalfile";

export default function Home() {
  const { control } = useForm();
  return (
    <>
      {/* <Container> */}
        <div className="!m-10 flex gap-10 justify-between !items-center">
          <div className="w-2/5">
            <Typography className="!font-bold !w-full" variant="h2">
            <span style={{color:"#027ad1"}}>Move faster</span> with intuitive React UI tools
            </Typography>
            <Typography className="text-lg" >
              This site offers a comprehensive suite of free UI tools to help
              you ship new features faster. The library provides a collection of
              pre-built, customizable UI components designed for efficiency and
              ease of use. This site our fully-loaded component library, or
              bring your own design system to our production-ready components.
            </Typography>
          </div>
          <div className="!w-1/2">
            <img src="/hands-typing-code-on-laptop.jpg" />
          </div>
        </div>
        <div>
          <Typography className="!mt-20 !font-bold text-center" variant="h3">
            A <span style={{color:"#027ad1"}}>delightful experience</span> for you and your users.
          </Typography>
          <div className="flex justify-between gap-10 my-5">
            <Card className="w-1/4 p-5">
              <Typography className="!font-bold">Timeless aesthetics</Typography>
              <Typography className="text-base">
                Build beautiful UIs with ease. Start with Google's Material
                Design, or create your own sophisticated theme.
              </Typography>
            </Card>
            <Card className="w-1/4 p-5">
              <Typography className="!font-bold">Intuitive customization</Typography>
              <Typography className="text-base">
              Our components are as flexible as they are powerful. You always have full control over how they look and behave.
              </Typography>
            </Card>
            <Card className="w-1/4 p-5">
              <Typography className="!font-bold">Unrivaled documentation</Typography>
              <Typography className="text-base">
              The answer to your problem can be found in our docs. How can we be so sure? Because our docs boast over 2,000 contributors.
              </Typography>
            </Card>
            <Card className="w-1/4 p-5 ">
              <Typography className="!font-bold">Dedicated to accessibility</Typography>
              <Typography className="text-base">
              We believe in building for everyone. That's why accessibility is a high priority with every new feature we ship.
              </Typography>
            </Card>
          </div>
        </div>
      {/* </Container> */}
    </>
  );
}
