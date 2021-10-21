import React from 'react';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {UserPhoto} from '../UserPhoto'

import LogoSvg from '../../assets/logo.svg'

import { styles } from './styles';

export function Header(){
  return (
    <View style={styles.container}>
        <LogoSvg/>

        <View style={styles.logouButton}>
          <TouchableOpacity>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
          <UserPhoto imageUri='https://github.com/Alex-Ferreira-Santos.png'/>
        </View>
        
    </View>
  );
}