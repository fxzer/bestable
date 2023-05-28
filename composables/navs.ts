export function useNavs() {
  return useState('navs', () =>
    reactive([
      {
        key: 'brand',
        popper: true,
      },
      {
        popper: true,
        key: 'about',
      },
      {
        popper: false,
        key: 'lifeWay',
        path: '/lifeWay',
      },
     
    ]),
  )
}
