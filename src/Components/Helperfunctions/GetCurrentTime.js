import moment from 'moment/moment'


export const GetCurrentTime = (timeformat) => {
   return moment().format('LLL')
}
