import { Box } from "@mui/material";

interface TextCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function TextCard(props: TextCardProps) {
  return (
    <>
    <Box sx={{ width: { xs: "28vh", md: "100%" }, textAlign: {xs: "center", md: "left"}}}>
      {props.icon}
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </Box>
    </>
  );
}
