import Mock from 'mockjs'

const news = [{
  title: '习近平在湖北省考察新冠肺炎疫情防控工作',
  source: '央视新闻网',
  commentNumber: 2912,
  time: '2020-03-10 22:40',
  tag: '置顶'
}, {
  title: '习近平在湖北省考察新冠肺炎疫情防控工作',
  source: '央视新闻网',
  commentNumber: 2912,
  time: '2020-03-10 22:40',
  tag: '置顶'
}, {
  title: '习近平在湖北省考察新冠肺炎疫情防控工作',
  source: '央视新闻网',
  commentNumber: 2912,
  time: '2020-03-10 22:40',
  tag: '置顶'
}, {
  title: '习近平在湖北省考察新冠肺炎疫情防控工作',
  source: '央视新闻网',
  commentNumber: 2912,
  time: '2020-03-10 22:40',
  tag: '置顶'
}, {
  title: '习近平在湖北省考察新冠肺炎疫情防控工作',
  source: '央视新闻网',
  commentNumber: 2912,
  time: '2020-03-10 22:40',
  tag: '置顶'
}, {
  title: '习近平在湖北省考察新冠肺炎疫情防控工作',
  source: '央视新闻网',
  commentNumber: 2912,
  time: '2020-03-10 22:40',
  tag: '置顶'
}, {
  title: '习近平在湖北省考察新冠肺炎疫情防控工作',
  source: '央视新闻网',
  commentNumber: 2912,
  time: '2020-03-10 22:40',
  tag: '置顶'
}]

Mock.mock('/api/news', () => {
  return {
    news
  }
})
