import React from 'react';
import classnames from 'clsx';
import PropTypes from 'prop-types';
import styles from './SiteLayout.scss';
import PaginationSelector from '../PaginationSelector';

export const SiteLayout = ({ navigation, content, component }) => (
  <>
    <div className={classnames(styles.flexCol, styles.background)}>
      {navigation}
    </div>
    <div className={classnames(styles.flexHeader)}>
      <div className={classnames(styles.flexFluid)}>header</div>
      {
                React.createElement(
                  component,
                  { className: classnames(styles.flexFluid) },
                  content,
                )
      }
      <div className={styles.footer}>
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
     * Slot for the site's navigation
     */
  navigation: PropTypes.node,

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
