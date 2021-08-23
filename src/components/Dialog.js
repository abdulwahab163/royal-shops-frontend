import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from './Button'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


const useStyles = makeStyles((theme) => ({
    buttonsContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,

    },
    cancel: {
        marginLeft: 10,
        marginRight: 10
    }

}));

export default function MaxWidthDialog({ open, setOpen, children, maxWidth, buttonWidth }) {
    const classes = useStyles();
    const [fullWidth, setFullWidth] = React.useState(true);


    return (
        <React.Fragment>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth ? maxWidth : 'md'}
                open={open}
                onClose={() => setOpen(!open)}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogContent>
                    {children}

                </DialogContent>
                <div style={{ width: buttonWidth ? buttonWidth : '50%' }} className={classes.buttonsContainer}>
                    <Button onClick={() => setOpen(false)} text="Cancel" width="100%" bgColor="#ab7171" className={classes.cancel} />
                    <Button onClick={() => setOpen(false)} text="Save" width="100%" className={classes.cancel} />
                </div>

            </Dialog>
        </React.Fragment>
    );
}
