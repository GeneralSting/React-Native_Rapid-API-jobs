import { View } from "react-native";
import styles from "./ScreenHeaderBtn.style";
import { Image, TouchableOpacity } from "react-native";

const SceenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default SceenHeaderBtn;
