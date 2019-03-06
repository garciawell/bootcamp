import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
  columnWrapper: {
    marginHorizontal: metrics.baseMargin * 2,
    justifyContent: 'space-between',
  },
});

export default styles;
