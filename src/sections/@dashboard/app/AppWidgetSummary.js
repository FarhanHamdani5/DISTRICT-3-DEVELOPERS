// @mui
import PropTypes from 'prop-types';
import { Card, Typography, CardMedia, Button } from '@mui/material';
// utils
// components

// ----------------------------------------------------------------------

// const IconWrapperStyle = styled('div')(({ theme }) => ({
//   margin: 'auto',
//   display: 'flex',
//   borderRadius: '50%',
//   alignItems: 'center',
//   width: theme.spacing(8),
//   height: theme.spacing(8),
//   justifyContent: 'center',
//   marginBottom: theme.spacing(3),
// }));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
  unit: PropTypes.string
};

export default function AppWidgetSummary({ title, total, unit, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        pb:3,
        border:0,
        boxShadow: 3,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
       <CardMedia
        component="img"
        height="194"
        image="\static\mock-images\covers\pexels-expect-best-323772.jpg"
        alt="picture"
        sx={{
          mb:3
        }}

      />
      {/* <IconWrapperStyle
        sx={{
          color: (theme) => theme.palette[color].dark
          // backgroundImage: (theme) =>
          //   `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
          //     theme.palette[color].dark,
          //     0.24
          //   )} 100%)`,
        }}
      >
        <Iconify icon={icon} width={50} height={50} sx={{opacity: 0.60}} />
      </IconWrapperStyle> */}

      <Typography variant="h3">{total} {unit}</Typography>

      <Typography variant="h6" sx={{ px:4, py:2, opacity: 0.50}}>
        {title}
      </Typography>

      <Button variant="contained">
            view
          </Button>
    </Card>
  );
}
