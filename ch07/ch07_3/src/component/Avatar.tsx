import { TouchableView, TouchableViewProps } from "./TouchableView";
import { Image, ImageStyle, StyleProp } from "react-native";
import React, { FC } from "react";

export type AvatarProps = TouchableViewProps & {
  uri: string,
  size: number,
  imageStyle?: StyleProp<ImageStyle>
}

export const Avatar: FC<AvatarProps> = ({
  uri,
  size,
  imageStyle,
  ...touchableViewProps
}) => {
  return (
    <TouchableView {...touchableViewProps}>
      <Image source={{uri}}
            style={[imageStyle, {width: size, height: size, borderRadius: size/2}]}
      />
    </TouchableView>
  )
}
