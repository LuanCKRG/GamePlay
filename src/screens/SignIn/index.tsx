import React from 'react'
import { View, Text, Image, StatusBar } from 'react-native'
import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'

export const SignIn: React.FC = () => {


  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />

      <Image style={styles.image} source={IllustrationImg} resizeMode={'stretch'} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`} suas jogatinas {`\n`} facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos  para jogar seu games {`\n`} facilmente favoritos com seus amigos
        </Text>

        <ButtonIcon title={'Entrar com Discord'} activeOpacity={0.7} />
      </View>

    </View>
  )
}