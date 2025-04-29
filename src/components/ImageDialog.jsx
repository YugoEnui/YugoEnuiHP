import { Dialog, DialogContent, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

function ImageDialog({ open, onClose, imageData }) {
  if (!imageData) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent sx={{ textAlign: "center", position: "relative" }}>
        {/* タイトル */}
        <Typography
          fontWeight="bold"
          gutterBottom
          color="textSecondary"
          sx={{
            fontFamily: "'Noto Serif JP', serif",
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
            },
          }}
        >
          {imageData.title}
        </Typography>

        {/* 画像 */}
        <Box
          component="img"
          src={imageData.src}
          alt={imageData.title}
          sx={{
            width: "100%",
            height: "auto",
            mb: 2,
          }}
        />

        {/* 年、素材、サイズ */}
        <Typography variant="body2" color="textSecondary">
          {imageData.year}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {imageData.materials}
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={2}>
          {imageData.size}
        </Typography>

        {/* Closeボタン */}
        <Typography
          variant="button"
          color="textSecondary"
          sx={{ mt: 2, display: "block", cursor: "pointer" }}
          onClick={onClose}
        >
          close
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

ImageDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageData: PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    materials: PropTypes.string,
    size: PropTypes.string,
  }),
};

export default ImageDialog;
