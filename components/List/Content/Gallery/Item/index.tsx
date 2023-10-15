import styles from './Item.module.css'

interface Item {
  id: string,
  content: string,
  image: string,
  location: string,
  distance: string,
  free: string,
  price: number
}
export default function Item({item}: {item: Item}) {
  return (
    <div>
      <div className={styles.c4mnd7m}>
        <div className={styles.c1pbo4kt}>
          <div>
            <div className={styles.m1cp3yuo}>
              <div>
                <div className={styles.awuxh4x}>
                  <div className={styles.cw9aemg}>
                    <span>
                      <span className={styles.s15ewrxi}></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.g1wiliwt}>
              <span>
                <span className={styles.s15ewrxi}></span>
              </span>
              <div className={styles.a3g92ry}>
                <span>
                  <span className={styles.s15ewrxi}></span>
                </span>
              </div>
              <div className={styles.fb4nyux}>
                <span>
                  <span className={styles.s15ewrxi}></span>
                </span>
              </div>
              <div className={styles.fb4nyux}>
                <span>
                  <span className={styles.s15ewrxi}></span>
                </span>
              </div>
              <div className={styles.pc0djro}>
                <span>
                  <span className={styles.s15ewrxi}></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.c1l1h97y}>
          <div>
            <meta item-prop="name" content={item.content} />
            <meta item-prop="position" content="1" />
            <meta item-prop="url" content="" />
            <div>
              <div>
                <div className={styles.cy5jw6o}>
                  <a rel="noopener noreferrer nofollow" target={`listing_${item.id}`} href={`/room/${item.id}`} className={styles.bn2bl2p}></a>
                  <div className={styles.lxq01kf}>
                    <div className={styles.m1v28t5c}>
                      <div className={styles.c14dgvke}>
                        <div className={styles.rd7fm2t}>
                          <div className={styles.c18vjgz6}>
                            <div className={styles.o1q97y5m}>
                              <div className={styles.tsz9f4o}>
                                <div className={styles.t1p13dzz}></div>
                                <div className={styles.ts9x1g6}>
                                  <div className={styles.ckqgked}>
                                    <button type="button" className={styles.vq7srz5}>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                                        <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.m1dum4mk}>
                                <div className={styles.m1tlldn6}>
                                  <div className={styles.s1tdgjmu}>
                                    <button type="button" className={styles.cz6qhuf}>
                                      <span className={styles.isqgmsg}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                                          <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
                                        </svg>
                                      </span>
                                    </button>
                                  </div>
                                </div>
                                <div className={styles.ms83rji}>
                                  <div className={styles.s1tdgjmu}>
                                    <button type="button" className={styles.cz6qhuf}>
                                      <span className={styles.isqgmsg}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                                          <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
                                        </svg>
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.b1tv82fw}>
                                <div className={styles.bycbjmy}></div>
                                <div className={styles.balhpdq}>
                                  <div className={styles.c1pa2gfg}>
                                    <div className={styles.d7azc6i}>
                                      <div className={styles.d1vla4cf}>
                                        <span className={styles.d1g6z6mb}></span>
                                        <span className={styles.d1g6z6mb}></span>
                                        <span className={styles.d1g6z6mb}></span>
                                        <span className={styles.d1g6z6mb2}></span>
                                        <span className={styles.d1g6z6mb3}></span>
                                        <span className={styles.d1g6z6mb3}></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.b18glxm4}></div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.s1yvqyx7}>
                            <div>
                              <div className={styles.awuxh4x}>
                                <div className={styles.cw9aemg}>
                                  <div className={styles.c14whb16}>
                                    <a aria-hidden="true" className={styles.rfexzly} href={`/room/${item.id}`} rel="noopener noreferrer nofollow" target={`listing_${item.id}`}>
                                      <div className={styles.cjv59qb}>
                                        <div className={styles.bmwtyu7}>
                                          <picture>
                                            <img className={styles.itu7ddv} aria-hidden="true" element-timing="LCP-target" fetch-priority="high" loading="eager" src={item.image} />
                                          </picture>
                                          <div className={styles.rsb5yse}></div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.c1v0rf5q}>
                      <div className={styles.t1jojoys}>{item.location}</div>
                      <div className={styles.s1cjsi4j} data-testid="listing-card-subtitle">
                        <span>
                          <span>{item.distance}</span>
                        </span>
                      </div>
                      <div className={styles.s1cjsi4j}>
                        <span>
                          <span>{item.free}</span>
                        </span>
                      </div>
                      <div className={styles.pquyp1l}>
                        <div>
                          <div className={styles._i5duul}>
                            <span className={styles._14y1gc}>
                              <div className={styles._1jo4hgw} aria-hidden="true">
                                <span className={styles._tyxjp1}>{item.price} USDT&nbsp;</span>
                                <span className={styles._r1nvod}>/ night</span>
                              </div>
                              <span className={styles.a8jt5op}>{item.price} USDT/night</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}