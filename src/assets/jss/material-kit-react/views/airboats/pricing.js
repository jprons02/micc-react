const pricing = {
  title: {
    //color: "#000000",
    fontSize: "26px",
    fontWeight: "300",
    margin: "10px",
  },
  detail: {
    color: "#bfbfbf",
    fontSize: "14px",
    fontWeight: "600",
    margin: "10px",
  },
  price: {
    fontSize: "55px",
    fontWeight: "900",
    lineHeight: "1",
    margin: "10px",
  },
  disclaimer: {
    fontSize: "12px",
    fontStyle: "italic",
  },
  //DESKTOP VIEW
  "@media screen and (min-width: 960px)": {
    title: { fontSize: "24px" },
    detail: { fontSize: "15px" },
    price: { fontSize: "65px" },
  },
};

export default pricing;
