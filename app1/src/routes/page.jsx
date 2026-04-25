import * as Sentry from '@sentry/react';
import { Helmet } from '@modern-js/runtime/head';
import './index.css';
import Button from 'app2/Button';

const Index = () => (
  <div className="container-box">
    <h1>Basic Host-Remote</h1>
    <h2>App 1</h2>
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
    </Helmet>
    <main>
      <div className="title">
        Welcome to
        <img
          className="logo"
          src="https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-js-logo.svg"
          alt="Modern.js Logo"
        />
        <p className="name">Modern.js</p>
      </div>
      <p className="description">
        FEDERATED:{' '}
        <Sentry.ErrorBoundary
          fallback={<span style={{ color: 'red' }}>Remote app2 failed to load</span>}
          onError={(error) => console.error('MFE load error caught by Sentry:', error)}
        >
          <Button />
        </Sentry.ErrorBoundary>
      </p>

      <div className="grid">
        <a href="https://modernjs.dev/guides/get-started/introduction.html" target="_blank" rel="noopener noreferrer" className="card">
          <h2>Guide</h2>
          <p>Follow the guides to use all features of Modern.js.</p>
        </a>
        <a href="https://modernjs.dev/tutorials/foundations/introduction.html" target="_blank" className="card" rel="noreferrer">
          <h2>Tutorials</h2>
          <p>Learn to use Modern.js to create your first application.</p>
        </a>
        <a href="https://modernjs.dev/configure/app/usage.html" target="_blank" className="card" rel="noreferrer">
          <h2>Config</h2>
          <p>Find all configuration options provided by Modern.js.</p>
        </a>
        <a href="https://github.com/web-infra-dev/modern.js" target="_blank" rel="noopener noreferrer" className="card">
          <h2>Github</h2>
          <p>View the source code of Github, feel free to contribute.</p>
        </a>
      </div>
    </main>
  </div>
);

export default Index;