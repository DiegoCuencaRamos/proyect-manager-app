const moment = jest.requireActual('moment')

const myMoment = (timestamp = 0) => {
  return moment(timestamp)
}

Object.assign(myMoment, moment)

export default myMoment