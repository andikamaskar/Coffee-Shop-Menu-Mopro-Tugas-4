import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 12,
    backgroundColor: "#F2E5D7",
  },

  info: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#4E342E", 
    marginBottom: 4,
  },

  desc: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#6D4C41", 
    lineHeight: 18,
  },
});
