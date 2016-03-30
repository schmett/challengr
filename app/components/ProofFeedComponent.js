import React, { 
 View,
 Text,
 ListView,
 StyleSheet,
 TouchableHighlight,
 ScrollView
} from 'react-native'

import Proof from './Proof'


const ProofFeedComponent = ({allClosedChallenges, getClosedChallenges}) => {
  console.log('these are the challenges', allClosedChallenges)

  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  let dataSource = ds.cloneWithRows(allClosedChallenges)

  return (
    <ScrollView>
    	<ListView
        dataSource={dataSource}
        renderRow={(row) => <Proof {...row}/>}
      />
      <TouchableHighlight onPress={() => {getClosedChallenges(1, 10)}}>
        <Text>fetch Closed Challenges</Text>
      </TouchableHighlight>
    </ScrollView>
    )
}

export default ProofFeedComponent