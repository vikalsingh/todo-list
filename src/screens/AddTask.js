import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo, editTodo} from '../redux/TodoSlice';

const AddTask = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState(
    route.params?.type == 'edit' ? route.params.data.task : '',
  );
  const [date, setDate] = useState(
    route.params?.type == 'edit' ? route.params.data.date : '',
  );

  const handleSubmit = () => {
    if (route.params?.type == 'edit') {
      dispatch(
        editTodo({
          id: route.params.data.id,
          task: task,
          date: date,
        }),
      );
    } else {
      const id = Math.random();
      dispatch(addTodo({id, task, date}));
    }

    navigation.goBack();
  };
  return (
    <View>
      <Text style={styles.heading}>Add task</Text>

      <View>
        <TextInput
          placeholder="Task..."
          value={task}
          onChangeText={e => setTask(e)}
          style={styles.inputStyle}
        />
        <TextInput
          placeholder="Due Date..."
          value={date}
          onChangeText={e => setDate(e)}
          style={styles.inputStyle}
        />
        

        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    alignSelf: 'center',
  },
  inputStyle: {
    borderWidth: 2,
    borderColor: 'violet',
    marginHorizontal: 20,
    borderRadius: 8,
    paddingLeft: 12,
    marginVertical: 20,
  },
});
