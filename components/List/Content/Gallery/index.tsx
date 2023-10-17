import Item from './Item/index'
import styles from './Gallery.module.css'

export default function Galery() {
  return (
    <div className={styles.f1oa95gk}>
      <div className={styles.l1icvf1x}>
        <div className={styles.c1yo0219}>
          <div>
            <div className={styles.g14v8520}>
              {Items.map((item) => (
                <Item key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Items = [
  {
    id: '872082150412967376',
    content: '숲 속에서 즐기는 캠핑, 감성인테리어 카라반',
    image: '/images/872082150412967376.png',
    location: 'Naega-myeon, Ganghwa-gun, South Korea',
    distance: '2,712 km away',
    free: 'November 5 - November 10',
    price: 197
  },
  {
    id: '655396027411709082',
    content: 'Stunning 2 Bedroom SeaView Pool Villa',
    image: '/images/655396027411709082.jpeg',
    location: 'Ko Pha-ngan Sub-district, Surat Thani, Thailand',
    distance: '1,012 km away',
    free: 'November 5 - November 10',
    price: 850
  },
  {
    id: '9767383',
    content: 'SAFARI HOME near beach, 1br, pool',
    image: '/images/9767383.png',
    location: 'Amphoe Thalang, Chang Wat Phuket, Thailand',
    distance: '1,062 km away',
    free: 'November 5 - November 10',
    price: 640
  },
  {
    id: '6853427',
    content: '2-Bed Hi-Class Apartment with a Car',
    image: '/images/6853427.png',
    location: 'Tambon Kathu, Chang Wat Phuket, Thailand',
    distance: '2,415 km away',
    free: 'November 5 - November 10',
    price: 473
  },
  {
    id: '578072673038532316',
    content: 'Villa Hedone',
    image: '/images/578072673038532316.png',
    location: 'Saint-Raphaël, Provence-Alpes-Côte d\'Azur, France',
    distance: '56,515 km away',
    free: 'November 5 - November 10',
    price: 786
  },
  {
    id: '47264401',
    content: 'Lovely Queen Studio in Boca (Pool-Gym-Parking)',
    image: '/images/47264401.png',
    location: 'Boca Raton, Florida, United States',
    distance: '32,540 km away',
    free: 'November 5 - November 10',
    price: 896
  },
  {
    id: '4462196',
    content: 'Golden Cave Suites Hotel',
    image: '/images/4462196.png',
    location: 'Ürgüp, Nevşehir, Turkey',
    distance: '30,350 km away',
    free: 'November 5 - November 10',
    price: 874
  },
  {
    id: '772009811441731348',
    content: 'The Blue Beach House, 3 * accommodation 5 * view',
    image: '/images/772009811441731348.jpeg',
    location: 'Ledge Point, Western Australia, Australia',
    distance: '67,984 km away',
    free: 'November 5 - November 10',
    price: 990
  },
  {
    id: '974297888832520458',
    content: 'Stroll to shore | Dogs Okay | Family & Friends!',
    image: '/images/974297888832520458.png',
    location: 'Ocean Shores, Washington, United States',
    distance: '45,430 km way',
    free: 'November 5 - November 10',
    price: 987
  },
  {
    id: '28178518',
    content: 'The Cupole',
    image: '/images/28178518.png',
    location: 'Santa Flavia, Palermo,Sicily, Italy',
    distance: '26,738 km away',
    free: 'November 5 - November 10',
    price: 872
  },
  {
    id: '643868023815439216',
    content: 'The Owl Nest - SevenOaks Treehouses',
    image: '/images/643868023815439216.png',
    location: 'Ain El Tefaha, Mount Lebanon Governorate, Lebanon',
    distance: '30,600 km away',
    free: 'November 5 - November 10',
    price: 999
  },

  {
    id: '20807074',
    content: 'Taal Maranan\'s Farmville Inc. - TIGER Room',
    image: '/images/20807074.jpeg',
    location: 'Taal, Philippines',
    distance: '1,342 km away',
    free: 'November 5 - November 10',
    price: 785
  },
  {
    id: '914188925022923533',
    content: 'Kaafal - Himalyan Berry Shaped Bedrooms; Berry #2',
    image: '/images/914188925022923533.png',
    location: 'Makku Math, Uttarakhand, India',
    distance: '19,750 km away',
    free: 'November 5 - November 10',
    price: 970
  },
]