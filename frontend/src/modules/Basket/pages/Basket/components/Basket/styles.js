import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  hint: {
    fontSize: 20,
    fontWeight: "bold"
  },
  totalPrice: {
    fontSize: 24
  }
}));
