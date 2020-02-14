import React from 'react';
import './RestaurantMenuList.scss';
import { HashLink } from 'react-router-hash-link';
import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { MenuCategorySection } from '../MenuCategorySection';

export const RestaurantMenuList = ({ restaurantMenuSectionsInfo }) => {
  const panes = [
    {
      menuItem: 'Categories',
      render: () => (
        <Tab.Pane>
          <ul className="categories-list-navigation_closed">
            {
              restaurantMenuSectionsInfo
                .map(section => (
                  <li
                    key={`#${section.title.split(' ').join('-')}1`}
                    className="categories-list-navigation_closed__item"
                  >
                    <HashLink
                      to={`#${section.title.split(' ').join('-')}`}
                    >
                      {section.title}
                    </HashLink>
                  </li>
                ))
                .slice(0, 6)

            }
          </ul>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Show all categories',
      render: () => (
        <Tab.Pane>
          <ul className="restaurant-menu__categories-list-navigation
           categories-list-navigation"
          >
            {
              restaurantMenuSectionsInfo
                .map(section => (
                  <li
                    key={`#${section.title.split(' ').join('-')}`}
                    className="categories-list-navigation__item"
                  >
                    <HashLink
                      to={`#${section.title.split(' ').join('-')}`}
                    >
                      {section.title}
                    </HashLink>
                  </li>
                ))
            }
          </ul>
        </Tab.Pane>
      ),
    },

  ];

  return (
    <section className="restaurant-menu">
      <div className="content">

        <Tab
          className="restaurant-menu__tabs-navigation"
          panes={panes}
        />

        <ul className="restaurant-menu__categories-list categories-list">
          {
            restaurantMenuSectionsInfo
              .map(section => (
                <li
                  key={
                    `${section.title.split(' ').join('-')}+
                      categories-list__category`
                  }
                  id={section.title.split(' ').join('-')}
                  className="categories-list__category"
                >
                  <MenuCategorySection
                    categorySection={section}
                  />
                </li>
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
