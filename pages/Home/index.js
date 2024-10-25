import PageHead from '../Head';
import HeaderStyleTen from '@/components/Header/HeaderStyle-Ten';
import MainDemo from '@/components/01-Main-Demo/01-Main-Demo';
import MobileMenu from '@/components/Header/MobileMenu';

import Context from '@/context/Context';
import { Provider } from 'react-redux';
import Store from '@/redux/store';

import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from 'react-intl';
import Link from 'next/link';

const Home = ({ dir }) => {
  const { locales } = useRouter();
  const intl = useIntl();

  const quote = intl.formatMessage({ id: 'page.home.hero.quote' });
  const title = intl.formatMessage({ id: 'page.home.hero.title' });
  const description = intl.formatMessage({ id: 'page.home.hero.description' });
  return (
    <>
      <div>
        {[...locales].sort().map((locale) => (
          <Link key={locale} href="/" locale={locale}>
            <div>{locale}</div>
          </Link>
        ))}
      </div>
      <main dir={dir}>
        <h1>
          {/* <FormattedMessage
            id="page.home.hero.quote"
            values={{ b: (chunks) => <b>{chunks}</b> }}
          /> */}
          {quote}
        </h1>
        <h3>{title}</h3>
        <p>
          {/* <FormattedMessage id = "page.home.hero.description"/> */}
          {description}
        </p>
      </main>
      {/* <PageHead title="Home - Online Courses & Education NEXTJS14 Template" />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MainDemo />
        </Context>
      </Provider> */}
    </>
  );
};

export default Home;
