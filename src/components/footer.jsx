import Image from 'next/image';
import styles from '@/styles/footer.module.scss';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from 'react-icons/io';
import Link from 'next/link';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={`container grid ${styles['footer--grid']}`}>
        <div className={styles['logo-col']}>
          <Link href='#' className={styles['footer-logo']}>
            <Image
              width={200}
              height={200}
              className='logo'
              alt='Omnifood logo'
              src='/img/omnifood-logo.png'
            />
          </Link>

          <ul className={styles['social-links']}>
            <li>
              <Link
                aria-label='instagram'
                className={styles['footer-link']}
                href='#'>
                <IoLogoInstagram className={styles['social-icon']} />
              </Link>
            </li>
            <li>
              <Link aria-label='fb' className={styles['footer-link']} href='#'>
                <IoLogoFacebook className={styles['social-icon']} />
              </Link>
            </li>
            <li>
              <Link
                aria-label='twitter'
                className={styles['footer-link']}
                href='#'>
                <IoLogoTwitter className={styles['social-icon']} />
              </Link>
            </li>
          </ul>

          <p className={styles['copyright']}>
            Copyright &copy; 2027 by Omnifood, Inc. All rights reserved.
          </p>
        </div>
        <div className={styles['address-col']}>
          <p className={styles['footer-heading']}>Contact us</p>
          <address className={styles['contacts']}>
            <p className={styles['address']}>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <Link className={styles['footer-link']} href='tel:415-201-6370'>
                415-201-6370
              </Link>
              <br />
              <a
                className={styles['footer-link']}
                href='mailto:hello@omnifood.com'>
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>
        <nav className={styles['nav-col']}>
          <p className={styles['footer-heading']}>Account</p>
          <ul className='footer-nav'>
            <li>
              <Link className={styles['footer-link']} href='#'>
                Create account
              </Link>
            </li>
            <li>
              <Link className={styles['footer-link']} href='#'>
                Sign in
              </Link>
            </li>
            <li>
              <Link className={styles['footer-link']} href='#'>
                iOS app
              </Link>
            </li>
            <li>
              <Link className={styles['footer-link']} href='#'>
                Android app
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={styles['nav-col']}>
          <p className={styles['footer-heading']}>Company</p>
          <ul className='footer-nav'>
            <li>
              <Link className={styles['footer-link']} href='#'>
                About Omnifood
              </Link>
            </li>
            <li>
              <Link className={styles['footer-link']} href='#'>
                For Business
              </Link>
            </li>
            <li>
              <Link className={styles['footer-link']} href='#'>
                Cooking partners
              </Link>
            </li>
            <li>
              <Link className={styles['footer-link']} href='#'>
                Careers
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={styles['nav-col']}>
          <p className={styles['footer-heading']}>Resources</p>
          <ul className='footer-nav'>
            <li>
              <Link className={styles['footer-link']} href='#'>
                Recipe directory{' '}
              </Link>
            </li>
            <li>
              <Link className={styles['footer-link']} href='#'>
                Help center
              </Link>
            </li>
            <li>
              <Link className={styles['footer-link']} href='#'>
                Privacy & terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
