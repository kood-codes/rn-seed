import { StyleSheet } from 'react-native';
import { Buttons, Colors, Sizing } from '../../styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary.base,
  },
  button: {
    ...Buttons.bar.primary,
    marginBottom: Sizing.md,
  },
  inlineButton: {
    flex: 1,
    marginHorizontal: Sizing.xs,
  },
  buttonText: {
    ...Buttons.barText.secondary,
  },
  buttonBar: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
});
