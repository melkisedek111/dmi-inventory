import React, { ReactComponentElement, ReactNode } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    borderRadius: "10px"
};

type ICustomModal = {
    customButtonComponent?: React.ComponentProps<any>,
    customModalContent?: React.ComponentProps<any>
}

const CustomModal: React.FC<ICustomModal> = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = () => setOpen(false);

    return (
        <div>
            {/* {React.cloneElement(props.customButtonComponent, { onClick: handleOpen })} */}
            {
                props.customButtonComponent ? (
                    <props.customButtonComponent onClick={handleOpen} />
                ) : (
                    <Button onClick={handleOpen}>Open modal</Button>
                )
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box display="flex" justifyContent="right" marginBottom={3} paddingBottom={2} borderBottom="1px solid #DEDEDF">
                        <CloseIcon style={{ cursor: "pointer" }} onClick={handleClose} />
                    </Box>
                    <props.customModalContent />
                </Box>
            </Modal>
        </div>
    )
}

export default CustomModal