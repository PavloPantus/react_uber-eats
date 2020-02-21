import React, { useEffect, useRef, useMemo } from 'react';
import './RestaurantMenuList.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import throttle from 'lodash.throttle';
import * as Scroll from 'react-scroll';
import { MenuCategorySection } from '../MenuCategorySection';

export const RestaurantMenuList = ({ restaurantMenuSectionsInfo }) => {
  const sectionsRefs = useMemo(
    () => {
      const NewSectionRefs = {};

      restaurantMenuSectionsInfo.forEach(
        (section) => {
          NewSectionRefs[section.title.split(' ').join('-')]
            = React.createRef();
        }
      );

      return NewSectionRefs;
    }, []
  );

  /* refs for each nav item */

  const navItemsRefs = useMemo(
    () => {
      const NewNavBaRRefs = {};

      restaurantMenuSectionsInfo.forEach(
        (section) => {
          NewNavBaRRefs[section.title.split(' ').join('-')] = React.createRef();
        }
      );

      return NewNavBaRRefs;
    }, []
  );

  const navBarRef = useRef(null);

  useEffect(() => {
    let throttledListener;

    document.removeEventListener('scroll', throttledListener);

    throttledListener = throttle(
      () => {
        Object.entries(sectionsRefs)
          .forEach(
            (sectionsRef) => {
              const fromTop = window.scrollY + 74;
              const section = sectionsRef[1].current;

              if (!section) {
                return;
              }

              if (section.offsetTop <= fromTop
                && section.offsetTop + section.offsetHeight > fromTop) {
                navBarRef.current.scrollLeft
                  = navItemsRefs[sectionsRef[0]].current.offsetLeft;
              }
            }
          );
      }
      , 300
    );

    document.addEventListener('scroll', throttledListener);

    return function cleanup() {
      document.removeEventListener('scroll', throttledListener);
    };
  }, [sectionsRefs]);

  return (
    <section className="restaurant-menu">
      <div className="content">

        <nav className="restaurant-menu__nav">

          <ul
            ref={navBarRef}
            className="restaurant-menu__categories-list-navigation
           categories-list-navigation"
          >
            {
              restaurantMenuSectionsInfo
                .map(section => (
                  <li
                    ref={navItemsRefs[section.title.split(' ').join('-')]}
                    key={`#${section.title.split(' ').join('-')}`}
                    className={
                      classNames(
                        [
                          'categories-list-navigation__item',
                        ]
                      )
                    }
                  >
                    <Scroll.Link
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                          Scroll.scroller
                            .scrollTo(`${section.title.split(' ').join('-')}`);
                        }
                      }}
                      className="categories-list-navigation__link"
                      activeClass="categories-list-navigation__link_active"
                      spy
                      to={`${section.title.split(' ').join('-')}`}
                      smooth
                      offset={-74}
                    >
                      {section.title}
                    </Scroll.Link>
                  </li>
                ))
            }
          </ul>

        </nav>

        <ul className="restaurant-menu__categories-list categories-list">
          {
            restaurantMenuSectionsInfo
              .map((section, i, arr) => (
                <Scroll.Element
                  key={
                    `${section.title.split(' ').join('-')}+
                      categories-list__category`
                  }
                  name={section.title.split(' ').join('-')}
                >
                  <li
                    ref={sectionsRefs[section.title.split(' ').join('-')]}
                    id={section.title.split(' ').join('-')}
                    className="categories-list__category"
                  >
                    <MenuCategorySection
                      categorySection={section}
                    />
                  </li>
                </Scroll.Element>
              ))
          }
        </ul>
      </div>
    </section>
  );
};

RestaurantMenuList.propTypes = {
  restaurantMenuSectionsInfo: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
};
