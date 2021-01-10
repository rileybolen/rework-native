import {StyleSheet, Dimensions} from 'react-native';

let heightSize1 = 0.005
let heightSize2 = 0.015
let heightSize3 = 0.03
let heightSize4 = 0.045
let heightSize5 = 0.06

let widthSize1 = 0.01
let widthSize2 = 0.03
let widthSize3 = 0.05
let widthSize4 = 0.07
let widthSize5 = 0.1

const baseStyles = StyleSheet.create({

    padding1: {
        paddingVertical: Dimensions.get('window').height * heightSize1,
        paddingHorizontal: Dimensions.get('window').width * widthSize1
    },
    padding2: {
        paddingVertical: Dimensions.get('window').height * heightSize2,
        paddingHorizontal: Dimensions.get('window').width * widthSize2
    },
    padding3: {
        paddingVertical: Dimensions.get('window').height * heightSize3,
        paddingHorizontal: Dimensions.get('window').width * widthSize3
    },
    padding4: {
        paddingVertical: Dimensions.get('window').height * heightSize4,
        paddingHorizontal: Dimensions.get('window').width * widthSize4
    },
    padding5: {
        paddingVertical: Dimensions.get('window').height * heightSize5,
        paddingHorizontal: Dimensions.get('window').width * widthSize5
    },

    paddingTop1: {
        paddingTop: Dimensions.get('window').height * heightSize1
    },
    paddingTop2: {
        paddingTop: Dimensions.get('window').height * heightSize2
    },
    paddingTop3: {
        paddingTop: Dimensions.get('window').height * heightSize3
    },
    paddingTop4: {
        paddingTop: Dimensions.get('window').height * heightSize4
    },
    paddingTop5: {
        paddingTop: Dimensions.get('window').height * heightSize5
    },

    paddingBottom1: {
        paddingBottom: Dimensions.get('window').height * heightSize1
    },
    paddingBottom2: {
        paddingBottom: Dimensions.get('window').height * heightSize2
    },
    paddingBottom3: {
        paddingBottom: Dimensions.get('window').height * heightSize3
    },
    paddingBottom4: {
        paddingBottom: Dimensions.get('window').height * heightSize4
    },
    paddingBottom5: {
        paddingBottom: Dimensions.get('window').height * heightSize5
    },

    paddingVertical1: {
        paddingVertical: Dimensions.get('window').height * heightSize1
    },
    paddingVertical2: {
        paddingVertical: Dimensions.get('window').height * heightSize2
    },
    paddingVertical3: {
        paddingVertical: Dimensions.get('window').height * heightSize3
    },
    paddingVertical4: {
        paddingVertical: Dimensions.get('window').height * heightSize4
    },
    paddingVertical5: {
        paddingVertical: Dimensions.get('window').height * heightSize5
    },

    paddingRight1: {
        paddingRight: Dimensions.get('window').width * widthSize1
    },
    paddingRight2: {
        paddingRight: Dimensions.get('window').width * widthSize2
    },
    paddingRight3: {
        paddingRight: Dimensions.get('window').width * widthSize3
    },
    paddingRight4: {
        paddingRight: Dimensions.get('window').width * widthSize4
    },
    paddingRight5: {
        paddingRight: Dimensions.get('window').width * widthSize5
    },

    paddingLeft1: {
        paddingLeft: Dimensions.get('window').width * widthSize1
    },
    paddingLeft2: {
        paddingLeft: Dimensions.get('window').width * widthSize2
    },
    paddingLeft3: {
        paddingLeft: Dimensions.get('window').width * widthSize3
    },
    paddingLeft4: {
        paddingLeft: Dimensions.get('window').width * widthSize4
    },
    paddingLeft5: {
        paddingLeft: Dimensions.get('window').width * widthSize5
    },

    paddingHorizontal1: {
        paddingHorizontal: Dimensions.get('window').width * widthSize1
    },
    paddingHorizontal2: {
        paddingHorizontal: Dimensions.get('window').width * widthSize2
    },
    paddingHorizontal3: {
        paddingHorizontal: Dimensions.get('window').width * widthSize3
    },
    paddingHorizontal4: {
        paddingHorizontal: Dimensions.get('window').width * widthSize4
    },
    paddingHorizontal5: {
        paddingHorizontal: Dimensions.get('window').width * widthSize5
    },

    margin1: {
        marginVertical: Dimensions.get('window').height * heightSize1,
        marginHorizontal: Dimensions.get('window').width * widthSize1
    },
    margin2: {
        marginVertical: Dimensions.get('window').height * heightSize2,
        marginHorizontal: Dimensions.get('window').width * widthSize2
    },
    margin3: {
        marginVertical: Dimensions.get('window').height * heightSize3,
        marginHorizontal: Dimensions.get('window').width * widthSize3
    },
    margin4: {
        marginVertical: Dimensions.get('window').height * heightSize4,
        marginHorizontal: Dimensions.get('window').width * widthSize4
    },
    margin5: {
        marginVertical: Dimensions.get('window').height * heightSize5,
        marginHorizontal: Dimensions.get('window').width * widthSize5
    },

    marginTop1: {
        marginTop: Dimensions.get('window').height * heightSize1
    },
    marginTop2: {
        marginTop: Dimensions.get('window').height * heightSize2
    },
    marginTop3: {
        marginTop: Dimensions.get('window').height * heightSize3
    },
    marginTop4: {
        marginTop: Dimensions.get('window').height * heightSize4
    },
    marginTop5: {
        marginTop: Dimensions.get('window').height * heightSize5
    },

    marginBottom1: {
        marginBottom: Dimensions.get('window').height * heightSize1
    },
    marginBottom2: {
        marginBottom: Dimensions.get('window').height * heightSize2
    },
    marginBottom3: {
        marginBottom: Dimensions.get('window').height * heightSize3
    },
    marginBottom4: {
        marginBottom: Dimensions.get('window').height * heightSize4
    },
    marginBottom5: {
        marginBottom: Dimensions.get('window').height * heightSize5
    },

    marginVertical1: {
        marginVertical: Dimensions.get('window').height * heightSize1
    },
    marginVertical2: {
        marginVertical: Dimensions.get('window').height * heightSize2
    },
    marginVertical3: {
        marginVertical: Dimensions.get('window').height * heightSize3
    },
    marginVertical4: {
        marginVertical: Dimensions.get('window').height * heightSize4
    },
    marginVertical5: {
        marginVertical: Dimensions.get('window').height * heightSize5
    },

    marginRight1: {
        marginRight: Dimensions.get('window').width * widthSize1
    },
    marginRight2: {
        marginRight: Dimensions.get('window').width * widthSize2
    },
    marginRight3: {
        marginRight: Dimensions.get('window').width * widthSize3
    },
    marginRight4: {
        marginRight: Dimensions.get('window').width * widthSize4
    },
    marginRight5: {
        marginRight: Dimensions.get('window').width * widthSize5
    },

    marginLeft1: {
        marginLeft: Dimensions.get('window').width * widthSize1
    },
    marginLeft2: {
        marginLeft: Dimensions.get('window').width * widthSize2
    },
    marginLeft3: {
        marginLeft: Dimensions.get('window').width * widthSize3
    },
    marginLeft4: {
        marginLeft: Dimensions.get('window').width * widthSize4
    },
    marginLeft5: {
        marginLeft: Dimensions.get('window').width * widthSize5
    },

    marginHorizontal1: {
        marginHorizontal: Dimensions.get('window').width * widthSize1
    },
    marginHorizontal2: {
        marginHorizontal: Dimensions.get('window').width * widthSize2
    },
    marginHorizontal3: {
        marginHorizontal: Dimensions.get('window').width * widthSize3
    },
    marginHorizontal4: {
        marginHorizontal: Dimensions.get('window').width * widthSize4
    },
    marginHorizontal5: {
        marginHorizontal: Dimensions.get('window').width * widthSize5
    },

    textLeft: {
        textAlign: 'left'
    },
    textCenter: {
        textAlign: 'center'
    },
    textRight: {
        textAlign: 'right'
    },

    flexRow: {
        flexDirection: 'row'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    flexRowReverse: {
        flexDirection: 'row-reverse'
    },
    flexColumnReverse: {
        flexDirection: 'column-reverse'
    },

    justifyCenter: {
        justifyContent: 'center'
    },
    justifyStart: {
        justifyContent: 'flex-start'
    },
    justifyEnd: {
        justifyContent: 'flex-end'
    },
    justifyAround: {
        justifyContent: 'space-around'
    },
    justifyBetween: {
        justifyContent: 'space-between'
    },
    justifyEvenly: {
        justifyContent: 'space-evenly'
    },

    alignCenter: {
        alignItems: 'center'
    },
    alignStretch: {
        alignItems: 'stretch'
    },
    alignStart: {
        alignItems: 'flex-start'
    },
    alignEnd: {
        alignItems: 'flex-end'
    },
    alignBaseline: {
        alignItems: 'baseline'
    },

    selfCenter: {
        alignSelf: 'center'
    },
    selfStretch: {
        alignSelf: 'stretch'
    },
    selfStart: {
        alignSelf: 'flex-start'
    },
    selfEnd: {
        alignSelf: 'flex-end'
    },
    selfBaseline: {
        alignSelf: 'baseline'
    },

    flex1: {
        flex: 1
    },
    flex2: {
        flex: 2
    },
    flex3: {
        flex: 3
    },
    flex4: {
        flex: 4
    },
    flex5: {
        flex: 5
    },

    fullWidth: {
        width: '100%'
    },

    fullHeight: {
        height: '100%'
    },
})

export {baseStyles}
