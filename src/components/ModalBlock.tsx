import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import {useStylesSignIn} from "../pages/SignIn";

interface ModalProps {
  title?: string;
  children: React.ReactNode;
  classes?: ReturnType<typeof useStylesSignIn>;
  visible?: boolean
  onClose: () => void;
}

export const ModalBlock: React.FC<ModalProps> = ({
  title,
  visible= false,
  children,
  onClose,
}): React.ReactElement | null => {

  if (!visible) {
    return null;
  }

  return (
    <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={onClose} color="secondary" aria-label="close">
          <CloseIcon style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};
