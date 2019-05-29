export default () => ({
  container: {
    marginBottom: 16
  },
  title: {
    color: "#999",
    fontSize: 15,
    lineHeight: "18px"
  },
  price: {
    color: "#000",
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: "46px"
  },
  mainBlock: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  buy: {
    color: "#ff5200",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: "22px",
    background: "#e9e9e9",
    borderWidth: 0,
    padding: "7px 12px 8px",
    margin: 0,
    minHeight: 37,
    minWidth: 100,
    borderRadius: "11px",
    marginLeft: 20,
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#16bc00"
    }
  },
  counterContainer: {
    marginLeft: 20,
    display: "flex",
    alignItems: "center"
  },
  icon: {
    cursor: "pointer",
    display: "inline-block",
    border: "none",
    color: "#fff",
    width: 30,
    height: 30,
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: "30px",
    textAlign: "center",
    borderRadius: "50%",
    backgroundColor: "#277dff",
    padding: 0,

    "&:hover": {
      backgroundColor: "#16bc00"
    },
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.5)"
    },
    "&[disabled]": {
      backgroundColor: "#9996"
    }
  },
  sign: {
    transform: "translateY(-2px)",
    display: "inline-block"
  },
  count: {
    color: "#000",
    display: "inline-block",
    fontSize: 21,
    fontWeight: "700",
    lineHeight: "30px",
    padding: "0 2px",
    minWidth: 35,
    textAlign: "center"
  },
  weight: {
    color: "#9999",
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: "15px"
  }
});
