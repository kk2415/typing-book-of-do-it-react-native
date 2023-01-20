import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native"
import {ComponentProps, FC} from 'react'

type TouchableOpacityProps = ComponentProps<typeof TouchableOpacity> //TouchableOpacity 컴포넌트의 속성 받아옴

export type TouchableViewProps = TouchableOpacityProps & {
  viewStyle?: StyleProp<ViewStyle>
};

export const TouchableView: FC<TouchableViewProps> = ({
  children,
  viewStyle,
  ...touchableProps
}) => {
  return (
    <TouchableOpacity {...touchableProps}>
      <View style={[viewStyle]}>{children}</View>
    </TouchableOpacity>
  )
}
