import React from 'react';
import classnames from 'clsx';
import PropTypes from 'prop-types';
import styles from './SiteLayout.scss';
import PaginationSelector from '../PaginationSelector';
import PageSelector from '../PageSelector';
import Header from './Header';

export const SiteLayout = ({content, component }) => (
  <>
    <div className={classnames(styles.flexHeader)}>
      <div className={classnames(styles.header)}><Header/></div>
      {
                React.createElement(
                  component,
                  { className: classnames(styles.flexFluid) },
                  content,
                )
      }
      <div className={styles.footer}>
          <PageSelector/>
          <PaginationSelector/>
      </div>
    </div>
  </>
);

SiteLayout.defaultProps = {
  navigation: null,
  component: 'main',
  content: null,
};

SiteLayout.propTypes = {
  /**
     * Slot for the site's content
     */
  content: PropTypes.node,

  /**
     * The HTML markup used for the content node
     */
  component: PropTypes.string,
};

SiteLayout.displayName = 'SiteLayout';

export default SiteLayout;
