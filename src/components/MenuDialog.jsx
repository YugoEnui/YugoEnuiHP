import {
  Dialog,
  IconButton,
  Box,
  Typography,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

function MenuDialog({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      PaperProps={{
        sx: {
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", top: 16, right: 16 }}
      >
        <CloseIcon />
      </IconButton>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        {/* Homeに遷移 */}
        <MuiLink
          component={RouterLink}
          to="/"
          onClick={onClose}
          underline="none"
          color="inherit"
        >
          <Typography variant="h4" gutterBottom>
            YUGO ENUI
          </Typography>
        </MuiLink>

        {/* メニュー */}
        <Stack spacing={3} alignItems="center">
          {/* BIOGRAPHYに遷移 */}
          <MuiLink
            component={RouterLink}
            to="/biography"
            onClick={onClose}
            underline="none"
            color="inherit"
          >
            <Typography variant="h5">BIOGRAPHY</Typography>
          </MuiLink>

          {/* CONTACT → Instagramに外部リンク */}
          <MuiLink
            href="https://www.instagram.com/yugoenui"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            color="inherit"
          >
            <Typography variant="h5">SNS</Typography>
          </MuiLink>
        </Stack>
      </Box>
    </Dialog>
  );
}

MenuDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MenuDialog;
