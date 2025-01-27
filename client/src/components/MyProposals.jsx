import React from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Card,
  Typography,
  CardMedia,
  Button,
  Container,
  CssBaseline,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import "./ProposeTrade.css";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 12,
    padding: "4px 8px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#e76f51",
    borderColor: "#e76f51",
    fontFamily: ["Roboto", "sans-serif"].join(","),
    "&:hover": {
      backgroundColor: "#e76f51",
      borderColor: "#e76f51",
      boxShadow: "none",
    },
  },
})(Button);

const BootstrapButton2 = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 12,
    padding: "4px 8px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#2a9d8f",
    borderColor: "#2a9d8f",
    fontFamily: ["Roboto", "sans-serif"].join(","),
    "&:hover": {
      backgroundColor: "#006F3C",
      borderColor: "#006F3C",
      boxShadow: "none",
    },
  },
})(Button);

const BootstrapButton3 = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 12,
    padding: "4px 8px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#4958b6",
    borderColor: "#4958b6",
    fontFamily: ["Roboto", "sans-serif"].join(","),
    "&:hover": {
      backgroundColor: "#EDCF3C",
      borderColor: "#EDCF3C",
      boxShadow: "none",
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: "20px",
  },
  heroContent: {
    padding: theme.spacing(8, 0, 14),
    paddingTop: "100px",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: "100%",
  },
  margin: {
    marginTop: "5px",
  },
}));

export default function MyProposals(props) {
  const classes = useStyles();
  const history = useHistory();

  function accept(card) {
    const updatedProposal = {
      ...props.tradesProposedToUser[card],
      is_accepted: true,
    };
    props.updateProposalStatus(updatedProposal);
  }

  function decline(id) {}

  function viewProposalTheyAccepted(card) {
    history.push(`accepted/${props.userProposals[card].id}`);
  }

  function viewProposalIAccepted(card) {
    history.push(`accepted/${props.tradesProposedToUser[card].id}`);
  }

  const userProposalCards = Array.from(
    Array(props.userProposals.length).keys()
  ); // an index counting the user's proposals from 0
  const tradesProposedToUserCards = Array.from(
    Array(props.tradesProposedToUser.length).keys()
  );

  return (
    <>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Typography variant="h5" align="left" color="textPrimary">
          Proposals
        </Typography>
        <Typography
          variant="subtitle1"
          align="left"
          color="textSecondary"
          paragraph
        >
          Trades proposed to me
        </Typography>

        <Container maxWidth="md">
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            className={classes.root}
          >
            {tradesProposedToUserCards.map((card) => (
              <>
                <Grid item xs={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={props.picturesOfListingsWantedFromUser[card]}
                      title="Image title"
                    />
                  </Card>
                </Grid>
                <Grid item xs={1}>
                  <AutorenewIcon style={{ fontSize: 20, color: "#4958b6" }} />
                </Grid>
                <Grid item xs={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={props.picturesOfListingsOfferedToUser[card]}
                      title="Image title"
                    />
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Typography gutterBottom variant="subtitle2">
                    {props.tradesProposedToUser[card].is_accepted
                      ? `Trade accepted!`
                      : `2 days ago`}
                  </Typography>
                  {props.tradesProposedToUser[card].is_accepted ? (
                    <BootstrapButton3
                      variant="contained"
                      color="primary"
                      disableRipple
                      className={classes.margin}
                      onClick={() => viewProposalIAccepted(card)}
                    >
                      View
                    </BootstrapButton3>
                  ) : (
                    <>
                      <BootstrapButton2
                        variant="contained"
                        color="primary"
                        disableRipple
                        className={classes.margin}
                        onClick={() => accept(card)}
                      >
                        Accept
                      </BootstrapButton2>
                      <BootstrapButton
                        variant="contained"
                        color="primary"
                        disableRipple
                        className={classes.margin}
                        onClick={() => decline(card)}
                      >
                        Decline
                      </BootstrapButton>
                    </>
                  )}
                </Grid>
              </>
            ))}
          </Grid>
        </Container>
        <Typography
          variant="subtitle1"
          align="left"
          color="textSecondary"
          paragraph
        >
          Trades I've proposed
        </Typography>

        <Container maxWidth="md">
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            className={classes.root}
          >
            {userProposalCards.map((card) => (
              <>
                <Grid item xs={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={props.picturesOfListingsByUser[card]}
                      title="Image title"
                    />
                  </Card>
                </Grid>
                <Grid item xs={1}>
                  <AutorenewIcon style={{ fontSize: 20, color: "#4958b6" }} />
                </Grid>
                <Grid item xs={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={props.picturesOfListingsWantedByUser[card]}
                      title="Image title"
                    />
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Typography gutterBottom variant="subtitle2">
                    {props.userProposals[card].is_accepted
                      ? `Accepted`
                      : `Pending`}
                  </Typography>
                  {props.userProposals[card].is_accepted ? (
                    <BootstrapButton3
                      variant="contained"
                      color="primary"
                      disableRipple
                      className={classes.margin}
                      onClick={() => viewProposalTheyAccepted(card)}
                    >
                      View
                    </BootstrapButton3>
                  ) : (
                    <BootstrapButton
                      variant="contained"
                      color="primary"
                      disableRipple
                      className={classes.margin}
                    >
                      Cancel
                    </BootstrapButton>
                  )}
                </Grid>
              </>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}
