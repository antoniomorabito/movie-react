import { makeStyles } from "@mui/styles";


const drawerWidth = 240;

export default makeStyles((theme) => ({
    toolbar:{
        display: 'flex',
        height: '80px', 
        justifyContent: 'space-between',
        marginLeft: '240px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0',
            flexWrap: 'wrap',
        }
    },
    drawer:{
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0, 
        }
    },
    drawerPaper:{
        width: drawerWidth,
    },
     menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        }
    },
     linkButton: {
        '&:hover': {
            color: 'white !important',
            textDecoration: 'none'
        }
    }
    
}));