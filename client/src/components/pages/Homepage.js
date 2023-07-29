import { Link } from 'react-router-dom';

function Homepage() {
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

      <p>
        <Link to="login">Login</Link> || <Link to="register">Register</Link>
      </p>
    </div>
  );
}

export default Homepage;
