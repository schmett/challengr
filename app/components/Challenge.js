import React, {
  Text,
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native'

import { Actions } from 'react-native-router-flux'

const Challenge = ({key, onClick, title, id}) => {
  return (
    <TouchableHighlight onPress={()=> {
      onClick(id)
      Actions.camera()
    }} style={styles.listItem}>
      <Text style={styles.challengeText}>
        {title}
      </Text>
    </TouchableHighlight>
  )
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    borderColor: 'blue',
    borderWidth: 2,
    padding: 7.5
  },
  challengeText: {
    fontSize: 30 
  }
})

export default Challenge