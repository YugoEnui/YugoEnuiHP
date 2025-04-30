import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  Divider,
} from "@mui/material";

function BiographyPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontFamily: "serif",
          fontSize: {
            xs: "2rem",
            sm: "3rem",
          },
        }}
      >
        BIOGRAPHY
      </Typography>
      <Divider sx={{ my: 2 }} />

      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{
          fontSize: {
            xs: "1.2rem",
            sm: "1.5rem",
          },
        }}
      >
        江縫 祐吾
      </Typography>

      <Typography
        variant="subtitle1"
        color="text.secondary"
        gutterBottom
        sx={{
          fontSize: {
            xs: "0.9rem",
            sm: "1.2rem",
          },
        }}
      >
        Enui Yugo
      </Typography>

      <Box>
        <List>
          <ListItem
            sx={{
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
              },
            }}
          >
            1998 千葉県生まれ
          </ListItem>
          <ListItem
            sx={{
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
              },
            }}
          >
            2022 多摩美術大学 工芸学科 ガラス専攻 卒業
          </ListItem>
          <ListItem
            sx={{
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
              },
              pl: {
                xs: 6.5,
                sm: 8,
              },
            }}
          >
            NHKラジオ制作会社 入社
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{
          fontSize: {
            xs: "1.2rem",
            sm: "1.5rem",
          },
        }}
      >
        展示会
      </Typography>
      <List>
        <ListItem
          sx={{
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
            },
          }}
        >
          2020 タマビガラス展 みなとみらいギャラリー（神奈川）
        </ListItem>
        <ListItem
          sx={{
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
            },
          }}
        >
          2021 卒業制作展 スパイラル（東京）
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{
          fontSize: {
            xs: "1.2rem",
            sm: "1.5rem",
          },
        }}
      >
        受賞歴
      </Typography>
      <List>
        <ListItem
          sx={{
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
            },
          }}
        >
          2021 多摩美術大学 卒業制作展 優秀作品 選抜
        </ListItem>
        <ListItem
          sx={{
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
            },
            pl: {
              xs: 6.5,
              sm: 8,
            },
          }}
        >
          工芸都市高岡クラフトコンペティション 入選
        </ListItem>
      </List>
    </Container>
  );
}

export default BiographyPage;
