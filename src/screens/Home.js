import {useDispatch, useSelector} from 'react-redux';
import {deleteTodo} from '../redux/TodoSlice';

const {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} = require('react-native');

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const todolist = useSelector(state => state.todo?.todoList);
  
  const handleEdit = item => {
    navigation.navigate('AddTask', {type: 'edit', data: item});
  };
  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.heading}>ToDo Task List</Text>
        <FlatList
          data={todolist}
          style={styles.flatlistStyle}
          renderItem={({item, index}) => {
            return (
              <View style={styles.userListView}>
                <View>
                  <View style={styles.listingView}>
                    <Text style={styles.labelText}>Name: </Text>
                    <Text style={styles.itemText}>{item?.task}</Text>
                  </View>
                  <View style={styles.listingView}>
                    <Text style={styles.labelText}>Date: </Text>
                    <Text style={styles.itemText}>{item?.date}</Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity onPress={() => handleEdit(item)}>
                    <Text style={styles.editText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDelete(item.id)}>
                    <Text style={styles.editText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={() => navigation.navigate('AddTask')}>
          <Text style={styles.addText}>Go to Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomBtn: {
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'violet',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  flatlistStyle: {
    marginBottom: 50,
  },
  userListView: {
    borderWidth: 2,
    borderColor: 'violet',
    borderRadius: 6,
    marginHorizontal: 20,
    padding: 10,
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listingView: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  heading: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 20,
  },
});
