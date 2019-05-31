import axios from '@/libs/api.request'

export const handleQueryReport = ({no}) => {
  return axios.request({
    url: 'api/report',
    params: {
      no
    },
    method: 'get'
  })
}
