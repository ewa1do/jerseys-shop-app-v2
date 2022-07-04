import { StyledFooter } from './styles.js';

export const FooterScreen = () => {
  return (
    <StyledFooter>
      <div>
        <h3>
          WebApp made by{' '}
          <a
            href='https://www.linkedin.com/in/eduardo-vera-612626191/'
            target='_blank'
            className='name'
          >
            Eduardo Vera
          </a>{' '}
          for study purposes &copy; {new Date().getFullYear()}
        </h3>
      </div>

      <div>
        <a
          href='https://github.com/ewa1do/jerseys-shop-app-v2'
          target='_blank'
        >
          App Repository
        </a>
        <a
          href='https://eduardovera.netlify.app/'
          target='_blank'
        >
          My Portfolio
        </a>
      </div>
    </StyledFooter>
  );
};
