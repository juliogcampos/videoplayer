import React from 'react';
import './App.css';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

/* Layout */
import { unstable_Box as Box } from '@material-ui/core/Box';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

/*  Lists */
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

/* Forms */
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

/* Colors */
import { green, lightGreen, blue, grey, purple } from '@material-ui/core/colors';

/* Icons */
import SearchIcon from '@material-ui/icons/Search';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import ViewCarousel from '@material-ui/icons/ViewCarousel'
import SupervisorAccount from '@material-ui/icons/SupervisorAccount'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'

/* Avatars */
import avatar1 from './static/images/avatar/1.jpg';
import avatar2 from './static/images/avatar/2.jpg';
import avatar3 from './static/images/avatar/3.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: grey[50],
    backgroundColor: grey[900],
  },
  palette: {
    type: 'dark',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  row: {
    padding: theme.spacing.unit * 2,
    color: grey[50],
  },
  head: {
    backgroundColor: grey[800],
    padding: theme.spacing.unit,
  },
  sidebar: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 0.25,
    padding: theme.spacing.unit * 2,
    color: grey[50],
    backgroundColor: grey[800],
  },
  inline: {
    display: 'inline',
  },
  marginTop: {
    marginTop: theme.spacing.unit * 1.5,
  },
  textField: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  textWhite: {
    color: grey[50],
  },
  textGrey: {
    color: grey[400],
  },
  textGreen: {
    color: lightGreen[500],
  },
  textSmall: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    fontSize: '85%'
  },
  bgLigthGrey: {
    padding: theme.spacing.unit,
    backgroundColor: grey[700],
    textAlign: 'center'
  },
  boxCommentHeader: {
    marginTop: theme.spacing.unit * 1,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    backgroundColor: grey[800],
  },
  borderBottom: {
    borderBottom: '1px dotted #212121'
  },
  button: {
    margin: theme.spacing.unit,
    textTransform: 'capitalize',
    color: grey[300],
    background: grey[900],
  },
  btnPrimary: {
    color: theme.palette.getContrastText(lightGreen[800]),
    backgroundColor: lightGreen[800],
    '&:hover': {
      backgroundColor: lightGreen[900]
    },
  },
  smallButton: {
    margin: theme.spacing.unit,
    textTransform: 'capitalize',
    color: grey[300],
    background: grey[700],
    padding: 0
  },
  iconRounded: {
    margin: theme.spacing.unit,
    borderColor: grey[300],
    borderRadius: '100%',
    backgroundColor: grey[900],
    display: 'flex',
    alignItems: 'center',
    padding: '0.25rem',
    width: '2rem',
    height: '2rem',
  },
  thumbUpAlt: {
    marginTop: theme.spacing.unit,
    '&:hover': {
      color: blue[500],
    },
    fontSize: 14,
  },
  search: {
    position: 'relative',
    width: '100%',
  },
  searchIcon: {
    width: theme.spacing.unit * 6,
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: grey[50],
    width: '100%',
  },
  inputInput: {
    backgroundColor: grey[900],
    paddingTop: theme.spacing.unit * 1.5,
    paddingLeft: theme.spacing.unit * 9,
    paddingBottom: theme.spacing.unit * 1.5,
    paddingRight: theme.spacing.unit * 2,
  },

});

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
    type: 'dark',
  },
  color: {
    primary: lightGreen
  },
  typography: { useNextVariants: true },
});

function App(props) {
  const { classes } = props;

  const comments = [
    {
      id: 1,
      name: 'Emery Wells',
      avatar: avatar1,
      position: '00:43',
      comment: 'This shoot looks nice and clean to me.',
      date: '10/01/2019',
      likes: 1
    },
    {
      id: 2,
      name: 'Anna Saints',
      avatar: avatar3,
      position: '01:22',
      comment: 'I would`nt cut here. I guess you were planning a zoom?',
      date: '21/04/2019',
      likes: 4
    },
    {
      id: 3,
      name: 'Victor Monroe',
      avatar: avatar2,
      position: '03:00',
      comment: 'Very stange music change here? I think we should keep the original track going #music',
      date: '12/03/2019',
      likes: 2
    }
  ];

  return (
    <div className={classes.root}>
      <Grid container>

        <Grid item xs={8} className={classNames(classes.head)}>
          <Box display='flex' alignItems="center">
            <Box flexGrow={1} justifyContent="flex-start">
              <Box>
                <Button className={classNames(classes.button)}>
                  <KeyboardArrowLeft className={classNames(classes.textGreen)} />
                  XFullSpot_Final.mov
                </Button>
              </Box>
            </Box>

            <Box flexGrow={1} justifyContent="center">
              <Box>
                <ViewCarousel className={classNames(classes.icon, classes.iconMedium)} />
              </Box>
            </Box>

            <Box justifyContent="flex-end">
              <Box>
                <Button variant="contained" className={classNames(classes.button, classes.btnPrimary)}>
                  Share
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4} className={classNames(classes.head)}>
          <Box display='flex' alignItems="center" flexDirection="row-reverse">
            <SupervisorAccount className={classNames(classes.icon, classes.iconRounded)} />
          </Box>
        </Grid>

        <Grid item xs={8}>
          <Grid item xs={12} className={classNames(classes.row, classes.marginTop)}>
            <iframe src="https://player.vimeo.com/video/182358676?title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </Grid>

          <Grid item xs={12} className={classNames(classes.boxCommentHeader)}>
            <form className={classes.container} noValidate autoComplete="off">
              <MuiThemeProvider theme={theme}>
                <Grid item xs={8} className={classes.textField}>
                  <TextField
                    id="standard-full-width"
                    label="Comment"
                    placeholder="Write your comment"
                    helperText=""
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                <Grid item xs={2} className={classes.textField}>
                  <TextField
                    id="time"
                    fullWidth
                    label="Position"
                    type="time"
                    defaultValue="00:30"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                </Grid>

                <Grid item xs={2} className={classes.textField}>
                  <Button variant="contained" className={classNames(classes.button, classes.btnPrimary)}>
                    Comment
                  </Button>
                </Grid>

              </MuiThemeProvider>
            </form>
          </Grid>
        </Grid>

        <Grid item xs={4} className={classes.sidebar} >
          <Box className={classNames(classes.bgLigthGrey, classes.borderBottom)}>
            File information
          </Box>

          <Grid container>
            <Grid item xs={6}>
              <Box className={classes.bgLigthGrey}>
                {comments.length} Comments
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box className={classes.bgLigthGrey}>
                Sort by newest
              </Box>
            </Grid>

            <Grid item xs={12}>

              <div className={classes.marginTop}>
                <div className={classes.search}>

                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>

                  <InputBase
                    placeholder="Search Comments"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
              </div>

              <List>
                {comments.map(item =>
                  <ListItem alignItems="flex-start" className={classNames(classes.borderBottom)}>
                    <ListItemAvatar>
                      <Avatar src={item.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography component="span" className={classNames(classes.textGreen, classes.inline)} >
                            {item.name}
                          </Typography>
                          <Typography component="span" className={classNames(classes.textGreen, classes.inline)} >
                            <Button className={classNames(classes.smallButton)}>
                              {item.position}
                            </Button>
                            {item.date}
                          </Typography>
                        </React.Fragment>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography component="span" className={classNames(classes.textWhite, classes.inline)} >
                            {item.comment}
                          </Typography>
                          <Typography component="span" className={classNames(classes.textGrey)} >
                            <ThumbUpAlt className={classNames(classes.thumbUpAlt)} /> {item.likes}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                )}
              </List>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

