import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { bidActions } from "../../store/bidSlice";

interface Props {
  id?: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  modalOpen?: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BidItem: React.FC<Props> = ({
  id,
  title,
  description,
  longDescription,
  image,
  modalOpen = false,
  setModalOpen,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const dispatch = useDispatch();

  const theme = useTheme();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleUpdateBid = (id: string) => {
    dispatch(bidActions.setSelectedItem(id));
    setModalOpen(true);
  };

  const handleDeleteBid = async (id: string) => {
    await fetch(`/api/bids/${id}`, {
      method: "DELETE",
    });
    dispatch(bidActions.removeBid(id));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <>
            <Button onClick={() => handleUpdateBid(id as string)}>Edit</Button>
            <Button onClick={() => handleDeleteBid(id as string)}>
              <DeleteIcon />
            </Button>
          </>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        width="194"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ color: theme.palette.primary.contrastText }}>
          <Typography paragraph>{longDescription}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default BidItem;
