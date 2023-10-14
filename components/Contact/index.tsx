import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.s1t6p8ja}>
      <div className={styles.c1yo0219}>
        <div>
          <div className={styles.c1dbtjd2}>
            <div className={styles.cff48sj}>
              <div>
                <h2 className={styles.h1m5veyr}>
                Inspiration for future vacations
                </h2>
                <div>
                  <div className={styles.t13ci49g}>
                    <div className={styles.t1a99pzb}>
                      <div className={styles.tnlo7wt}>
                        {tabs.map((tab, index) => (
                          <button type="button" key={index} className={`${tab.isActive ? styles.dirltr : ''} ${styles.t1jiriwb} ${tab.isActive ? styles.srultre : ''}`}>
                            {tab.text}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className={styles.tmtqv4g}></div>
                  </div>
                  <div>
                    <div className={styles.t1krvce0}>
                      <ul className={styles.g1wukxve}>
                      {services.map((item, index) => (
                        <li key={index}>
                          <a className={styles.i1451cs8} href={item.href}>
                            <div className={`${styles.t1q5t6x1} ${styles.t1okteu}`}>{item.title}</div>
                            <div className={`${styles.t1q5t6x1} ${styles.d1rpr02g}`}>
                            Pet-friendly rental accommodation
                            </div>
                          </a>
                        </li>
                      ))}
                        <li>
                          <button type="button" className={styles.c13aok98}>
                            <span>Show more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                              <path fill="none" d="M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12"></path>
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.c1yo0219}>
        {/* TODO */}
      </div>
    </div>
  )
}

const tabs = [
  {
    text: 'Popular',
    isActive: true
  },
  {
    text: 'Culture and arts',
    isActive: false
  },
  {
    text: 'Out side',
    isActive: false
  },
  {
    text: 'Mountains',
    isActive: false
  },
  {
    text: 'Beach',
    isActive: false
  },
  {
    text: 'Category',
    isActive: false
  },
  {
    text: 'Things to experience',
    isActive: false
  }
]

const services = [
  {
    href: 'https://www.airbnb.com.vn/canmore-canada/stays/pet-friendly',
    title: 'Canmore',
    desc: 'Pet-friendly rental accommodation'
  },
  {
    href: 'https://www.airbnb.com.vn/benalmadena-spain/stays/houses',
    title: 'Benalmádena',
    desc: 'House for rent'
  },
  {
    href: 'https://www.airbnb.com.vn/marbella-spain/stays/villas',
    title: 'Marbella',
    desc: 'Villa for rent'
  },
  {
    href: 'https://www.airbnb.com.vn/mijas-spain/stays/houses',
    title: 'Mijas',
    desc: 'House for rent'
  },
  {
    href: 'https://www.airbnb.com.vn/prescott-az/stays/pet-friendly',
    title: 'Prescott',
    desc: 'Pet-friendly rental accommodation'
  },
  {
    href: 'https://www.airbnb.com.vn/scottsdale-az/stays/pet-friendly',
    title: 'Scottsdale',
    desc: 'Pet-friendly rental accommodation'
  },
  {
    href: 'https://www.airbnb.com.vn/tucson-az/stays/houses',
    title: 'Tucson',
    desc: 'House for rent'
  },
  {
    href: 'https://www.airbnb.com.vn/jasper-ar/stays',
    title: 'Jasper',
    desc: 'Vacation home for rent'
  },
  {
    href: 'https://www.airbnb.com.vn/mountain-view-ar/stays',
    title: 'Mountain View',
    desc: 'Vacation home for rent'
  },
  {
    href: 'https://www.airbnb.com.vn/devonport-australia/stays/cottages',
    title: 'Devonport',
    desc: 'Vacation home for rent'
  },
  {
    href: 'https://www.airbnb.com.vn/mallacoota-australia/stays',
    title: 'Mallacoota',
    desc: 'Vacation home for rent'
  },
  {
    href: 'https://www.airbnb.com.vn/ibiza-spain/stays',
    title: 'Ibiza',
    desc: 'Vacation home for rent'
  },
  {
    href: 'https://www.airbnb.com.vn/anaheim-ca/stays/apartments',
    title: 'Anaheim',
    desc: 'Apartment for rent'
  },
  {
    href: 'https://www.airbnb.com.vn/monterey-ca/stays/cabins',
    title: 'Monterey',
    desc: 'Cabin for rent'
  },
  {
    href: 'https://www.airbnb.com.vn/paso-robles-ca/stays',
    title: 'Paso Robles',
    desc: 'Vacation home for rent'
  },
  {
    href: 'https://www.airbnb.com.vn/santa-barbara-ca/stays/houses',
    title: 'Santa Barbara',
    desc: 'House for rent'
  },
  {
    href: 'https://www.airbnb.com.vn/sonoma-ca/stays',
    title: 'Sonoma',
    desc: 'Vacation home for rent'
  }
]