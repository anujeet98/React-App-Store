import { useContext } from "react";
import Card from "../UI/Card";
import CandyItem from "./Candy/CandyItem";
import classes from "./MainBody.module.css";
import ProductContext from "../../contexts/store/product-context";

const MainBody = () => {
  const candyCtx = useContext(ProductContext);

  const candyList = candyCtx.items.map((item) => (
    <CandyItem key={item.id} item={item} />
  ));
  return (
    candyList.length > 0 && (
      <Card className={classes.outer}>
        <ul className={classes.list}>{candyList}</ul>
      </Card>
    )
  );
};

export default MainBody;
