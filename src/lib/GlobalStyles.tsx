import Colors from './Colors';

export default {
  flexWrapper: {
    flex: 1
  },
  flatHeaderNavigation: {
    borderBottomWidth: 0,
    elevation: 0,
    backgroundColor: Colors.headerBackground
  },
  headerTitleStyle: {
    fontFamily: 'gotham-medium',
    fontSize: 19,
    color: 'rgb(1, 99, 72)',
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1
  },
  elevationShadow: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 1,
    elevation: 3
  },
  mediumShadow: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 3
  },
  subtleShadow: {
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1, // subtle shadow w/o bleed
    shadowOpacity: 1,
    elevation: 1
  }
};
