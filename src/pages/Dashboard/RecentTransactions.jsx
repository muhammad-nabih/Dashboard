import {
  useTheme,
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Stack,
} from "@mui/material";
import { blue, red } from "@mui/material/colors";
import React from "react";

const transactions = [
  { id: "01e4dsaewf", user: "johndoe", date: "2021-09-01", amount: "$43.91" },
  { id: "0315dsaef", user: "jackdower", date: "2022-04-01", amount: "$133.45" },
  { id: "01e4dsaef", user: "aberdohnny", date: "2021-09-01", amount: "$43.95" },
  {
    id: "51034szvfew",
    user: "goodmanave",
    date: "2022-11-05",
    amount: "$200.95",
  },
  { id: "0a123sb", user: "stevebower", date: "2022-11-02", amount: "$13.55" },
  { id: "02f7ghaiow", user: "alice", date: "2023-02-14", amount: "$75.00" },
  { id: "03h8klbqpo", user: "bob", date: "2023-03-01", amount: "$50.25" },
  { id: "04i9mncrsq", user: "carol", date: "2023-04-22", amount: "$120.00" },
  { id: "05j0odetuv", user: "dave", date: "2023-05-18", amount: "$90.45" },
  { id: "06k1pfugwx", user: "eve", date: "2023-06-30", amount: "$65.30" },
];

export default function RecentTransactions() {
  const theme = useTheme();
  return (
    <Container component="main" aria-labelledby="main-header">
      <Box
        component="header"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          sx={{
            color: theme.palette.primary.main,
            marginBottom: "10px",
            padding: "11px",
            fontWeight: "bold",
          }}
          variant="h5"
          component="h1"
          id="main-header"
        >
          Recent Transactions
        </Typography>
      </Box>

      <Paper
        sx={{
          backgroundColor: theme.palette.background.paper,
          overflow: "auto",
          height: "400px",
        }}
        component="section"
        aria-labelledby="recent-transactions-title"
      >
        <Typography
          id="recent-transactions-title"
          variant="h5"
          component="h2"
          sx={{ display: "none" }}
        >
          Transactions List
        </Typography>

        {/* Start List  */}
        <List>
          {transactions.map((transaction) => {
            return (
              <React.Fragment key={transaction.id}>
                <ListItem
                  sx={{
                    height: "80px",
                  }}
                  secondaryAction={
                    <Typography sx={{ color: blue[500] }}>
                      {transaction.amount}
                    </Typography>
                  }
                >
                  <ListItemAvatar
                    sx={{
                      background: theme.palette.primary.main,
                      height: "60px",
                      width: "60px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "20px",
                      fontWeight: "bold",
                      color: theme.palette.primary.contrastText,
                    }}
                  >
                    {transaction.user.charAt(0).toUpperCase()}
                  </ListItemAvatar>

                  <ListItemText
                    id={transaction.user}
                    primary={transaction.user.toUpperCase() }
                    secondary={transaction.date}
                  />
                </ListItem>
          
              </React.Fragment>
            );
          })}
        </List>
      </Paper>
    </Container>
  );
}
