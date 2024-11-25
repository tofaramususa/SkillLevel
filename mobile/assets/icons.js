import Leaderboard from "@/app/(tabs)/leaderboard";
import PageDetails from "@/app/(tabs)/home/pageDetails";
import { AntDesign, Feather } from "@expo/vector-icons";

export const icons1 = {
  home: (props) => <AntDesign name="home" size={20} {...props} />,
  leaderboard: (props) => <Feather name="compass" size={20} {...props} />,
  explore: (props) => <AntDesign name="checkcircle" size={20} {...props} />,
  profile: (props) => <AntDesign name="user" size={20} {...props} />,
};
