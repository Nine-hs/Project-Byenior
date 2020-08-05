import React, { Component } from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Carousel from './Component/Carousel'
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
const styles = theme => ({
    body: {
        marginRight: '0%',
        height: '100vh',
        backgroundColor: '#FFFAFA',
    },
    information: {
        marginRight: '0%',
        height: '50vh',
        backgroundColor: '#FFFAFA',
    },
    theme: {
        backgroundColor: '#FFFFFF',
    },
    shadow: {
        boxShadow: '-2px 7px 20px -12px rgba(0,0,0,0.99)'
    }
});

class Landing extends Component {

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment >
                <CssBaseline />
                <div className={classes.theme}>
                    <Container Fixed>
                        <div className={classes.shadow}>
                            <div className={classes.body}>
                                <Header />
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Carousel />
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={classes.information}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Typography style={{textAlign:'center',marginTop:15}} variant="h5">ประชาสัมพันธ์</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid item xs={4}>

                                    </Grid>
                                    <Grid item xs={4}>

                                    </Grid>
                                    <Grid item xs={4}>

                                    </Grid>
                                </Grid>

                            </div>
                            <div className={classes.body}>
                                <Grid container spacing={3}>
                                    <Grid item xs={4}>

                                    </Grid>
                                    <Grid item xs={4}>

                                    </Grid>
                                    <Grid item xs={4}>

                                    </Grid>
                                </Grid>
                            </div>
                            <Footer />
                        </div>
                    </Container>
                </div>

            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Landing);