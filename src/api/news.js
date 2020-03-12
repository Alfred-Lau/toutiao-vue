// import data from './data'
import request from '@/utils/request'

export const getNews = async () => {
  const res = await request('/api/news')
  return res
}
