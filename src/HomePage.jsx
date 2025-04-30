import { Box, Grid } from "@mui/material";
import { useState } from "react";
import ImageDialog from "./components/ImageDialog";

// 画像データを配列で管理（拡張！）
import image1 from "../assets/hu.jpg";
import image2 from "../assets/revival.jpg";
import image3 from "../assets/nagareru.jpg";
import image4 from "../assets/mizu.jpg";
import image5 from "../assets/henka.jpg";
import image6 from "../assets/view.jpg";
import image7 from "../assets/control.jpg";
import image8 from "../assets/kabin.jpg";
import image9 from "../assets/zyuuryoku.jpg";

const images = [
  {
    src: image1,
    title: "不",
    materials: "ガラス",
    size: "H180×W180×D180mm",
    link: "https://www.tamabi.ac.jp/works/28404",
  },
  {
    src: image2,
    title: "revival",
    materials: "ガラス",
    size: "H80×W80×D80mm",
    link: "https://www.ccis-toyama.or.jp/takaoka/craft/selection21/2021-024/?fbclid=PAZXh0bgNhZW0CMTEAAaexTM79Co_85LC0XgS8nglO8VwazheJskA76Adk0Lvko3TuWtVYSjcp4SnhpA_aem_wrUdJEmyGNstYHMza0r00A",
  },
  {
    src: image3,
    title: "流れる",
    materials: "板ガラス",
    size: "H105×W210×D5mm",
  },
  {
    src: image4,
    title: "水",
    materials: "板ガラス",
    size: "H100×W100×D100mm",
  },
  {
    src: image5,
    title: "変化",
    materials: "ガラス",
    size: "H445×W335×D60mm",
  },
  {
    src: image6,
    title: "view",
    materials: "ガラス",
    size: "H230×W90×D105mm",
  },
  {
    src: image7,
    title: "control",
    materials: "ガラス",
    size: "H290×W95×D100mm",
  },
  {
    src: image8,
    title: "花瓶",
    materials: "板ガラス",
    size: "H210×W90×D100mm",
  },
  {
    src: image9,
    title: "重力",
    materials: "ガラス　木材",
    size: "H1800×W300×D300mm",
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
