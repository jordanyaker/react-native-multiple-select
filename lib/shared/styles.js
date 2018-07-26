/*!
 * react-native-multi-select
 * Copyright(c) 2017 Mustapha Babatunde Oluwaleke
 * MIT Licensed
 */

export const colorPack = {
  backgroundColor: '#b1b1b1',
  borderColor: '#e9e9e9',
  danger: '#C62828',
  light: '#FFF',
  placeholderTextColor: '#A9A9A9',
  primary: '#00A5FF',
  primaryDark: '#215191',
  textPrimary: '#525966',
};

export default {
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
  },
  buttonText: {
    color: colorPack.light,
    fontSize: 14,
  },
  dropdownView: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    marginBottom: 10,
  },
  footerWrapper: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  footerWrapperNC: {
    flexDirection: 'column',
    width: 320,
  },
  greyButton: {
    backgroundColor: colorPack.backgroundColor,
    borderRadius: 5,
    elevation: 0,
    height: 40,
  },
  indicator: {
    color: colorPack.placeholderTextColor,
    fontSize: 30,
  },
  inputGroup: {
    alignItems: 'center',
    backgroundColor: colorPack.light,
    flexDirection: 'row',
    paddingLeft: 16,
  },
  selectedItem: {
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    flexDirection: 'row',
    margin: 3,
    paddingBottom: 3,
    paddingLeft: 15,
    paddingRight: 3,
    paddingTop: 3,
  },
  selectorView: (fixedHeight) => {
    const style = {
      elevation: 2,
      flexDirection: 'column',
      marginBottom: 10,
    };
    if (fixedHeight) {
      style.height = 250;
    }
    return style;
  },
  subSection: {
    alignItems: 'center',
    backgroundColor: colorPack.light,
    borderBottomWidth: 1,
    borderColor: colorPack.borderColor,
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 0,
    paddingRight: 20,
  },
};
