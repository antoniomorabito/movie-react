import { makeStyles } from "@mui/styles";

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
     menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        }
    },
    
}));