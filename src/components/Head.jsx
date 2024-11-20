import { Helmet } from 'react-helmet';

const Head = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title} - iDevCode</title>
            <meta name="description" content={description} />
            <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="theme-color" content="#2563eb" />
        </Helmet>
    );
};

export default Head; 