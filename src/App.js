import {
  CssBaseline,
  Grid,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Paper,
} from "@material-ui/core";

function App() {
  return (
    <>
      <CssBaseline />
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        alignContent="stretch"
        wrap="nowrap"
      >
        <AppBar position="sticky" color="default">
          <Toolbar>
            <Container maxWidth="lg">
              <Typography variant="h5" component="h1" color="primary">
                Firebase Auth test
              </Typography>
            </Container>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Box marginTop={2}>
            <Typography variant="body1" color="initial" align="center">
              Firebase Auth test
            </Typography>
            <Paper></Paper>
          </Box>
        </Container>
      </Grid>
    </>
  );
}

export default App;
