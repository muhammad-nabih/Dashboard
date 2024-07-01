import {
  useTheme,
  Container,
  Typography,
  Box,
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  Divider,
} from "@mui/material";
import { red } from "@mui/material/colors";

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
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          sx={{
            color: theme.palette.primary.main,
            marginBottom: "10px",
            padding:"11px",
            fontWeight: "bold",
          }}
          variant="h5"
        >
          Recent Transactions
        </Typography>
      </Box>

      <Paper
        sx={{
          backgroundColor: theme.palette.background.paper,
          overflow: "auto",
          height: "435px",
        }}
      >
        <List sx={{ padding: "0 " }}>
          {transactions.map((transaction) => (
            <div key={transaction.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: red[700] }}>
                    {transaction.user.charAt(0).toUpperCase()}
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={transaction.user.toUpperCase()}
                  secondary={transaction.date}
                />

                <ListItemSecondaryAction>
                  <IconButton edge="end" disabled>
                    <Typography variant="body1" color="textPrimary">
                      {transaction.amount}
                    </Typography>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
