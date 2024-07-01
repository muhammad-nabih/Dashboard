import { Email, ShoppingCart, Person, Traffic } from "@mui/icons-material";

export const cardData = [
  {
    scheme: "purples",
    numbers: "12,361",
    title: "Emails Sent",
    icon: <Email sx={{ color: "secondary.main", fontSize: "30px" }} />,
    percent: "17%",
  },
  {
    scheme: "red_grey",
    numbers: "431,225",
    title: "Sales Obtained",
    icon: <ShoppingCart sx={{ color: "secondary.main", fontSize: "30px" }} />,
    percent: "27%",
  },
  {
    scheme: "pink_yellowGreen",
    numbers: "32,441",
    title: "New Clients",
    icon: <Person sx={{ color: "secondary.main", fontSize: "30px" }} />,

    percent: "13%",
  },
  {
    scheme: "nivo",
    numbers: "1,325,134",
    title: "Traffic Received",
    icon: <Traffic sx={{ color: "secondary.main", fontSize: "30px" }} />,
    percent: "47%",
  },
];
