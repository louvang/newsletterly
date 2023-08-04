import { Link } from 'react-router-dom';
import { useFetchCurrUserQuery } from '../../store/apis/authApi';

function Homepage() {
  const { data } = useFetchCurrUserQuery();

  let authRow = (
    <p>
      <Link to="/login">Login</Link> || <Link to="/register">Register</Link>
    </p>
  );

  if (data) {
    authRow = (
      <p>
        You're logged in as {data.name}! <Link to="/logout">Logout</Link>
      </p>
    );
  }

  return (
    <div className="Homepage">
      <h1>Welcome to Newsletterly</h1>
      <p>
        Newsletterly is an email editing app that allows users to customize
        newsletter campaigns for their email list. Users can generate an HTML
        code that can then be copied and pasted into their mailer of choice
        whether it be through MailChimp, SendGrid, and any other email marketing
        service that allows custom HTML templates.
      </p>

      {authRow}
    </div>
  );
}

export default Homepage;
