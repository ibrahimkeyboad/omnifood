import Image from 'next/image';
import styles from '@/styles/footer.module.scss';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from 'react-icons/io';

function Footer() {
  return (
    <footer class={styles['footer']}>
      <div class={`container grid ${styles['footer--grid']}`}>
        <div class={styles['logo-col']}>
          <a href='#' class={styles['footer-logo']}>
            <Image
              width={200}
              height={200}
              class='logo'
              alt='Omnifood logo'
              src='/img/omnifood-logo.png'
            />
          </a>

          <ul class={styles['social-links']}>
            <li>
              <a class={styles['footer-link']} href='#'>
                <IoLogoInstagram class={styles['social-icon']} />
              </a>
            </li>
            <li>
              <a class={styles['footer-link']} href='#'>
                <IoLogoFacebook class={styles['social-icon']} />
              </a>
            </li>
            <li>
              <a class={styles['footer-link']} href='#'>
                <IoLogoTwitter class={styles['social-icon']} />
              </a>
            </li>
          </ul>

          <p class={styles['copyright']}>
            Copyright &copy; 2027 by Omnifood, Inc. All rights reserved.
          </p>
        </div>
        <div class={styles['address-col']}>
          <p class={styles['footer-heading']}>Contact us</p>
          <address class={styles['contacts']}>
            <p class={styles['address']}>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a class={styles['footer-link']} href='tel:415-201-6370'>
                415-201-6370
              </a>
              <br />
              <a class={styles['footer-link']} href='mailto:hello@omnifood.com'>
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>
        <nav class={styles['nav-col']}>
          <p class={styles['footer-heading']}>Account</p>
          <ul class={styles['footer-nav']}>
            <li>
              <a class={styles['footer-link']} href='#'>
                Create account
              </a>
            </li>
            <li>
              <a class={styles['footer-link']} href='#'>
                Sign in
              </a>
            </li>
            <li>
              <a class={styles['footer-link']} href='#'>
                iOS app
              </a>
            </li>
            <li>
              <a class={styles['footer-link']} href='#'>
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav class={styles['nav-col']}>
          <p class={styles['footer-heading']}>Company</p>
          <ul class={styles['footer-nav']}>
            <li>
              <a class={styles['footer-link']} href='#'>
                About Omnifood
              </a>
            </li>
            <li>
              <a class={styles['footer-link']} href='#'>
                For Business
              </a>
            </li>
            <li>
              <a class={styles['footer-link']} href='#'>
                Cooking partners
              </a>
            </li>
            <li>
              <a class={styles['footer-link']} href='#'>
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav class={styles['nav-col']}>
          <p class={styles['footer-heading']}>Resources</p>
          <ul class={styles['footer-nav']}>
            <li>
              <a class={styles['footer-link']} href='#'>
                Recipe directory{' '}
              </a>
            </li>
            <li>
              <a class={styles['footer-link']} href='#'>
                Help center
              </a>
            </li>
            <li>
              <a class={styles['footer-link']} href='#'>
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
