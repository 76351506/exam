import Home from '@/views/home';
import Detail from '@/views/home/detail';
import DetailPage from '@/views/home/detailPage';

export default [
  {
    path: "/home",
    component: Home,
    children: [{
      path: '/home/detail',
      component: Detail,
      children: [{
        path: '/home/detail/aaa',
        component: DetailPage
      }]
    }]
  },
]