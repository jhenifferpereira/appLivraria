import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class Livraria extends Component{
  render(){
    const {livro, editora, autor, foto} = this.props.data;
    return(
      <View >
        
        <View style={styles.card}>
        
          <Text style={styles.titulo}>{livro}</Text>
          <Image
          source={{ uri: foto }}
          style={styles.capa}
          />
          <Text style={styles.sinopse}>{autor}</Text>
          <Text style={styles.sinopse}>{editora}</Text>

          <View style={styles.Areabotao}>
            <TouchableOpacity style={styles.botao} onPress={()=> alert(livro)}>
              <Text style={styles.botaoTexto}>LEIA MAIS</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        backgroundColor: '#FFF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3,
        padding: '10px',
        width: '30%',
        
        //margin: 'auto',
        marginTop: '10px',
        flexBasis: 'auto'
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: '10px',
    },
    capa: {
        height: '700px',
        
        zIndex: 2,
    },
    Areabotao: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9
    },
    botao: {
        width: 100,
        backgroundColor: '#09A6FF',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        marginTop: 50,

    },
    botaoTexto: {
        textAlign: 'center',
        color: '#FFF'
    },
    sinopse: {
        textAlign: 'justify',
        fontFamily: 'Helvet',
        color: 'black',
        fontSize: '14pt',
        padding: '10px',
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        backgroundColor: 'blue',

    }
});

export default Livraria;

