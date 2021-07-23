import React from 'react'
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'

type ButtonIconProps = TouchableOpacityProps & {
  title: string;
}

export const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <View style={styles.iconWrapper} >
        <Image style={styles.icon} source={DiscordImg} />
      </View>

      <Text style={styles.title} >
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}