import { Image } from 'antd'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <div className={styles.content}>
          <div>
            <header view-transition-element="true" className={styles.headerContainer}>
              <div view-transition-element="true">
                <div className={styles.logoContainer}>
                  <a aria-label="Trang chủ Skymate Marketplace" href="/">
                    <div className={styles.svgContainerPc}>
                      <Image
                        src={`/logo-text.svg`}
                        alt="mobileMenu"
                        width={187}
                        height={32}
                        preview={{ visible: false, mask: false }}
                      />
                    </div>
                    <div className={styles.svgContainerMobile}>
                      <Image
                        src={`/logo-text.svg`}
                        alt="mobileMenu"
                        width={30}
                        height={32}
                        preview={{ visible: false, mask: false }}
                      />
                    </div>
                  </a>
                </div>
                <div className={styles.menuContainer}>
                  <div data-searchbar-open="false" className={styles.menu}>
                    <div>
                      <span className={styles.littleSearchLabel}>Searching</span>
                      <span className={styles.searchOptions}>
                        <button className={styles.randomPlace} data-index="0" type="button">
                          <span>Location</span>
                          <div className={styles.randomPlaceText}>Any Location</div>
                        </button>
                        <span className={styles.menuLine}></span>
                        <button className={styles.randomPlace} data-index="1" type="button">
                          <span>Nhận phòng/Trả phòng</span>
                          <div className={styles.randomPlaceText}>Any Week</div>
                        </button>
                        <span className={styles.menuLine}></span>
                        <button className={styles.randomPlace} data-index="2" type="button">
                          <span>Khách</span>
                          <div className={styles.randomPlaceTextLast}>More guest</div>
                          <div className={styles.littleSearchIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                              <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                            </svg>
                          </div>
                        </button>
                      </span>
                      <div className={styles.searchIptContainer}></div>
                    </div>
                  </div>
                  <div className={styles.searchBox}>
                    <div>
                      <div>
                        <div className={styles.formContainer}>
                          <form action="/s/homes" method="get" role="search">
                            <div view-transition-element="true">
                              <div role="tablist" aria-label="Chúng tôi có thể giúp gì cho bạn?" aria-owns="search-block-tab-STAYS search-block-tab-EXPERIENCES">
                                <div className={styles.c1d9xp39}>
                                  <button name="refinement_paths[]" role="tab" aria-selected="true" aria-controls="search-tabpanel" type="button">
                                    <div className={styles.t1763h34}>
                                      <span className={styles.tsbew3q} data-content="Chỗ ở">Chỗ ở</span>
                                    </div>
                                  </button>
                                  <input type="hidden" name="refinement_paths[]" value="/homes" />
                                </div>
                                <div>
                                  <button className={styles.searchBlockTab} type="button">
                                    <div className={styles.t1763h34}>
                                      <span className={styles.tsbew3q}>Trải nghiệm</span>
                                    </div>
                                  </button>
                                </div>
                              </div>
                              <div className={styles.wo5dbi6}>
                                <a href="/s/experiences/online" className={styles.cpy18wl}>
                                  <div className={styles.c14qz3vc}>
                                    <div className={styles.tyg688f} data-content="Trải nghiệm trực tuyến">Trải nghiệm trực tuyến</div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className={styles.searchTabpanel}>
                              <div view-transition-element="true" className={styles.i10uvpq9}>
                                <div className={styles.qam9yc8}>
                                  <div className={styles.ifji5s5}>
                                    <label className={styles.i1ns5d4x}>
                                      <div className={styles.cdhcwpf}>
                                        <div className={styles.i1qjycmm}>Location</div>
                                        <input className={styles.iluujbk} name="query" placeholder="Tìm kiếm điểm đến" />
                                      </div>
                                    </label>
                                  </div>
                                  <div className={styles.coy2xq9}>
                                    <section>
                                      <div>
                                        <div className={styles.a1r5sk5h}>
                                          <div className={styles.lidqja1}>
                                            <div>
                                              <div className={styles.l8ocxoz}>
                                                <div className={styles.locationInspirationTitleID}>Tìm kiếm theo khu vực</div>
                                                <div>
                                                  <div className={styles.dc1upfu}>
                                                    <div className={styles.d1i06yza}>
                                                      <div className={styles.cxpkp2s}>
                                                        <button className={styles.c1j36rnj} type="button">
                                                          <img className={styles.iyo6p2p} alt="" src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg" />
                                                          <span className={styles.a8jt5op}>Tìm kiếm linh hoạt</span>
                                                        </button>
                                                        <div>
                                                          <div className={styles.o1939qvs}>Tìm kiếm linh hoạt</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className={styles.d1i06yza}>
                                                      <div className={styles.cxpkp2s}>
                                                        <button className={styles.c1j36rnj} aria-pressed="false" type="button">
                                                          <img className={styles.iyo6p2p} alt="" src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320" />
                                                          <span className={styles.a8jt5op}>Châu Âu</span>
                                                        </button>
                                                        <div>
                                                          <div className={styles.o1939qvs} aria-hidden="true">Châu Âu</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className={styles.d1i06yza}>
                                                      <div className={styles.cxpkp2s}>
                                                        <button className={styles.c1j36rnj} aria-pressed="false" type="button">
                                                          <img className={styles.iyo6p2p} alt="" src="https://a0.muscache.com/im/pictures/c193e77c-0b2b-4f76-8101-b869348d8fc4.jpg?im_w=320" />
                                                          <span className={styles.a8jt5op}>Hàn Quốc</span>
                                                        </button>
                                                        <div>
                                                          <div className={styles.o1939qvs} aria-hidden="true">Hàn Quốc</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className={styles.d1i06yza}>
                                                      <div className={styles.cxpkp2s}>
                                                        <button className={styles.c1j36rnj} aria-pressed="false" type="button">
                                                          <img className={styles.iyo6p2p} alt="" src="https://a0.muscache.com/im/pictures/42a1fb0f-214c-41ec-b9d7-135fbbdb8316.jpg?im_w=320" />
                                                          <span className={styles.a8jt5op}>Úc</span>
                                                        </button>
                                                        <div>
                                                          <div className={styles.o1939qvs} aria-hidden="true">Úc</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className={styles.d1i06yza}>
                                                      <div className={styles.cxpkp2s}>
                                                        <button className={styles.c1j36rnj} aria-pressed="false" type="button">
                                                          <img className={styles.iyo6p2p} alt="" src="https://a0.muscache.com/im/pictures/924d2b73-6c65-4d04-a2ad-bbc028299658.jpg?im_w=320" />
                                                          <span className={styles.a8jt5op}>Thái Lan</span>
                                                        </button>
                                                        <div>
                                                          <div className={styles.o1939qvs} aria-hidden="true">Thái Lan</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className={styles.d1i06yza}>
                                                      <div className={styles.cxpkp2s}>
                                                        <button className={styles.c1j36rnj} aria-pressed="false" type="button">
                                                          <img className={styles.iyo6p2p} alt="" src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320" />
                                                          <span className={styles.a8jt5op}>Hoa Kỳ</span>
                                                        </button>
                                                        <div>
                                                          <div className={styles.o1939qvs} aria-hidden="true">Hoa Kỳ</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                </div>
                                <div className={styles.s1w513da}></div>
                                <div className={styles.cwk1mic}>
                                  <div className={styles.c1ddhymz}>
                                    <div className={styles.b1spesa7} role="button">
                                      <div className={styles.c1nxe26m}>
                                        <div className={styles.lc92ud4}>Nhận phòng</div>
                                        <div className={styles.pz9siyu}>Thêm ngày</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.s1w513da}></div>
                                  <div className={styles.cwk1mic}>
                                    <div className={styles.b1spesa7} role="button">
                                      <div className={styles.c1nxe26m}>
                                        <div className={styles.lc92ud4}>Trả phòng</div>
                                        <div className={styles.pz9siyu}>Thêm ngày</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.s1w513da}></div>
                                <div className={styles.c111bvlt}>
                                  <div className={styles.cggll98}>
                                    <div className={styles.b1spesa7} role="button">
                                      <div className={styles.c1nxe26m}>
                                        <div className={styles.lc92ud4}>Khách</div>
                                        <div className={styles.pz9siyu}>Thêm khách</div>
                                      </div>
                                    </div>
                                    <div className={styles.s1t4vwjw}>
                                      <button className={styles.bhtghtc} type="button">
                                        <div className={styles.c1nkokj4}>
                                          <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={styles.svgC67} aria-hidden="true" role="presentation" focusable="false">
                                              <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                                            </svg>
                                          </div>
                                          <div className={styles.l1h8x6z4}>Tìm kiếm</div>
                                        </div>
                                      </button>
                                    </div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                </div>
                              </div>
                              <div view-transition-element="true" className={styles.f1liq0li}></div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input className={styles.m1ykjevr} type="text" aria-hidden="true" />
                </div>
                <div className={styles.c1ecg77l}>
                  <nav className={styles._vuzcgs}>
                    <div className={styles._176ugpa}>
                      <a className={styles.cqfm6nt} href="/host/homes">
                        <div className={styles.lx138ae}>Booking via Skymate Marketplace</div>
                      </a>
                      <div className={styles._1ubw29}>
                        <button type="button" className={styles.cqfm6nt}>
                          <div className={styles.lx138ae}>
                            <div className={styles._z5mecy}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false">
                                <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
                              </svg>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className={styles._167wsvl} data-profile-menu-open="false">
                        <button type="button" className={styles.cnky2vc}>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" className={styles.svgC68}>
                              <g fill="none"><path d="M2 16h28M2 24h28M2 8h28"></path></g>
                            </svg>
                          </div>
                          <div className={styles.fs7xov7}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                              <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  )
}