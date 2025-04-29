import { Box, Grid } from "@mui/material";
import { useState } from "react";
import ImageDialog from "./components/ImageDialog";

// 画像データを配列で管理（拡張！）
import image1 from "../assets/SONY01302.jpg";
import image2 from "../assets/IMG_0236.jpg";
import image3 from "../assets/DSC_6.jpg";
import image4 from "../assets/DSC_2_0001.jpg";

const images = [
  {
    src: image1,
    title: "title",
    year: "20xx",
    materials: "Glass",
    size: "h.30.0 x w.30.0 x d.5.0 cm",
  },
  {
    src: image2,
    title: "title",
    year: "20xx",
    materials: "Glass, pigment",
    size: "h.30.0 x w.30.0 x d.5.0 cm",
  },
  {
    src: image3,
    title: "title",
    year: "20xx",
    materials: "Glass, pigment",
    size: "h.30.0 x w.30.0 x d.5.0 cm",
  },
  {
    src: image4,
    title: "title",
    year: "20xx",
    materials: "Glass, pigment",
    size: "h.30.0 x w.30.0 x d.5.0 cm",
  },
  // 必要に応じて続く！
];

function HomePage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      {/* 画像ギャラリー */}
      <Box
        sx={{
          pt: 8,
          maxWidth: "1000px",
          mx: "auto",
        }}
      >
        <Grid container spacing={2}>
          {images.map((img, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <Box
                component="img"
                src={img.src}
                alt={img.title}
                onClick={() => handleImageClick(img)}
                sx={{
                  width: "100%",
                  height: {
                    xs: "auto",
                    sm: "300px",
                  },
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: 3,
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ダイアログ */}
      <ImageDialog
        open={open}
        onClose={handleClose}
        imageData={selectedImage}
      />
    </>
  );
}

export default HomePage;
