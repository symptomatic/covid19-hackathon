import React from 'react';

import CovidQueryPage from './client/CovidQueryPage';
import AboutDialog from './client/AboutDialog';
import PrivacyPage from './client/PrivacyPage';
import TermsAndConditionsPage from './client/TermsAndConditionsPage';
import ConformanceCheck from './client/ConformanceCheck';

import { 
  FetchButtons,
  SampleDialogComponent
} from './client/FooterButtons';

import { HeaderNavigation } from './client/HeaderNavigation';

var DynamicRoutes = [{
  'name': 'CovidQueryPage',
  'path': '/query-fhir-provider',
  'component': CovidQueryPage
}, {
  'name': 'AboutDialog',
  'path': '/info',
  'component': AboutDialog
}, {
  'name': 'PrivacyPage',
  'path': '/privacy',
  'component': PrivacyPage
}, {
  'name': 'TermsAndConditionsPage',
  'path': '/terms-and-conditions',
  'component': TermsAndConditionsPage
}];

let DialogComponents = [{
  name: "SampleDialogComponent",
  component: <SampleDialogComponent />
}, {
  name: "ConformanceCheck",
  component: <ConformanceCheck />
}, {
  name: "AboutDialog",
  component: <AboutDialog />
}]

let FooterButtons = [{
  pathname: '/query-fhir-provider',
  component: <FetchButtons />
}, {
  pathname: '/',
  component: <FetchButtons />
}];


var SidebarElements = [{
  primaryText: 'Privacy Policy',
  to: '/privacy'
}, {
  primaryText: 'Terms and Conditions',
  to: '/terms-and-conditions'
}];


let MainPage = CovidQueryPage;

export { 
  DynamicRoutes, 

  CovidQueryPage,
  HeaderNavigation,

  FooterButtons,
  SidebarElements,
  DialogComponents,

  MainPage
};
